import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    message: 'Hello from the API',
    framework: 'Next.js on Vercel',
    emulating: 'ASP.NET-style site structure',
    serverTime: new Date().toISOString(),
  });
}
