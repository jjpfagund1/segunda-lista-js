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

function celPFar(){
    let respostaFar = document.getElementById("respostaFar")

    let celRecebido = document.getElementById("CelPFar").value

    let farResposta = (celRecebido * [9/5]) + 32

    console.log("O resultado da Conversão é: " + farResposta)

    respostaFar.innerHTML = "O resultado da Conversão é: " + farResposta
}

function farPCel(){
    let respostaCel = document.getElementById("respostaCel")

    let farRecebido = document.getElementById("FarPCel").value

    let celResposta = (farRecebido - 32) * (5/9)

    console.log("O resultado da Conversão é: " + celResposta)
    respostaCel.innerHTML = "O resultado da Conversão é: " + celResposta.toFixed(2)
}