import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_P6ib6TnJ.mjs';
import { manifest } from './manifest_BGctQja3.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/subscribers.astro.mjs');
const _page2 = () => import('./pages/api/admin/subscribers.astro.mjs');
const _page3 = () => import('./pages/api/auth.astro.mjs');
const _page4 = () => import('./pages/api/likes.astro.mjs');
const _page5 = () => import('./pages/api/newsletter.astro.mjs');
const _page6 = () => import('./pages/api/search.astro.mjs');
const _page7 = () => import('./pages/posts/analise-dados-industria-4.astro.mjs');
const _page8 = () => import('./pages/posts/blockchain-alem-das-criptomoedas-tambem-esta-na-logistica.astro.mjs');
const _page9 = () => import('./pages/posts/ferramentas-para-fazer-bpo-financeiro.astro.mjs');
const _page10 = () => import('./pages/posts/fintechs-podem-e-devem-apoiar-a-industria-na-inovacao-de-processos-comerciais.astro.mjs');
const _page11 = () => import('./pages/posts/gestao-estoque-tempo-real.astro.mjs');
const _page12 = () => import('./pages/posts/implementar-erp-sucesso.astro.mjs');
const _page13 = () => import('./pages/posts/sistemas-erp-evoluem-para-a-adequacao-a-reforma-tributaria.astro.mjs');
const _page14 = () => import('./pages/posts/venda-de-software-de-gestao-esta-longe-da-maturidade-e-inteligencia-artificial-muda-jogo-diz-ceo-da-totvs.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/subscribers.astro", _page1],
    ["src/pages/api/admin/subscribers.ts", _page2],
    ["src/pages/api/auth.ts", _page3],
    ["src/pages/api/likes.ts", _page4],
    ["src/pages/api/newsletter.ts", _page5],
    ["src/pages/api/search.ts", _page6],
    ["src/pages/posts/analise-dados-industria-4.astro", _page7],
    ["src/pages/posts/blockchain-alem-das-criptomoedas-tambem-esta-na-logistica.astro", _page8],
    ["src/pages/posts/ferramentas-para-fazer-bpo-financeiro.astro", _page9],
    ["src/pages/posts/fintechs-podem-e-devem-apoiar-a-industria-na-inovacao-de-processos-comerciais.astro", _page10],
    ["src/pages/posts/gestao-estoque-tempo-real.astro", _page11],
    ["src/pages/posts/implementar-erp-sucesso.astro", _page12],
    ["src/pages/posts/sistemas-erp-evoluem-para-a-adequacao-a-reforma-tributaria.astro", _page13],
    ["src/pages/posts/venda-de-software-de-gestao-esta-longe-da-maturidade-e-inteligencia-artificial-muda-jogo-diz-ceo-da-totvs.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9fbbe4c5-222a-4d72-b161-58736c8fb5c3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
