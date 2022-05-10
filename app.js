const express = require("express")
const app = express()
const bodyParser = require("body-Parser")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const toDoRouter = require("./Routers/toDoRouter")

app.use("/items", toDoRouter)


app.listen(7000, ()=>console.log("Listening on: 7000"));