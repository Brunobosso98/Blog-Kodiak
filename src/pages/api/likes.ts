import type { APIRoute } from "astro";
import { togglePostLike, getPostLikes } from "../../db/database";

export const prerender = false;

// 📌 Método GET: Obtém a quantidade de likes e se o usuário já curtiu
export const GET: APIRoute = async ({ url }) => {
  try {
    const postSlug = url.searchParams.get("postSlug");
    const userId = url.searchParams.get("userId");

    console.log("GET request params:", { postSlug, userId });

    // Verifica se o postSlug foi enviado
    if (!postSlug) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "O parâmetro 'postSlug' é obrigatório.",
        }),
        { status: 400 }
      );
    }

    // 🛠️ 🔹 Corrigido para usar `await` antes de chamar a função
    const result = await getPostLikes(postSlug, userId || undefined);

    return new Response(
      JSON.stringify({
        success: true,
        ...result,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erro ao obter likes:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Erro interno ao obter likes.",
      }),
      { status: 500 }
    );
  }
};

// 📌 Método POST: Alterna like no post (curtir/descurtir)
export const POST: APIRoute = async ({ request }) => {
  try {
    const { userId, postSlug } = await request.json();

    console.log("POST request body:", { userId, postSlug });

    if (!userId || !postSlug) {
      console.error("Erro: userId ou postSlug estão ausentes.", { userId, postSlug });
      return new Response(
        JSON.stringify({
          success: false,
          message: "Os parâmetros 'userId' e 'postSlug' são obrigatórios.",
        }),
        { status: 400 }
      );
    }

    // 🛠️ 🔹 Corrigido para usar `await`
    const result = await togglePostLike(userId, postSlug);

    return new Response(
      JSON.stringify({
        success: true,
        ...result,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erro ao processar like:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Erro interno ao processar like.",
      }),
      { status: 500 }
    );
  }
};
