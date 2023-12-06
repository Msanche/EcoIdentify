const {connectMysql} = require('../dbconnection');
class PublicacionesModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Publicaciones');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Publicaciones').where('id', id);
    }


    static async insertar(datos) {
        try {
            const { titulo, contenido, id_usuario,id_imagen } = datos;
            
            if (!titulo||!contenido) {
                throw new Error(`No puede haber titulo o contenido vacio`);
            }  
    
            let db = await connectMysql();
            const result = await db('Publicaciones').insert({
                titulo,
                contenido,
                id_usuario,
                id_imagen
            }).returning('id');  // Cambia 'Registro completado' por 'id'
    
            return result[0];
        } catch (error) {
            console.error("Error al insertar en la base de datos:", error);
            throw error;
        }
    }
}

module.exports = PublicacionesModel;