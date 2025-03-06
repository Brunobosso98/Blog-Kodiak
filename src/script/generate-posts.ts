import fs from "fs";
import path from "path";

const POSTS_DIR = "./src/pages/posts/";
const OUTPUT_FILE = "./src/generated/posts.json";

const Posts = fs
  .readdirSync(POSTS_DIR)
  .filter((file) => file.endsWith(".astro"))
  .map((file) => {
    const filePath = path.join(POSTS_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const titleMatch = fileContent.match(/title: "(.+?)"/);
    const dateMatch = fileContent.match(/date: "(.+?)"/);
    const excerptMatch = fileContent.match(/description: "(.+?)"/);
    const imageMatch = fileContent.match(/urlToImage: "(.+?)"/);
    const categoryMatch = fileContent.match(/category: "(.+?)"/);

    return {
      title: titleMatch ? titleMatch[1] : file.replace(".astro", "").replace(/-/g, " "),
      excerpt: excerptMatch ? excerptMatch[1] : "Notícia gerada automaticamente.",
      category: categoryMatch ? categoryMatch[1] : "Manual",
      date: dateMatch ? dateMatch[1] : new Date().toISOString().split("T")[0],
      image: imageMatch ? imageMatch[1] : "https://via.placeholder.com/400x200",
      slug: file.replace(".astro", ""),
    };
  });

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(Posts, null, 2));
console.log("📄 Posts gerados com sucesso!");

