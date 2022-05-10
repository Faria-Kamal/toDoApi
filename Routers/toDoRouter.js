const router = require("express").Router();


const{
    getAllItems,
    addList,
    statusChange,
    renameItem,
    deleteItem
    

} = require('../Controllers/toDoController')

router.get("/all", getAllItems)
router.post("/add", addList)
router.put("/statuschange", statusChange)
router.put("/rename", renameItem)
router.delete("/delete", deleteItem)



module.exports = router


