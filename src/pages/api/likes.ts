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

    // Obtém os likes do post e verifica se o usuário curtiu
    const result = getPostLikes(postSlug, userId || undefined);

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

    // Verifica se os parâmetros obrigatórios foram enviados
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

    // Alterna o like no post
    const result = togglePostLike(userId, postSlug);

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
