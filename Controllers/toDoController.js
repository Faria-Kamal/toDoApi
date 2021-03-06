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

function renameItem(req, res){
    const {items, id} =req.body
    const queryStrings= "UPDATE items SET items = ? WHERE id = ?"
    getConnection().query(queryStrings, [items, id], (err, row, fields) => {
        if(err){
            res.json({
                "status": err.toString()
                
              })
              
            return
            } else {
              res.send({
                status: "item updated"
              });
            }
            
            res.end()
        })

}

function  deleteItem(req, res){
    const {id} = req.body
    const query = "DELETE FROM items WHERE id = ?"
    getConnection().query(query, [id], (err, row, fields) => {
        if(err){
            res.json({
                "status": err.toString()
                
              })
              
            return
            } else {
              res.send({
                status: "item deleted"
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
    statusChange,
    renameItem,
    deleteItem

}