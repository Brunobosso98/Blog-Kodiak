import { supabase } from "../lib/supabase";
import { v4 as uuidv4 } from "uuid";

// 📌 Criar ou buscar usuário
export async function createOrGetUser(name: string, email: string) {
  // Verifica se o usuário já existe
  const { data: existingUser } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (existingUser) {
    return existingUser;
  }

  // Criar novo usuário
  const { data: newUser, error } = await supabase
    .from("users")
    .insert([{ id: uuidv4(), name, email }])
    .select()
    .single();

  if (error) {
    console.error("Erro ao criar usuário:", error);
    return null;
  }

  return newUser;
}

// 📌 Alternar curtida em um post
export async function togglePostLike(userId: string, postSlug: string) {
  // Verifica se o usuário já curtiu
  const { data: existingLike, error } = await supabase
    .from("likes")
    .select("*")
    .eq("user_id", userId)
    .eq("post_slug", postSlug)
    .single();

    if (error && error.code !== "PGRST116") { // Ignora erro de "no rows found"
      console.error("Erro ao verificar curtida:", error);
      return { success: false, message: "Erro ao verificar curtida." };
    }
  
    if (existingLike) {
      // 🛠️ 🔹 Remover curtida
      await supabase.from("likes").delete().eq("id", existingLike.id);
    } else {
      // 🛠️ 🔹 Adicionar curtida
      await supabase
        .from("likes")
        .insert([{ id: uuidv4(), user_id: userId, post_slug: postSlug }]);
    }
  
    // 🛠️ 🔹 Retornar a contagem atualizada de likes
    return await getPostLikes(postSlug, userId);
  }

// 📌 Obter número de likes e se o usuário já curtiu
export async function getPostLikes(postSlug: string, userId?: string) {
  const { data: likeCountData } = await supabase
    .from("likes")
    .select("*")
    .eq("post_slug", postSlug);

  const { data: userLikeData } = userId
    ? await supabase
        .from("likes")
        .select("*")
        .eq("user_id", userId)
        .eq("post_slug", postSlug)
        .single()
    : { data: null };

  return {
    likesCount: likeCountData ? likeCountData.length : 0,
    isLiked: userLikeData ? true : false,
  };
}

// 📌 Adicionar um novo inscrito à newsletter
export async function addSubscriber(email: string) {
  const { data, error } = await supabase
    .from("subscribers")
    .insert([{ id: uuidv4(), email }])
    .select()
    .single();

  if (error) {
    console.error("Erro ao adicionar inscrito:", error);
    return null;
  }

  return data;
}
