import Database from'../../../database/db';
import { IncomingMessage, ServerResponse } from 'http' //Esto es para TypeScript

const allAvos = async (request, response ) => {  // Si quiero usar TypeScript hago lo siguiente: (request = IncomingMessage, response = ServerResponse )
    const db = new Database()
    const allEntries = await db.getAll()
    const length = allEntries.length
  
    response.statusCode = 200
    // response.setHeader('Content-Type', 'application/json') //Esto es de TypeScript
    response.end(JSON.stringify({ length, data: allEntries }))
  }
export default allAvos;