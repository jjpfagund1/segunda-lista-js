function atividadeum(){
    let resposta = document.getElementById("resposta")
    let comprimento = Number(document.getElementById("comprimento").value)  
    let lado = Number(document.getElementById("lado").value)  
    let altura = Number(document.getElementById("altura").value)
    
    let area = lado ** 2
    console.log("área = " + area)

    let volume = (area * altura) / 3
    console.log("volume = " + volume)

    resposta.innerHTML = "O valor do Volume da Pirâmide é igual a: " + volume + "m3"
}