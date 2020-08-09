const express = require('express')     //chamada função express que retorna um objeto
const server = express()

server.use(express.static("public"))

.get("/", (req, res) => {                      //arrow function, para direcionar para a pagina setada
    return res.sendFile(__dirname + "/views/index.html")

})
.get("/study", (req, res) => {                      //arrow function, para rotear para a pagina setada
    return res.sendFile(__dirname + "/views/study.html")

})
.get("/give-classes", (req, res) => {                      //arrow function, para direcionar para a pagina setada
    return res.sendFile(__dirname + "/views/give-classes.html")

})
.listen(5500)
