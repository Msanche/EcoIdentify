const {connectMysql} = require('../dbconnection');
class usuariosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Usuario');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Usuario').where('id', id);
    }

    static async insertar(datos) {
        try {
            const { nombre, fechaNacimiento, contrasena, correo } = datos;
            
            if (!contrasena) {
                throw new Error(`La contraseña es un campo obligatorio. Datos recibidos: nombre=${nombre}, fechaNacimiento=${fechaNacimiento}, correo=${correo}`);
            }  
    
            let db = await connectMysql();
            const result = await db('Usuario').insert({
                nombre,
                fecha_nacimiento: fechaNacimiento,
                contrasena,
                correo,
            }).returning('id');  // Cambia 'Registro completado' por 'id'
    
            return result[0];
        } catch (error) {
            console.error("Error al insertar en la base de datos:", error);
            throw error;
        }
    }
    
    
    
}

module.exports = usuariosModel;