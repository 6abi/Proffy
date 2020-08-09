const express = require('express')     //chamada função express que retorna um objeto
const server = express()

server.use(express.static("public"))

.get("/", (req, res) => {                      //arrow function, não preciso nomear
    return res.sendfile(__dirname + "/views/index.html")

})
.get("/study", (req, res) =>{
    return res.send("Página study")
})
.listen(5500)
