import Database from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new Database('newsletter.db');

// 📌 Tipos de Dados
interface User {
  id: string;
  name: string;
  email: string;
}

interface Like {
  count: number;
}

interface LikedStatus {
  liked: number;
}

interface Subscriber {
  id: string;
  email: string;
}

// 📌 Preparação das Queries
const createUser = db.prepare(`
  INSERT INTO users (id, name, email) 
  VALUES (?, ?, ?)
  ON CONFLICT(email) DO UPDATE SET 
    name = excluded.name
`);

const findUser = db.prepare('SELECT * FROM users WHERE email = ?');

const toggleLike = db.prepare(`
  INSERT INTO likes (id, user_id, post_slug)
  VALUES (?, ?, ?)
  ON CONFLICT(user_id, post_slug) DO 
    UPDATE SET id = id
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
  ON CONFLICT(email) DO UPDATE SET 
    id = id
`);

// 📌 Criar ou buscar usuário
export function createOrGetUser(name: string, email: string): User {
  let user = findUser.get(email) as User | undefined;
  if (!user) {
    createUser.run(uuidv4(), name, email);
    user = findUser.get(email) as User; // Buscar novamente após inserção
  }
  return user!;
}

// 📌 Curtir ou Descurtir um Post
export function togglePostLike(userId: string, postSlug: string) {
  const likedResult = hasUserLiked.get(userId, postSlug) as LikedStatus | undefined;
  const liked = likedResult?.liked === 1;

  if (liked) {
    db.prepare('DELETE FROM likes WHERE user_id = ? AND post_slug = ?').run(userId, postSlug);
  } else {
    toggleLike.run(uuidv4(), userId, postSlug);
  }

  // 📌 Garantir que `likes.count` seja sempre um número
  const likesResult = getLikes.get(postSlug) as Like | undefined;
  const likesCount = likesResult?.count ?? 0;

  return { isLiked: !liked, likesCount };
}

// 📌 Obter número de likes e se o usuário já curtiu
export function getPostLikes(postSlug: string, userId?: string) {
  const likesResult = getLikes.get(postSlug) as Like | undefined;
  const likesCount = likesResult?.count ?? 0;

  const likedResult = userId ? (hasUserLiked.get(userId, postSlug) as LikedStatus | undefined) : undefined;
  const isLiked = likedResult?.liked === 1;

  return { isLiked, likesCount };
}

// 📌 Adicionar um novo inscrito à newsletter
export function addSubscriber(email: string): Subscriber {
  saveSubscriber.run(uuidv4(), email);
  return { id: uuidv4(), email };
}

export default db;
