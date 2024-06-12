function atividadeUm(){
    let respostaUm = document.getElementById("respostaUm")
    let comprimento = document.getElementById("comprimento").value 
    let lado = document.getElementById("lado").value
    let altura = document.getElementById("altura").value
    
    let area = lado ** 2
    console.log("área = " + area)

    let volume = (area * altura) / 3
    console.log("volume = " + volume)

    respostaUm.innerHTML = "O valor do Volume da Pirâmide é igual a: " + volume.toFixed(2) + "m3"
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

function validaIdade(){
    let respostaQuatro = document.getElementById("respostaQuatro")

    let idade = document.getElementById("idade").value

    if (idade >= 16){
        respostaQuatro.innerHTML = "Você pode votar!"
    }else{
        respostaQuatro.innerHTML = "Você não pode votar!"
    }
}

function maiorMenor(){
    let respostaCinco = document.getElementById("respostaCinco")
    let numeros = document.getElementById("numeros").value
    let valores = numeros.split(",").map(Number)

    let maior = valores[0];
    let menor = valores[0];
    for (var i = 1; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i];
        }
        if (valores[i] < menor) {
            menor = valores[i];
        }
    }

    respostaCinco.innerHTML = "O maior número é: " + maior +"; e o menor é: " + menor
}

function parImpar(){
    let respostaSeis = document.getElementById("respostaSeis")
    let numeros = document.getElementById("numeros").value;
    let valores = numeros.split(",").map(Number);

    let somaPares = 0;
    let somaImpares = 0;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 === 0) {
            somaPares += valores[i];
        } else {
            somaImpares += valores[i];
        }
    }

    respostaSeis.innerHTML = "Soma dos Pares: " + somaPares +"; Soma dos Impares: " + somaImpares
}

function divSete(){
    let respostaSete = document.getElementById("respostaSete")
    let numeros = document.getElementById("numeros").value
    let valores = numeros.split(",").map(Number)

    let divPSete = 0

    for (let i = 0; i < valores.length; i++){
        if(valores[i] % 7 === 0 ){
            divPSete += 1
        }
    }

    respostaSete.innerHTML = "A quantidade de números divisíveis por 7 é igual a: " + divPSete
}

function atividadeOito(){
    let respostaOito = document.getElementById("respostaOito")
    let numeros = document.getElementById("numeros").value
    let valores = numeros.split(",").map(Number)

    let divPTresECinco = 0
    let divPCinco = 0
    let divPTres = 0

    for (let i = 0; i < valores.length; i++){
        if(valores[i] % 3 === 0 && valores[i] % 5 === 0){
            divPTresECinco += 1
        }
        if(valores[i] % 5 === 0){
            divPCinco += 1
        }
        if(valores[i] % 3 === 0){
            divPTres += 1
        }
    }

    respostaOito.innerHTML = "A quantidade de valores divisíveis por 3 e 5 ao mesmo tempo é igual a: " + divPTresECinco + "; por 3: " + divPTres + "; por 5: " + divPCinco
}
