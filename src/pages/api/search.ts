import type { APIRoute } from 'astro';

// Função para buscar posts (você pode expandir isso para buscar em mais conteúdo)
const searchContent = (query: string) => {
    // Importa todos os posts (você pode adaptar isso para sua estrutura)
    const allPosts = [
        {
            title: "Implementando Automação Industrial com ERP",
            excerpt: "Descubra como integrar sistemas de automação com seu ERP para maximizar a eficiência operacional.",
            category: "Automação",
            date: "2024-02-22",
            slug: "implementar-erp-sucesso"
        },
        // ... outros posts
    ];

    // Normaliza a busca
    const normalizedQuery = query.toLowerCase().trim();

    // Filtra os posts
    return allPosts.filter(post => {
        return (
            post.title.toLowerCase().includes(normalizedQuery) ||
            post.excerpt.toLowerCase().includes(normalizedQuery) ||
            post.category.toLowerCase().includes(normalizedQuery)
        );
    });
};

export const GET: APIRoute = async ({ request }) => {
    try {
        const url = new URL(request.url);
        const query = url.searchParams.get('q') || '';

        if (!query) {
            return new Response(
                JSON.stringify({ success: false, message: 'Query parameter is required' }),
                { 
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

        const results = searchContent(query);

        return new Response(
            JSON.stringify({ 
                success: true, 
                results,
                count: results.length
            }),
            { 
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        console.error('Search error:', error);
        return new Response(
            JSON.stringify({ success: false, message: 'Internal server error' }),
            { 
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
};
