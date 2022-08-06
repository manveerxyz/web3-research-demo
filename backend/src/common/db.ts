import { DateTime } from 'luxon';
import { Pool, QueryResult } from 'pg';
import log from './log';

let pool: Pool;

export const initConnectionPool = (): Pool => {
  pool = new Pool({
    user: process.env.RDS_USERNAME,
    host: process.env.RDS_HOSTNAME,
    database: process.env.RDS_DB_NAME,
    password: process.env.RDS_PASSWORD,
    port: parseInt(process.env.RDS_PORT || '5432', 10),
  });
  log.debug('init connection pool', { maxConnections: pool.totalCount });
  return pool;
};

const query = async (text: string, params: any) => {
  const start = DateTime.now();
  const res = await pool.query(text, params);
  const duration = start.diffNow(['seconds', 'milliseconds']);
  log.debug('executed query', { query: text, duration, rows: res.rowCount });
  return res;
};

export type Tx = {
  begin: () => Promise<void>;
  query: (text: string, params: any) => Promise<QueryResult<any>>;
  commit: () => Promise<void>;
  rollback: () => Promise<void>;
};
const tx = async (): Promise<Tx> => {
  const client = await pool.connect();

  return {
    begin: async () => {
      await client.query('BEGIN');
      log.debug('started tx');
    },
    query: async (text: string, params: any) => {
      const start = DateTime.now();
      const res = await client.query(text, params);
      const duration = start.diffNow(['seconds', 'milliseconds']);
      log.debug('executed tx query', { query: text, duration, rows: res.rowCount });
      return res;
    },
    commit: async () => {
      await client.query('COMMIT');
      log.debug('committed tx');
      client.release();
      log.debug('released client');
    },
    rollback: async () => {
      await client.query('ROLLBACK');
      log.debug('rolled back tx');
      client.release();
      log.debug('released client');
    },
  };
};

export type Db = {
  query: (text: string, params: any) => Promise<QueryResult<any>>
  tx: () => Promise<Tx>
};
const db: Db = {
  query,
  tx,
};
export default db;
