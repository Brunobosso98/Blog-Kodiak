import fs from "fs";
import axios from "axios";
import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

// Interface para tipagem das notícias
interface Article {
  title: string;
  publishedAt: string;
  author?: string;
  source: {
    name: string;
  };
  description?: string;
  url: string;
  urlToImage?: string;
}

// Configuração da API
const NEWS_API_KEY = process.env.NEWS_API_KEY || "";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});const OUTPUT_DIR = "./src/pages/posts/";

// Verifica se a chave foi carregada corretamente
if (!NEWS_API_KEY) {
  console.error("❌ ERRO: NEWS_API_KEY não encontrada no arquivo .env.local!");
  process.exit(1);
}
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ ERRO: OPENAI_API_KEY não encontrada no arquivo .env.local!");
  process.exit(1);
}

async function getFullArticle(url: string): Promise<string> {
  try {
    // Baixa o HTML da página da notícia
    const { data } = await axios.get(url);

    // Envia para a OpenAI para extrair o texto
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Você é um assistente que extrai textos de artigos de notícias. Extraia o conteúdo principal deste HTML e remova anúncios, menus, classes, estilização e elementos irrelevantes. Eu quero apenas o conteúdo!. Retorne em um HTML organizado para que eu utilize em meu site. Retorne apenas o <body> e o conteudo de dentro e não coloque isso '```html'",
        },
        { role: "user", content: data },
      ],
      max_tokens: 700, // Ajuste para o tamanho do resumo desejado
    });

    return response.choices[0]?.message?.content || "Conteúdo indisponível";
  } catch (error) {
    console.error(`Erro ao obter conteúdo completo de ${url}:`, error);
    return "Conteúdo indisponível";
  }
}

async function fetchNews() {
  try {
    const response = await axios.get<{ articles: Article[] }>(
      `https://newsapi.org/v2/everything?q=(erp OR "enterprise resource planning" OR "industrial automation OR custos industricais OR otimização de processos OR gestão simplificada")&language=pt&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );

    const articles = response.data.articles
      .filter(article => article.description && article.description.length > 100) // Remove notícias curtas
      .slice(0, 3);

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    for (const article of articles) {
      console.log(`📡 Extraindo conteúdo de: ${article.url}`);
      const fullContent = await getFullArticle(article.url);
      const content = fullContent || article.description || "Conteúdo indisponível";

      const slug = slugify(article.title);
      const filename = `${OUTPUT_DIR}${slug}.astro`;
      const fileContent = generateAstroFile(article, content);
      fs.writeFileSync(filename, fileContent, "utf8");
      console.log(`✅ Notícia salva: ${filename}`);
    }
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
  }
}

// Gerar arquivo .astro com o conteúdo extraído pela OpenAI
function generateAstroFile(article: Article, content: string): string {
  return `---
import Layout from '../../layouts/noticia.astro';

const post = {
  title: "${article.title}",
  date: "${article.publishedAt.split("T")[0]}",
  author: {
    name: "${article.author || "Desconhecido"}",
    role: "Jornalista",
    image: "https://i.pravatar.cc/150",
    bio: "Fonte: ${article.source.name}"
  },
  category: "Notícia",
  urlToImage: "${article.urlToImage || "https://via.placeholder.com/400x200"}",
  description: "${article.description || "Notícia gerada automaticamente."}",
  content: \`
    ${content}
    <p><a href="${article.url}" target="_blank">Leia a matéria completa</a></p>
  \`
};
---

<Layout title={post.title}>
  <article class="bg-white rounded-lg shadow-md p-8">
    <header class="mb-8">
      <span class="text-sm font-medium text-blue-600">{post.category}</span>
      <h1 class="text-3xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h1>
      <div class="flex items-center text-gray-600">
        <span>{post.author || "Desconhecido"}</span>
        <span class="mx-2">•</span>
        <time>{new Date(post.date).toLocaleDateString('pt-BR')}</time>
      </div>
    </header>

    <div class="prose prose-blue max-w-none" set:html={post.content} />

    <footer class="mt-8 pt-8 border-t border-gray-200">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <img
            src={post.author.image}
            alt={post.author.name}
            class="w-16 h-16 rounded-full"
          />
          <div>
            <h3 class="font-medium text-gray-900">{post.author.name}</h3>
            <p class="text-sm text-gray-600">{post.author.role}</p>
            <p class="text-sm text-gray-500 mt-1">{post.author.bio}</p>
          </div>
        </div>       
      </div>
    </footer>
  </article>
</Layout>`;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove caracteres especiais
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Executa a função
fetchNews();
