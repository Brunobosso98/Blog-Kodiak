import { c as createOrGetUser } from '../../chunks/database_BMdpV1hc.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { email, name } = await request.json();
    if (!email || !name) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email e nome são obrigatórios"
        }),
        { status: 400 }
      );
    }
    const user = createOrGetUser(name, email);
    return new Response(
      JSON.stringify({
        success: true,
        user
      })
    );
  } catch (error) {
    console.error("Auth error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Erro ao processar autenticação"
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
