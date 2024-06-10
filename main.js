function atividadeUm(){
    let respostaUm = document.getElementById("respostaUm")
    let comprimento = document.getElementById("comprimento").value 
    let lado = document.getElementById("lado").value
    let altura = document.getElementById("altura").value
    
    let area = lado ** 2
    console.log("área = " + area)

    let volume = (area * altura) / 3
    console.log("volume = " + volume)

    respostaUm.innerHTML = "O valor do Volume da Pirâmide é igual a: " + volume + "m3"
}

function atividadeDois(){
    let respostaDois = document.getElementById("respostaDois")
    let mmhg = document.getElementById("mmhg").value
    console.log("mmHg = " + mmhg)
    let psi = mmhg / 51.715

    console.log("psi = " + psi)
    respostaDois.innerHTML = "O valor convertdi é igual a: " + psi + " PSI"
}