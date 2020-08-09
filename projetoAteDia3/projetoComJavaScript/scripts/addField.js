//Procurar o botão
document.querySelector("#add-time")

//evento clicar
.addEventListener("click", cloneField)

//função para o click - duplicar o campo com add-time
function cloneField(){
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //limpando os campos clonados
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field){
        //pegar o field do momento e limpar
        field.value = ""
    })



    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}