const { Pool } = require('pg');

PG_URI = 'postgresql://postgres.uzkrfrwvqhrxbbjqqaal:FWpWveVj0nk0bW7e@aws-0-us-west-1.pooler.supabase.com:6543/postgres'

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};