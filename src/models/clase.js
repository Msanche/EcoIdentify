const {connectMysql} = require('../dbconnection');
class ClaseModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Clase');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Clase').where('id', id);
    }
}

module.exports = ClaseModel;