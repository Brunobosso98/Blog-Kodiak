import { g as getPostLikes, t as togglePostLike } from '../../chunks/database_BJ4PabdF.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ url }) => {
  try {
    const postSlug = url.searchParams.get("postSlug");
    const userId = url.searchParams.get("userId");
    console.log("GET request params:", { postSlug, userId });
    if (!postSlug) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "O parâmetro 'postSlug' é obrigatório."
        }),
        { status: 400 }
      );
    }
    const result = getPostLikes(postSlug, userId || void 0);
    return new Response(
      JSON.stringify({
        success: true,
        ...result
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erro ao obter likes:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Erro interno ao obter likes."
      }),
      { status: 500 }
    );
  }
};
const POST = async ({ request }) => {
  try {
    const { userId, postSlug } = await request.json();
    console.log("POST request body:", { userId, postSlug });
    if (!userId || !postSlug) {
      console.error("Erro: userId ou postSlug estão ausentes.", { userId, postSlug });
      return new Response(
        JSON.stringify({
          success: false,
          message: "Os parâmetros 'userId' e 'postSlug' são obrigatórios."
        }),
        { status: 400 }
      );
    }
    const result = togglePostLike(userId, postSlug);
    return new Response(
      JSON.stringify({
        success: true,
        ...result
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erro ao processar like:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Erro interno ao processar like."
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
