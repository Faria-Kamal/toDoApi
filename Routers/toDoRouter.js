const router = require("express").Router();


const{
    getAllItems,
    addList
    

} = require('../Controllers/toDoController')

router.get("/all", getAllItems)
router.post("/add", addList)



module.exports = router


