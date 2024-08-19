
const textArea = document.querySelector(".digitacao__texto");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    ocultarAnexo();
    }


function encriptar(stringEncriptada) {
    
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if( stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
//  Para o botão desencriptar, usei evento o alternativo que está embaixo
//function btnDesencriptar() {
//    const textoDesencriptado = desencriptar(textArea.value);
//    mensagem.value = textoDesencriptado;
//    textArea.value = "";
//}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter" , "e"] , ["imes" , "i"] , ["ai" , "a"] , ["ober" , "o"] , ["ufat" , "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if( stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        ocultarAnexo();
    }
    return stringDesencriptada;
}

// Evento alternativo de botão desencriptar
document.getElementById("btn-desencriptografar").addEventListener("click", btnDesencriptar);

function copiartexto() {
    let textoCopiado = document.getElementById("textocopiar");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);

    document.execCommand("copy");
    mensagem.value="";
    alert("Texto copiado para a área de transferência!");
}

function ocultarAnexo () {
    const anexo = document.querySelector(".anexo__mensagem");
    anexo.style.display = "none";
}

