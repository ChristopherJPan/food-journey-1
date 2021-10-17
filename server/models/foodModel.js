const { Pool } = require('pg');

const PG_URI = 'postgres://hdiazunv:U8D-7y_G0DlonbrYNxtX6wstTwWS40nl@kashin.db.elephantsql.com/hdiazunv';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query: ', text);
    return pool.query(text, params, callback);
  }
};
