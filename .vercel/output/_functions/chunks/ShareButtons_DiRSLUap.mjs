import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';

const ShareButtons = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`
  };
  const handleShare = (platform) => {
    const link = shareLinks[platform];
    window.open(link, "_blank", "width=600,height=400");
  };
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copiado para a área de transferência!");
    } catch (err) {
      console.error("Erro ao copiar link:", err);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 items-center", children: [
    /* @__PURE__ */ jsx("button", { onClick: () => handleShare("facebook"), className: "text-blue-600 hover:text-blue-800", children: /* @__PURE__ */ jsx("i", { className: "fab fa-facebook text-xl" }) }),
    /* @__PURE__ */ jsx("button", { onClick: () => handleShare("twitter"), className: "text-blue-400 hover:text-blue-600", children: /* @__PURE__ */ jsx("i", { className: "fab fa-twitter text-xl" }) }),
    /* @__PURE__ */ jsx("button", { onClick: () => handleShare("linkedin"), className: "text-blue-700 hover:text-blue-900", children: /* @__PURE__ */ jsx("i", { className: "fab fa-linkedin text-xl" }) }),
    /* @__PURE__ */ jsx("button", { onClick: () => handleShare("whatsapp"), className: "text-green-500 hover:text-green-700", children: /* @__PURE__ */ jsx("i", { className: "fab fa-whatsapp text-xl" }) }),
    /* @__PURE__ */ jsx("button", { onClick: handleCopyLink, className: "text-gray-600 hover:text-gray-800", children: /* @__PURE__ */ jsx("i", { className: "fas fa-link text-xl" }) })
  ] });
};

export { ShareButtons as S };
