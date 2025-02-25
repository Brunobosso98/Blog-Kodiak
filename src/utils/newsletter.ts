import Database from 'better-sqlite3';

const db = new Database('newsletter.db');

// Criar tabela se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export const saveSubscriber = async (email: string) => {
    try {
        const stmt = db.prepare('INSERT INTO subscribers (email) VALUES (?)');
        stmt.run(email);
        return { success: true };
    } catch (error: any) {
        // Se o email já existe (UNIQUE constraint)
        if (error.code === 'SQLITE_CONSTRAINT') {
            return { success: false, error: 'Email já cadastrado' };
        }
        console.error('Error saving subscriber:', error);
        return { success: false, error: 'Erro ao salvar inscrição' };
    }
};
