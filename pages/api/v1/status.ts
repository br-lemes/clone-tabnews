import { NextApiRequest, NextApiResponse } from 'next';

import { query } from '@/infra/database';

const status = async (request: NextApiRequest, response: NextApiResponse) => {
    const result = await query('SELECT 1 + 1 AS sum');
    console.log(result.rows);
    response.status(200).json({ status: 'OK' });
};

export default status;
