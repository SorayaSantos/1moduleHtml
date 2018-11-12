

function ordenar(num) {

    var temp = ""
    var temp2= ""

    for (let j = 0; j < num.length-1; j++) {

        for (let i= 0; i < num.length; i++) {
            if (parseInt(num[i])< parseInt(num[i+1])) {
                temp = num[i]
                num[i]=num[i+1]
                num[i+1]=temp
            }       
        } 
    
    if (parseInt(num[j])<parseInt(num[j+1])) {
        temp2 = num[j]
        num[j]=num[j+1]
        num[j+1]=temp2

    }

    }
       
    return num   //atencao o return quebra o ciclo, tem que estar fora do ciclo
}

function concatenar(lista) {
  var result = "";
  for (let s = 0; s < lista.length; s++) {
      result += lista[s]
      
  }
  return result 
}

function main() {

    var frase1 = document.getElementById("txt1").value;
    var novafrase = frase1.split('');
    document.getElementById("ord1").innerHTML = concatenar(ordenar(novafrase));

}

