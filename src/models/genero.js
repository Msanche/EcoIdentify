const {connectMysql} = require('../dbconnection');
class GeneroModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Genero');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Genero').where('id', id);
    }
}

module.exports = GeneroModel;