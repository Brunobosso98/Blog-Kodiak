/* empty css                                       */
import { c as createComponent, a as createAstro, d as renderComponent, g as renderTemplate, m as maybeRenderHead, f as renderScript, b as addAttribute } from '../chunks/astro/server_DjrMRjR1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DTzR6Rot.mjs';
import { S as ShareButtons } from '../chunks/ShareButtons_DiRSLUap.mjs';
import { a as allPosts } from '../chunks/posts_Cj2ctmyu.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  async function fetchNews() {
    const API_KEY = "40f1008dd19544998b902c58406b843d";
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=(erp OR "enterprise resource planning" OR "industrial automation OR custos industricais OR otimização de processos OR gestão simplificada")&language=pt&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles?.slice(0, 3) || [];
  }
  const newsArticles = await fetchNews();
  function slugify(text) {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  const categoriesCount = allPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog Kodiak ERP - Insights sobre Gestão Industrial", "categories": categoriesCount, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-12" data-astro-cid-j7pv25f6> <!-- Featured Section --> <section class="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 overflow-hidden" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-pattern opacity-10" data-astro-cid-j7pv25f6></div> <div class="relative z-10" data-astro-cid-j7pv25f6> <h1 class="text-5xl font-bold mb-6" data-astro-cid-j7pv25f6>Blog
<span class="bg-white text-transparent bg-clip-text" data-astro-cid-j7pv25f6> Kodiak ERP </span> </h1> <p class="text-xl text-white/90 max-w-3xl" data-astro-cid-j7pv25f6>
Insights, tendências e melhores práticas para otimizar sua gestão industrial com tecnologia de ponta.
</p> </div> </section> <!-- Filter Categories --> <div class="flex flex-wrap gap-4 my-8" data-astro-cid-j7pv25f6> <button class="category-filter px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition active" data-category="all" data-astro-cid-j7pv25f6>
Todas
</button> ${Object.entries(categoriesCount).map(([category, count]) => renderTemplate`<button class="category-filter px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition"${addAttribute(category, "data-category")} data-astro-cid-j7pv25f6> ${category} (${count})
</button>`)} </div> <!-- News API Section --> <section class="bg-white rounded-xl shadow-lg p-6" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold text-gray-900 mb-6" data-astro-cid-j7pv25f6>Notícias do Setor</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-j7pv25f6> ${newsArticles.map((article) => renderTemplate`<article class="space-y-3" data-astro-cid-j7pv25f6> <img${addAttribute(article.urlToImage || "https://via.placeholder.com/400x200", "src")}${addAttribute(article.title, "alt")} class="w-full h-48 object-cover rounded-lg" data-astro-cid-j7pv25f6> <h3 class="font-semibold text-lg line-clamp-2" data-astro-cid-j7pv25f6>${article.title}</h3> <p class="text-gray-600 text-sm line-clamp-3" data-astro-cid-j7pv25f6>${article.description}</p> <div class="flex justify-between items-center" data-astro-cid-j7pv25f6> <a${addAttribute(`/posts/${slugify(article.title)}`, "href")} rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 font-medium text-sm" data-astro-cid-j7pv25f6>
Ler mais →
</a> ${renderComponent($$result2, "ShareButtons", ShareButtons, { "client:load": true, "url": article.url, "title": article.title, "client:component-hydration": "load", "client:component-path": "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/components/ShareButtons", "client:component-export": "ShareButtons", "data-astro-cid-j7pv25f6": true })} </div> </article>`)} </div> </section> <!-- Recent Posts Grid --> <section data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold text-gray-900 mb-6" data-astro-cid-j7pv25f6>Posts Recentes</h2> <div id="posts-container" class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-j7pv25f6> ${allPosts.map((post) => renderTemplate`<article class="post bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform"${addAttribute(post.slug, "data-slug")}${addAttribute(post.category, "data-category")} data-astro-cid-j7pv25f6> <a${addAttribute(`/posts/${post.slug}`, "href")} class="block" data-astro-cid-j7pv25f6> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-48 object-cover" data-astro-cid-j7pv25f6> <div class="p-6" data-astro-cid-j7pv25f6> <div class="flex items-center gap-4 mb-4" data-astro-cid-j7pv25f6> <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium" data-astro-cid-j7pv25f6> ${post.category} </span> <time class="text-gray-500 text-sm" data-astro-cid-j7pv25f6>${post.date}</time> </div> <h3 class="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition" data-astro-cid-j7pv25f6>${post.title}</h3> <p class="text-gray-600 mb-4" data-astro-cid-j7pv25f6>${post.excerpt}</p> </div> </a> <div class="px-6 pb-6 flex justify-between items-center" data-astro-cid-j7pv25f6> <div class="flex items-center space-x-4" data-astro-cid-j7pv25f6> <button class="like-button flex items-center space-x-1 text-gray-500 hover:text-red-500 transition"${addAttribute(post.slug, "data-slug")} data-astro-cid-j7pv25f6> <i class="fas fa-heart" data-astro-cid-j7pv25f6></i> <span class="like-count text-sm" data-astro-cid-j7pv25f6>0</span> </button> </div> ${renderComponent($$result2, "ShareButtons", ShareButtons, { "client:load": true, "url": `${Astro2.url.origin}/posts/${post.slug}`, "title": post.title, "client:component-hydration": "load", "client:component-path": "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/components/ShareButtons", "client:component-export": "ShareButtons", "data-astro-cid-j7pv25f6": true })} </div> </article>`)} </div> </section> </div> ${renderScript($$result2, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })} `;
}, "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/index.astro", void 0);
const $$file = "C:/Users/bruno.martins/Desktop/Site Kodiak/Blog Kodiak/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
