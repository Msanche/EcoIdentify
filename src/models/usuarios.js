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
}

module.exports = usuariosModel;