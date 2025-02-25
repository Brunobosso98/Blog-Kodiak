import type { APIRoute } from 'astro';
import { addSubscriber } from '../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const { email } = await request.json();

        if (!email) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Email é obrigatório',
                }),
                { status: 400 }
            );
        }

        const subscriber = addSubscriber(email);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Inscrição realizada com sucesso!',
                subscriber,
            })
        );
    } catch (error) {
        console.error('Newsletter error:', error);
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Erro ao processar inscrição',
            }),
            { status: 500 }
        );
    }
};
