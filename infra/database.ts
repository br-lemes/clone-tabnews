import { Client } from 'pg';

const query = async (queryString: string) => {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    });
    try {
        await client.connect();
        const result = await client.query(queryString);
        return result;
    } catch (error) {
        console.error(error);
    } finally {
        await client.end();
    }
};

export { query };
