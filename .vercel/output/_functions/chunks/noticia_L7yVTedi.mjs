import { c as createComponent, a as createAstro, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, g as renderScript } from './astro/server_BJVt15Gm.mjs';
import 'kleur/colors';
import { H as Header, F as Footer } from './footer_D6imUcvi.mjs';
import { S as ShareButtons } from './ShareButtons_DiRSLUap.mjs';
/* empty css                               */
/* empty css                                             */

const $$Astro = createAstro();
const $$Noticia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Noticia;
  const postSlug = Astro2.url.pathname.split("/").pop();
  const { title, description = "Blog Kodiak ERP - Insights sobre Gest\xE3o Industrial" } = Astro2.props;
  const popularPosts = [
    {
      title: "Como Implementar um ERP com Sucesso",
      date: "2024-02-20",
      url: "/posts/implementar-erp-sucesso"
    },
    {
      title: "Tend\xEAncias de Automa\xE7\xE3o Industrial",
      date: "2024-02-18",
      url: "/posts/tendencias-automacao"
    },
    {
      title: "Guia de Gest\xE3o de Produ\xE7\xE3o",
      date: "2024-02-15",
      url: "/posts/guia-gestao-producao"
    },
    {
      title: "Ind\xFAstria 4.0 na Pr\xE1tica",
      date: "2024-02-12",
      url: "/posts/industria-4-pratica"
    },
    {
      title: "Melhores Pr\xE1ticas em ERP",
      date: "2024-02-10",
      url: "/posts/melhores-praticas-erp"
    }
  ];
  return renderTemplate`<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">${renderHead()}</head> <body class="min-h-screen bg-gray-50"> ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/components/header", "client:component-export": "Header" })} <!-- Main Content --> <div class="mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="flex flex-col lg:flex-row gap-8"> <!-- Sidebar --> <aside class="lg:w-80 space-y-8"> <!-- Search Bar --> <div class="bg-white rounded-lg shadow p-6"> <form class="space-y-4"> <div class="relative"> <input type="search" placeholder="Buscar notícias..." class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i> </div> </form> </div> <!-- Author Profile --> <div class="bg-white rounded-lg shadow p-6 text-center"> <img src="https://i.pravatar.cc/150" alt="Autor" class="w-32 h-32 rounded-full mx-auto mb-4"> <h3 class="text-xl font-semibold text-gray-900 mb-2">João Silva</h3> <p class="text-gray-600 mb-4">
Especialista em Gestão Industrial e Tecnologia ERP
</p> </div> <!-- Popular Posts --> <div class="bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">Posts Populares</h3> <ul class="space-y-4"> ${popularPosts.map((post) => renderTemplate`<li> <a${addAttribute(post.url, "href")} class="group"> <h4 class="text-gray-900 group-hover:text-blue-600 font-medium mb-1"> ${post.title} </h4> <p class="text-sm text-gray-500">${post.date}</p> </a> </li>`)} </ul> </div> </aside> <!-- Main Content Area --> <main class="lg:flex-1"> ${renderSlot($$result, $$slots["default"])} <!-- Botões de Curtida e Compartilhamento --> <div class="flex items-center justify-between mt-8 border-t border-gray-200 pt-4"> <div class="flex items-center space-x-4"> <!-- Botão de Curtida --> <button id="like-button" class="mr-3 flex items-center space-x-1 text-gray-500 hover:text-red-500 transition"${addAttribute(Astro2.url.pathname.split("/").pop(), "data-slug")}> <i class="fas fa-heart"></i> <span class="like-count text-sm">0</span> </button> <!-- Botão de Compartilhamento --> ${renderComponent($$result, "ShareButtons", ShareButtons, { "client:load": true, "url": `${Astro2.url.origin}/posts/${postSlug}`, "title": "/", "client:component-hydration": "load", "client:component-path": "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/components/ShareButtons", "client:component-export": "ShareButtons" })} </div> </div> </main></div> </div> ${renderComponent($$result, "Footer", Footer, {})} ${renderScript($$result, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/layouts/noticia.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/layouts/noticia.astro", void 0);

export { $$Noticia as $ };
