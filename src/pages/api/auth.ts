import type { APIRoute } from 'astro';
import { createOrGetUser } from '../../db/database';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const { email, name } = await request.json();

        if (!email || !name) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Email e nome são obrigatórios',
                }),
                { status: 400 }
            );
        }

        const user = createOrGetUser(name, email);

        return new Response(
            JSON.stringify({
                success: true,
                user,
            })
        );
    } catch (error) {
        console.error('Auth error:', error);
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Erro ao processar autenticação',
            }),
            { status: 500 }
        );
    }
};
