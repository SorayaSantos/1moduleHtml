

function contar(guardar) {
    console.log("frase",guardar)
    var tamanho = guardar.length;
    var cont = 0
    for (let index = 0; index < tamanho; index++) {
        console.log("entrou for")
        if (guardar[index]===" ") {
            console.log("entrou fif")
            cont++
        } 
    }

        console.log("numero",cont)
    return cont   //atencao o return quebra o ciclo, tem que estar fora do ciclo
   
}
    
function main() {

    var frase1 = document.getElementById("frase1").value;
    var frase2 = document.getElementById("frase2").value;
    var tamanho = 0

    document.getElementById("result1").innerHTML= "Na primeira estavam " + contar(frase1) + " espacos";
    document.getElementById("result2").innerHTML= "Na segunda estavam " + contar(frase2) + " espacos";

}

