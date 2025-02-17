import type { APIRoute } from 'astro';
import Database from 'better-sqlite3';

export const GET: APIRoute = async ({ request }) => {
    try {
        // Aqui você pode adicionar autenticação antes de permitir acesso aos dados
        const adminKey = request.headers.get('x-admin-key');
        if (!adminKey || adminKey !== import.meta.env.ADMIN_KEY) {
            return new Response(
                JSON.stringify({ success: false, message: 'Unauthorized' }),
                { 
                    status: 401,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

        const db = new Database('newsletter.db');
        const subscribers = db.prepare('SELECT * FROM subscribers ORDER BY created_at DESC').all();
        db.close();

        return new Response(
            JSON.stringify({ 
                success: true, 
                subscribers,
                count: subscribers.length
            }),
            { 
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        console.error('Error fetching subscribers:', error);
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
