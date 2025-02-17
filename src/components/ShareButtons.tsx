import React from 'react';

interface ShareButtonsProps {
    url: string;
    title: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    };

    const handleShare = (platform: string) => {
        const link = shareLinks[platform as keyof typeof shareLinks];
        window.open(link, '_blank', 'width=600,height=400');
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            alert('Link copiado para a área de transferência!');
        } catch (err) {
            console.error('Erro ao copiar link:', err);
        }
    };

    return (
        <div className="flex space-x-4 items-center">
            <button onClick={() => handleShare('facebook')} className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-facebook text-xl"></i>
            </button>
            <button onClick={() => handleShare('twitter')} className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter text-xl"></i>
            </button>
            <button onClick={() => handleShare('linkedin')} className="text-blue-700 hover:text-blue-900">
                <i className="fab fa-linkedin text-xl"></i>
            </button>
            <button onClick={() => handleShare('whatsapp')} className="text-green-500 hover:text-green-700">
                <i className="fab fa-whatsapp text-xl"></i>
            </button>
            <button onClick={handleCopyLink} className="text-gray-600 hover:text-gray-800">
                <i className="fas fa-link text-xl"></i>
            </button>
        </div>
    );
};
