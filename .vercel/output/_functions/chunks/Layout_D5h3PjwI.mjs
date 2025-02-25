import { c as createComponent, a as createAstro, r as renderTemplate, g as renderScript, e as renderComponent, f as renderSlot, b as addAttribute, d as renderHead } from './astro/server_BJVt15Gm.mjs';
import 'kleur/colors';
import { F as Footer, H as Header } from './footer_D6imUcvi.mjs';
/* empty css                               */
/* empty css                               */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Blog Kodiak ERP - Insights sobre Gest\xE3o Industrial",
    categories = {}
  } = Astro2.props;
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
      url: "/posts/analise-dados-industria-4"
    }
  ];
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="description"', '><meta name="generator"', "><title>", '</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">', '</head> <body class="min-h-screen bg-gray-50"> ', ' <!-- Main Content --> <div class="mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-12"> <div class="flex flex-col lg:flex-row gap-8"> <!-- Sidebar --> <aside class="lg:w-80 space-y-8"> <!-- Search Bar --> <div class="bg-white rounded-lg shadow p-6"> <form id="search-form" class="space-y-4"> <div class="relative"> <input type="search" id="search-input" placeholder="Buscar not\xEDcias..." class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i> </div> </form> <div id="search-results" class="mt-4 space-y-4 hidden"> <!-- Results will be populated here --> </div> </div> <!-- Newsletter Signup --> <div class="bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">Receba Nossas Not\xEDcias</h3> <form id="newsletter-form" class="space-y-4"> <input type="email" id="newsletter-email" placeholder="Seu melhor e-mail" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required> <button type="submit" class="w-full py-3 px-4 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">\nInscrever-se\n</button> </form> <p id="newsletter-message" class="mt-2 text-sm text-gray-600"></p> </div> <aside class="sticky top-20 space-y-6"> <!-- Categories --> <div class="hidden md:block bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">Categorias</h3> <ul id="category-list" class="space-y-2"> <li> <button class="w-full category-filter text-gray-600 hover:text-blue-600" data-category="all"> <span>Todos</span> </button> </li> ', ' </ul> </div> <!-- Popular Posts --> <div class="bg-white rounded-lg shadow p-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">Posts Populares</h3> <ul class="space-y-4"> ', ' </ul> </div> </aside> </aside> <!-- Main Content Area --> <main class="lg:flex-1"> ', " </main> </div> </div> ", "  ", ' <script>\n  document.addEventListener("DOMContentLoaded", function() {\n    const buttons = document.querySelectorAll(".category-filter");\n    const posts = document.querySelectorAll(".post");\n\n    buttons.forEach(button => {\n      button.addEventListener("click", function() {\n        const selectedCategory = this.getAttribute("data-category");\n\n        posts.forEach(post => {\n          const postCategory = post.getAttribute("data-category");\n          if (selectedCategory === "all" || postCategory === selectedCategory) {\n            post.style.display = "block";\n          } else {\n            post.style.display = "none";\n          }\n        });\n      });\n    });\n  });\n<\/script></body></html>'])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/components/header", "client:component-export": "Header" }), Object.entries(categories).map(([category, count]) => renderTemplate`<li class="flex items-center"> <button class="category-filter w-full flex justify-between items-center text-gray-600 hover:text-blue-600"${addAttribute(category, "data-category")}> <span>${category}</span> <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">${count}</span> </button> </li>`), popularPosts.map((post) => renderTemplate`<li> <a${addAttribute(post.url, "href")} class="group"> <h4 class="text-gray-900 group-hover:text-blue-600 font-medium mb-1"> ${post.title} </h4> <p class="text-sm text-gray-500">${post.date}</p> </a> </li>`), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, {}), renderScript($$result, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
