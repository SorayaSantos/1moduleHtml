

function par(num1) {

    var novonum1 = ""

    for (let i = 0; i < num1.length; i++) {
        
       if (parseInt(num1[i])%2===0 && parseInt(num1[i+1])%2===0) {
        novonum1 += num1[i] + "-";
        continue  
       }
       else {
        novonum1 += num1[i]
       }
    }
       
    return novonum1   //atencao o return quebra o ciclo, tem que estar fora do ciclo
}

function impar(num2) {

    var novonum2 = ""

    for (let i = 0; i < num2.length; i++) {
        
       if (parseInt(num2[i])%2!=0 && parseInt(num2[i+1])%2!=0) {
        novonum2 += num2[i] + "#";
        continue  
       }
       else {
        novonum2 += num2[i]
       }
    }
       
    return novonum2   //atencao o return quebra o ciclo, tem que estar fora do ciclo
}


function main() {

    var frase1 = document.getElementById("txt1").value;
    document.getElementById("result").innerHTML = par(impar(frase1));

}

