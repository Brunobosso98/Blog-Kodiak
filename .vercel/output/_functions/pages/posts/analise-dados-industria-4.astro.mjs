/* empty css                                          */
import { c as createComponent, d as renderComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server_DjrMRjR1.mjs';
import 'kleur/colors';
import { $ as $$Noticia } from '../../chunks/noticia_6jiw1caS.mjs';
export { renderers } from '../../renderers.mjs';

const $$AnaliseDadosIndustria4 = createComponent(($$result, $$props, $$slots) => {
  const post = {
    title: "An\xE1lise de Dados na Ind\xFAstria 4.0",
    date: "2024-02-20",
    author: {
      name: "Maria Santos",
      role: "Analista de Dados Industriais",
      image: "https://i.pravatar.cc/150?img=5"
    },
    category: "Tecnologia",
    description: "Especialista em an\xE1lise de dados e implementa\xE7\xE3o de solu\xE7\xF5es de Business Intelligence para ind\xFAstria.",
    content: `
    <h2>O Poder dos Dados na Transforma\xE7\xE3o Digital</h2>
    <p>A Ind\xFAstria 4.0 trouxe uma nova era de possibilidades para a an\xE1lise de dados industriais, permitindo decis\xF5es mais precisas e estrat\xE9gicas.</p>

    <h2>Principais Aplica\xE7\xF5es</h2>
    <ul>
      <li>Manuten\xE7\xE3o preditiva</li>
      <li>Otimiza\xE7\xE3o de processos</li>
      <li>Controle de qualidade</li>
      <li>Previs\xE3o de demanda</li>
      <li>Gest\xE3o energ\xE9tica</li>
    </ul>

    <h2>Ferramentas e Tecnologias</h2>
    <p>Machine Learning, Big Data e Analytics s\xE3o fundamentais para extrair insights valiosos dos dados industriais.</p>

    <h2>Cases de Sucesso</h2>
    <p>Empresas que implementaram an\xE1lise avan\xE7ada de dados reportam melhorias significativas em efici\xEAncia e redu\xE7\xE3o de custos.</p>

    <h2>Conclus\xE3o</h2>
    <p>A an\xE1lise de dados \xE9 um pilar fundamental da Ind\xFAstria 4.0 e essencial para a competitividade industrial.</p>
  `
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Noticia, { "title": post.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="bg-white rounded-lg shadow-md p-8"> <header class="mb-8"> <span class="text-sm font-medium text-blue-600">${post.category}</span> <h1 class="text-3xl font-bold text-gray-900 mt-2 mb-4">${post.title}</h1> <div class="flex items-center text-gray-600"> <span>${post.author.name}</span> <span class="mx-2">•</span> <time>${new Date(post.date).toLocaleDateString("pt-BR")}</time> </div> </header> <div class="prose prose-blue max-w-none">${unescapeHTML(post.content)}</div> <footer class="mt-8 pt-8 border-t border-gray-200"> <div class="flex items-center justify-between"> <div class="flex items-center space-x-4"> <img${addAttribute(post.author.image, "src")}${addAttribute(post.author.name, "alt")} class="w-16 h-16 rounded-full"> <div> <h3 class="font-medium text-gray-900">${post.author.name}</h3> <p class="text-sm text-gray-600">${post.author.role}</p> <p class="text-sm text-gray-500 mt-1">${post.description}</p> </div> </div> </div> </footer> </article> ` })}`;
}, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/posts/analise-dados-industria-4.astro", void 0);

const $$file = "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/posts/analise-dados-industria-4.astro";
const $$url = "/posts/analise-dados-industria-4";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AnaliseDadosIndustria4,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
