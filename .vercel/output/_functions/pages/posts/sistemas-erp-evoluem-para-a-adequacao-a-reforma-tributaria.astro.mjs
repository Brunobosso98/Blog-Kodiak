/* empty css                                          */
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server_BJVt15Gm.mjs';
import 'kleur/colors';
import { $ as $$Noticia } from '../../chunks/noticia_CyYCIqel.mjs';
export { renderers } from '../../renderers.mjs';

const $$SistemasErpEvoluemParaAAdequacaoAReformaTributaria = createComponent(($$result, $$props, $$slots) => {
  const post = {
    title: "Sistemas ERP evoluem para a adequa\xE7\xE3o \xE0 Reforma Tribut\xE1ria",
    date: "2025-02-21",
    author: {
      name: "Desconhecido",
      role: "Jornalista",
      image: "https://i.pravatar.cc/150",
      bio: "Fonte: Dino.com.br"
    },
    category: "Not\xEDcia",
    content: `
    Conte\xFAdo indispon\xEDvel
    <p><a href="https://www.dino.com.br/releases/sistemas-erp-evoluem-para-a-adequacao-a-reforma-tributaria-dino890311822131" target="_blank">Leia a mat\xE9ria completa</a></p>
  `
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Noticia, { "title": post.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="bg-white rounded-lg shadow-md p-8"> <header class="mb-8"> <span class="text-sm font-medium text-blue-600">${post.category}</span> <h1 class="text-3xl font-bold text-gray-900 mt-2 mb-4">${post.title}</h1> <div class="flex items-center text-gray-600"> <span>${post.author || "Desconhecido"}</span> <span class="mx-2">•</span> <time>${new Date(post.date).toLocaleDateString("pt-BR")}</time> </div> </header> <div class="prose prose-blue max-w-none">${unescapeHTML(post.content)}</div> <footer class="mt-8 pt-8 border-t border-gray-200"> <div class="flex items-center justify-between"> <div class="flex items-center space-x-4"> <img${addAttribute(post.author.image, "src")}${addAttribute(post.author.name, "alt")} class="w-16 h-16 rounded-full"> <div> <h3 class="font-medium text-gray-900">${post.author.name}</h3> <p class="text-sm text-gray-600">${post.author.role}</p> <p class="text-sm text-gray-500 mt-1">${post.author.bio}</p> </div> </div> </div> </footer> </article> ` })}`;
}, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/posts/sistemas-erp-evoluem-para-a-adequacao-a-reforma-tributaria.astro", void 0);

const $$file = "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/posts/sistemas-erp-evoluem-para-a-adequacao-a-reforma-tributaria.astro";
const $$url = "/posts/sistemas-erp-evoluem-para-a-adequacao-a-reforma-tributaria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SistemasErpEvoluemParaAAdequacaoAReformaTributaria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
