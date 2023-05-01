import type { NextApiRequest, NextApiResponse } from "next";
import { Pool } from 'pg';

const pgPort: number | undefined = parseInt(process.env.PG_PORT || '', 10);

const pool = new Pool({
  host: process.env.PG_HOST,
  port: pgPort,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD
})

export default async function GetProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT * FROM "Product";');

    res.status(200).json(result.rows);
  } finally {
    client.release();
  }
}