const router = require("express").Router();


const{
    getAllItems,
    addList,
    statusChange
    

} = require('../Controllers/toDoController')

router.get("/all", getAllItems)
router.post("/add", addList)
router.put("/statuschange", statusChange)



module.exports = router


