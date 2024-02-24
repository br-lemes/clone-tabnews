import { NextApiRequest, NextApiResponse } from 'next';

import { query } from '@/infra/database';
import { StatusResponse } from '@/schemas/statusSchema';

const status = async (
    request: NextApiRequest,
    response: NextApiResponse<StatusResponse>,
) => {
    const queryResult = await query(`
        SELECT
            current_setting('server_version') AS version,
            current_setting('max_connections')::int AS max_connections,
            count(*)::int AS opened_connections
        FROM
            pg_stat_activity WHERE datname = current_database();
    `);
    response.status(200).json({
        dependencies: {
            database: { ...queryResult.rows[0] },
        },
        updated_at: new Date().toISOString(),
    });
};

export default status;
