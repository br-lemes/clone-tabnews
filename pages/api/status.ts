import { NextApiRequest, NextApiResponse } from 'next';

const status = (request: NextApiRequest, response: NextApiResponse) => {
    response.status(200).json({ status: 'OK' });
};

export default status;
