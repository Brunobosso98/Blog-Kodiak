import Database from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new Database('blog.db');

// Criar tabelas se não existirem
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS likes (
    user_id TEXT,
    post_slug TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, post_slug),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

export interface User {
    id: string;
    email: string;
    name: string;
}

export const createOrGetUser = async (email: string, name: string): Promise<User> => {
    try {
        // Primeiro tenta encontrar o usuário
        const existingUser = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as User | undefined;
        
        if (existingUser) {
            return existingUser;
        }

        // Se não encontrar, cria um novo
        const id = uuidv4();
        const stmt = db.prepare('INSERT INTO users (id, email, name) VALUES (?, ?, ?)');
        stmt.run(id, email, name);

        return { id, email, name };
    } catch (error) {
        console.error('Error in createOrGetUser:', error);
        throw error;
    }
};

export const toggleLike = async (userId: string, postSlug: string): Promise<boolean> => {
    try {
        // Verifica se já existe um like
        const existingLike = db.prepare('SELECT * FROM likes WHERE user_id = ? AND post_slug = ?')
            .get(userId, postSlug);

        if (existingLike) {
            // Remove o like
            db.prepare('DELETE FROM likes WHERE user_id = ? AND post_slug = ?')
                .run(userId, postSlug);
            return false;
        } else {
            // Adiciona o like
            db.prepare('INSERT INTO likes (user_id, post_slug) VALUES (?, ?)')
                .run(userId, postSlug);
            return true;
        }
    } catch (error) {
        console.error('Error in toggleLike:', error);
        throw error;
    }
};

export const getLikes = async (postSlug: string): Promise<number> => {
    try {
        const result = db.prepare('SELECT COUNT(*) as count FROM likes WHERE post_slug = ?')
            .get(postSlug) as { count: number };
        return result.count;
    } catch (error) {
        console.error('Error in getLikes:', error);
        throw error;
    }
};

export const hasUserLiked = async (userId: string, postSlug: string): Promise<boolean> => {
    try {
        const like = db.prepare('SELECT * FROM likes WHERE user_id = ? AND post_slug = ?')
            .get(userId, postSlug);
        return !!like;
    } catch (error) {
        console.error('Error in hasUserLiked:', error);
        throw error;
    }
};
