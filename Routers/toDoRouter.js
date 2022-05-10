const router = require("express").Router();


const{
    getAllItems,
    

} = require('../Controllers/toDoController')

router.get("/all", getAllItems)


module.exports = router


