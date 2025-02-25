import { a as addSubscriber } from '../../chunks/database_BJ4PabdF.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { email } = await request.json();
    if (!email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email é obrigatório"
        }),
        { status: 400 }
      );
    }
    const subscriber = addSubscriber(email);
    return new Response(
      JSON.stringify({
        success: true,
        message: "Inscrição realizada com sucesso!",
        subscriber
      })
    );
  } catch (error) {
    console.error("Newsletter error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Erro ao processar inscrição"
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
