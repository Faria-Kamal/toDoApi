const mysql = require("mysql")

function getAllItems(req, res){
    const query = 'SELECT * FROM items'
    getConnection().query(query, (err, row, fields) => {
        res.json(row)
    })
}


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'todo'
    
})

function getConnection() {
    return pool
}

module.exports = {
    getAllItems,

    
}