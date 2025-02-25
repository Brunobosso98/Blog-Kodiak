/* empty css                                          */
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server_BJVt15Gm.mjs';
import 'kleur/colors';
import { $ as $$Noticia } from '../../chunks/noticia_L7yVTedi.mjs';
export { renderers } from '../../renderers.mjs';

const $$GestaoEstoqueTempoReal = createComponent(($$result, $$props, $$slots) => {
  const post = {
    title: "Gest\xE3o de Estoque em Tempo Real",
    date: "2024-02-21",
    author: {
      name: "Jo\xE3o Silva",
      role: "Especialista em Gest\xE3o Industrial",
      image: "https://i.pravatar.cc/150"
    },
    category: "Gest\xE3o",
    description: "Com mais de 15 anos de experi\xEAncia em implementa\xE7\xE3o de sistemas ERP e otimiza\xE7\xE3o de processos industriais.",
    content: `
    <h2>A Import\xE2ncia do Controle de Estoque em Tempo Real</h2>
    <p>Em um cen\xE1rio industrial cada vez mais competitivo, a gest\xE3o eficiente de estoque tornou-se um diferencial estrat\xE9gico crucial para as empresas.</p>

    <h2>Benef\xEDcios do Controle em Tempo Real</h2>
    <ul>
      <li>Redu\xE7\xE3o de custos operacionais</li>
      <li>Minimiza\xE7\xE3o de perdas e desperd\xEDcios</li>
      <li>Otimiza\xE7\xE3o do capital de giro</li>
      <li>Melhoria no atendimento ao cliente</li>
      <li>Previsibilidade mais precisa</li>
    </ul>

    <h2>Tecnologias Aplicadas</h2>
    <p>A integra\xE7\xE3o de tecnologias como IoT, RFID e sistemas ERP permite um controle preciso e automatizado do estoque.</p>

    <h2>Implementa\xE7\xE3o na Pr\xE1tica</h2>
    <p>A implementa\xE7\xE3o bem-sucedida requer um planejamento cuidadoso e o envolvimento de todas as \xE1reas da empresa.</p>

    <h2>Conclus\xE3o</h2>
    <p>O controle de estoque em tempo real \xE9 fundamental para a competitividade das empresas no cen\xE1rio atual.</p>
  `
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Noticia, { "title": post.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="bg-white rounded-lg shadow-md p-8"> <header class="mb-8"> <span class="text-sm font-medium text-blue-600">${post.category}</span> <h1 class="text-3xl font-bold text-gray-900 mt-2 mb-4">${post.title}</h1> <div class="flex items-center text-gray-600"> <span>${post.author.name}</span> <span class="mx-2">•</span> <time>${new Date(post.date).toLocaleDateString("pt-BR")}</time> </div> </header> <div class="prose prose-blue max-w-none">${unescapeHTML(post.content)}</div> <footer class="mt-8 pt-8 border-t border-gray-200"> <div class="flex items-center justify-between"> <div class="flex items-center space-x-4"> <img${addAttribute(post.author.image, "src")}${addAttribute(post.author.name, "alt")} class="w-16 h-16 rounded-full"> <div> <h3 class="font-medium text-gray-900">${post.author.name}</h3> <p class="text-sm text-gray-600">${post.author.role}</p> <p class="text-sm text-gray-500 mt-1">${post.description}</p> </div> </div> </div> </footer> </article> ` })}`;
}, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/posts/gestao-estoque-tempo-real.astro", void 0);

const $$file = "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/posts/gestao-estoque-tempo-real.astro";
const $$url = "/posts/gestao-estoque-tempo-real";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GestaoEstoqueTempoReal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
