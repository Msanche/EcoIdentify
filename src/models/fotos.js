const {connectMysql} = require('../dbconnection');
class FotosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Fotos');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Fotos').where('id', id);
    }
    static async insertar(datos) {
        try {
            const { imagen } = datos;
            
            if (!imagen) {
                throw new Error(`Agrega una imagen primero`);
            }  
    
            let db = await connectMysql();
            const result = await db('Fotos').insert({
                imagen
            }).returning('id');  // Cambia 'Registro completado' por 'id'
    
            return result[0];
        } catch (error) {
            console.error("Error al insertar en la base de datos:", error);
            throw error;
        }
    }
}

module.exports = FotosModel;