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

    static async consultarPublicacionConComentarios(idPublicacion) {
        try {
            let db = await connectMysql();
    
            const publicacion = await db('Publicaciones')
                .select('*')
                .where('id', idPublicacion)
                .first(); // Tomar solo el primer resultado
    
            if (!publicacion) {
                // Manejar el caso en que la publicación no exista
                return null;
            }
    
            // Consultar los comentarios relacionados con la publicación
            const comentarios = await db('Comentario')
                .select('Comentario.*')
                .innerJoin('DetalleComentarioPublicacion', 'Comentario.id', '=', 'DetalleComentarioPublicacion.id_comentario')
                .where('DetalleComentarioPublicacion.id_publicacion', idPublicacion);
    
            // Agregar la propiedad 'comentarios' a la publicación
            publicacion.comentarios = comentarios;
    
            return publicacion;
        } catch (error) {
            console.error("Error al consultar publicación con comentarios:", error);
            throw error;
        }
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