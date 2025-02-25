import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { v4 } from 'uuid';

dotenv.config();
const SUPABASE_URL = "https://juguwhtgmctgnjohnjkq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1Z3V3aHRnbWN0Z25qb2huamtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTEyMDYsImV4cCI6MjA1NjA2NzIwNn0.n6COIlA6R7t_TdeKmEft03A2OqNSr8YulIxXUobGXCA";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function createOrGetUser(name, email) {
  const { data: existingUser } = await supabase.from("users").select("*").eq("email", email).single();
  if (existingUser) {
    return existingUser;
  }
  const { data: newUser, error } = await supabase.from("users").insert([{ id: v4(), name, email }]).select().single();
  if (error) {
    console.error("Erro ao criar usuário:", error);
    return null;
  }
  return newUser;
}
async function togglePostLike(userId, postSlug) {
  const { data: existingLike, error } = await supabase.from("likes").select("*").eq("user_id", userId).eq("post_slug", postSlug).single();
  if (error && error.code !== "PGRST116") {
    console.error("Erro ao verificar curtida:", error);
    return { success: false, message: "Erro ao verificar curtida." };
  }
  if (existingLike) {
    await supabase.from("likes").delete().eq("id", existingLike.id);
  } else {
    await supabase.from("likes").insert([{ id: v4(), user_id: userId, post_slug: postSlug }]);
  }
  return await getPostLikes(postSlug, userId);
}
async function getPostLikes(postSlug, userId) {
  const { data: likeCountData } = await supabase.from("likes").select("*").eq("post_slug", postSlug);
  const { data: userLikeData } = userId ? await supabase.from("likes").select("*").eq("user_id", userId).eq("post_slug", postSlug).single() : { data: null };
  return {
    likesCount: likeCountData ? likeCountData.length : 0,
    isLiked: userLikeData ? true : false
  };
}
async function addSubscriber(email) {
  const { data, error } = await supabase.from("subscribers").insert([{ id: v4(), email }]).select().single();
  if (error) {
    console.error("Erro ao adicionar inscrito:", error);
    return null;
  }
  return data;
}

export { addSubscriber as a, createOrGetUser as c, getPostLikes as g, togglePostLike as t };
