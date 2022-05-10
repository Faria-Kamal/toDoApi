const mysql = require("mysql")

function getAllItems(req, res){
    const query = 'SELECT * FROM items'
    getConnection().query(query, (err, row, fields) => {
        res.json(row)
    })
}

function addList(req, res){
    const {items} =req.body
    const queryStrings= "INSERT INTO items (items) VALUES (?)"
    getConnection().query(queryStrings, [items], (err, row, fields) => {
        if(err){
            res.json({
                "status": err.toString()
                
              })
              
            return
            } else {
              res.send({
                status: "item added"
              });
            }
            
            res.end()
        })
};

function statusChange(req, res){
    const {status, id} =req.body
    const queryStrings= "UPDATE items SET status = ? WHERE id = ?"
    getConnection().query(queryStrings, [status, id], (err, row, fields) => {
        if(err){
            res.json({
                "status": err.toString()
                
              })
              
            return
            } else {
              res.send({
                status: "status updted"
              });
            }
            
            res.end()
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
    addList,
    statusChange

    
}