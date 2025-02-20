import type { APIRoute } from 'astro';
import { allPosts } from '../../data/posts.ts';

// Função para buscar posts
const searchContent = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();

    return allPosts.filter(post => 
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery)
    );
};

export const GET: APIRoute = async ({ request }) => {
    try {
        const url = new URL(request.url);
        const query = url.searchParams.get('q') || '';

        if (!query) {
            return new Response(
                JSON.stringify({ success: false, message: 'Query parameter is required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const results = searchContent(query);

        return new Response(
            JSON.stringify({ success: true, results, count: results.length }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Search error:', error);
        return new Response(
            JSON.stringify({ success: false, message: 'Internal server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
