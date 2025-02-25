import Database from 'better-sqlite3';
import { v4 } from 'uuid';

const db = new Database("newsletter.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  );

  CREATE TABLE IF NOT EXISTS likes (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    post_slug TEXT NOT NULL,
    UNIQUE(user_id, post_slug)
  );

  CREATE TABLE IF NOT EXISTS subscribers (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL
  );
`);
const createUser = db.prepare(`
  INSERT INTO users (id, name, email) 
  VALUES (?, ?, ?)
  ON CONFLICT(email) DO UPDATE SET name = excluded.name
`);
const findUser = db.prepare("SELECT * FROM users WHERE email = ?");
const toggleLike = db.prepare(`
  INSERT INTO likes (id, user_id, post_slug)
  VALUES (?, ?, ?)
  ON CONFLICT(user_id, post_slug) DO NOTHING
`);
const getLikes = db.prepare(`
  SELECT COUNT(*) as count FROM likes WHERE post_slug = ?
`);
const hasUserLiked = db.prepare(`
  SELECT EXISTS(
    SELECT 1 FROM likes WHERE user_id = ? AND post_slug = ?
  ) as liked
`);
const saveSubscriber = db.prepare(`
  INSERT INTO subscribers (id, email)
  VALUES (?, ?)
  ON CONFLICT(email) DO NOTHING
`);
function createOrGetUser(name, email) {
  let user = findUser.get(email);
  if (!user) {
    createUser.run(v4(), name, email);
    user = findUser.get(email);
  }
  return user;
}
function togglePostLike(userId, postSlug) {
  const likedResult = hasUserLiked.get(userId, postSlug);
  const liked = likedResult?.liked === 1;
  if (liked) {
    db.prepare("DELETE FROM likes WHERE user_id = ? AND post_slug = ?").run(userId, postSlug);
  } else {
    toggleLike.run(v4(), userId, postSlug);
  }
  const likesResult = getLikes.get(postSlug);
  const likesCount = likesResult?.count ?? 0;
  return { isLiked: !liked, likesCount };
}
function getPostLikes(postSlug, userId) {
  const likesResult = getLikes.get(postSlug);
  const likesCount = likesResult?.count ?? 0;
  const likedResult = userId ? hasUserLiked.get(userId, postSlug) : void 0;
  const isLiked = likedResult?.liked === 1;
  return { isLiked, likesCount };
}
function addSubscriber(email) {
  const id = v4();
  saveSubscriber.run(id, email);
  return { id, email };
}

export { addSubscriber as a, createOrGetUser as c, getPostLikes as g, togglePostLike as t };
