/* empty css                                          */
import { c as createComponent, d as renderComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server_DjrMRjR1.mjs';
import 'kleur/colors';
import { $ as $$Noticia } from '../../chunks/noticia_6jiw1caS.mjs';
export { renderers } from '../../renderers.mjs';

const $$ImplementarErpSucesso = createComponent(($$result, $$props, $$slots) => {
  const post = {
    title: "Como Implementar um ERP com Sucesso",
    date: "2024-02-20",
    author: {
      name: "Jo\xE3o Silva",
      role: "Especialista em Gest\xE3o Industrial",
      image: "https://i.pravatar.cc/150"
    },
    category: "Gest\xE3o",
    description: "Com mais de 15 anos de experi\xEAncia em implementa\xE7\xE3o de sistemas ERP e otimiza\xE7\xE3o de processos industriais.",
    content: `
    <h2>Planejamento \xE9 Fundamental</h2>
    <p>A implementa\xE7\xE3o bem-sucedida de um sistema ERP come\xE7a com um planejamento detalhado. \xC9 essencial envolver todas as partes interessadas desde o in\xEDcio do projeto.</p>
    <h2>Principais Etapas</h2>
    <ul>
      <li>An\xE1lise das necessidades da empresa</li>
      <li>Escolha do sistema adequado</li>
      <li>Prepara\xE7\xE3o da equipe</li>
      <li>Migra\xE7\xE3o de dados</li>
      <li>Testes e valida\xE7\xE3o</li>
      <li>Treinamento dos usu\xE1rios</li>
    </ul>

    <h2>Fatores Cr\xEDticos de Sucesso</h2>
    <p>O comprometimento da alta dire\xE7\xE3o e a comunica\xE7\xE3o clara com todos os envolvidos s\xE3o fundamentais para o sucesso do projeto.</p>

    <h2>Conclus\xE3o</h2>
    <p>Uma implementa\xE7\xE3o bem planejada e executada pode transformar positivamente os processos da sua empresa.</p>
  `
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Noticia, { "title": post.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="bg-white rounded-lg shadow-md p-8"> <header class="mb-8"> <span class="text-sm font-medium text-blue-600">${post.category}</span> <h1 class="text-3xl font-bold text-gray-900 mt-2 mb-4">${post.title}</h1> <div class="flex items-center text-gray-600"> <span>${post.author.name}</span> <span class="mx-2">•</span> <time>${new Date(post.date).toLocaleDateString("pt-BR")}</time> </div> </header> <div class="prose prose-blue max-w-none">${unescapeHTML(post.content)}</div> <footer class="mt-8 pt-8 border-t border-gray-200"> <div class="flex items-center justify-between"> <div class="flex items-center space-x-4"> <img${addAttribute(post.author.image, "src")}${addAttribute(post.author.name, "alt")} class="w-16 h-16 rounded-full"> <div> <h3 class="font-medium text-gray-900">${post.author.name}</h3> <p class="text-sm text-gray-600">${post.author.role}</p> <p class="text-sm text-gray-500 mt-1">${post.description}</p> </div> </div> </div> </footer> </article> ` })}`;
}, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/posts/implementar-erp-sucesso.astro", void 0);

const $$file = "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/posts/implementar-erp-sucesso.astro";
const $$url = "/posts/implementar-erp-sucesso";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ImplementarErpSucesso,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
