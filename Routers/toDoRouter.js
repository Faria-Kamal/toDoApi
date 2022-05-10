const router = require("express").Router();


const{
    getAllItems,
    addList,
    statusChange,
    renameItem
    

} = require('../Controllers/toDoController')

router.get("/all", getAllItems)
router.post("/add", addList)
router.put("/statuschange", statusChange)
router.put("/rename", renameItem)



module.exports = router


