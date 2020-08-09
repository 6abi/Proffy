
// //alimentando com dados direto no back
// const proffys = [
//     {
//         name: "Diego Fernandes",
//         avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
//         whatsapp:90888-8888,
//         bio: "Entusiasta das melhores tecnologias de química avançada."
//             "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências."
//             "Mais de 200.000 pessoas já passaram por uma das minhas explosões",
//         subject: "Química.",
//         cost:"20",
//         weekday:[0],
//         time_from:[720],
//         time_to:[1220]
//     },
//     {
//         name: "Daniele Silvas",
//         avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
//         whatsapp:90888-8888,
//         bio: "Entusiasta das melhores tecnologias de química avançada."
//             "Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências."
//             "Mais de 200.000 pessoas já passaram por uma das minhas explosões",
//         subject: "Química.",
//         cost:"20",
//         weekday:[1],
//         time_from:[720],
//         time_to:[1220]
//     }
// ]

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
