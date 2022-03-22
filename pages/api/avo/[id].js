import Database from'../../../database/db';

const idAvos = async (request, response ) => {  
    const db = new Database()

    const id = request.query.id //El id debe ser el mismo nombre que está dentro de los [] en el título del archivo [id].
    const avo = await db.getById(id)
  
    response.status(200).json(avo)

    //Una forma mas tradicional sería:
    // response.statusCode = 200
    // response.end(JSON.stringify(avo))

  }
export default idAvos;