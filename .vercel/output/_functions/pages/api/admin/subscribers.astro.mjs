import Database from 'better-sqlite3';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ request }) => {
  try {
    const adminKey = request.headers.get("x-admin-key");
    if (!adminKey || adminKey !== "123456789987654321") {
      return new Response(
        JSON.stringify({ success: false, message: "Unauthorized" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const db = new Database("newsletter.db");
    const subscribers = db.prepare("SELECT * FROM subscribers ORDER BY created_at DESC").all();
    db.close();
    return new Response(
      JSON.stringify({
        success: true,
        subscribers,
        count: subscribers.length
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal server error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
