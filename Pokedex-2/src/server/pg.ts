const { Client } = require('pg');

const pgClient = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  
  
  
  export async function connectToPGDatabase() {
    try {
      await pgClient.connect();
    } catch (e) {
      console.error(e);
    } finally {
      console.log('connected to DB');
    }
  }

  export async function uploadToPG(data : any) {
    try{
      await pgClient.insert
    } catch (e) {

    }
  }