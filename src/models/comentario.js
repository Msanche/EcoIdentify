const {connectMysql} = require('../dbconnection');
class ComentarioModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Comentario');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Comentario').where('id', id);
    }

    static async insertar(datos) {
        try {
            const { comentario, id_usuario, id_publicacion } = datos;
    
            if (!comentario || !id_usuario || !id_publicacion) {
                throw new Error(`Comentario, id_usuario y id_publicacion son campos obligatorios`);
            }
    
            let db = await connectMysql();
            
            // Insertar en la tabla Comentario
            const resultComentario = await db('Comentario').insert({
                comentario,
                id_usuario
            }).returning('id');
    
            const idComentario = resultComentario[0];
    
            // Insertar en la tabla DetalleComentarioPublicacion
            await db('DetalleComentarioPublicacion').insert({
                id_comentario: idComentario,
                id_publicacion
            });
    
            return idComentario;
        } catch (error) {
            console.error("Error al insertar en la base de datos:", error);
            throw error;
        }
    }
    
}

module.exports = ComentarioModel;