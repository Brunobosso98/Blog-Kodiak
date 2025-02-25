/* empty css                                          */
import { c as createComponent, a as createAstro, d as renderComponent, g as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ukpE43jm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CMhIVaxw.mjs';
import Database from 'better-sqlite3';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Subscribers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Subscribers;
  const adminKey = Astro2.request.headers.get("x-admin-key");
  if (!adminKey || adminKey !== "123456789987654321") {
    return new Response("Unauthorized", { status: 401 });
  }
  const db = new Database("newsletter.db");
  const subscribers = db.prepare("SELECT * FROM subscribers ORDER BY created_at DESC").all();
  db.close();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin - Subscribers" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-8 px-4"> <h1 class="text-2xl font-bold mb-6">Newsletter Subscribers</h1> <div class="bg-white shadow rounded-lg overflow-hidden"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Inscrição</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${subscribers.map((subscriber) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${subscriber.email}</td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${new Date(subscriber.created_at).toLocaleString("pt-BR")} </td> </tr>`)} </tbody> </table> </div> <p class="mt-4 text-sm text-gray-600">Total de inscritos: ${subscribers.length}</p> </div> ` })}`;
}, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/admin/subscribers.astro", void 0);
const $$file = "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/admin/subscribers.astro";
const $$url = "/admin/subscribers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Subscribers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
