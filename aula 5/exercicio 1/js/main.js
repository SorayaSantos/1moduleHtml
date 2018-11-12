

// function mostrar(params) {
//     var num1 = prompt ("De me um numero");
//     num1 = parseInt(num1)
//     var resultado = num1 + 10
//     alert ("Resultado " + resultado);
// }
    // var input1 = document.getElementById('ipt1').value;
    // // console.log(input1);
    // document.getElementById("result").innerHTML=input1;

    // document.getElementById("btn1").style.display="none";
    // alert ("li " + input1);

    
 

// }
function contar(params) {
    var guardar = document.getElementById("frase1").value;
    var tamanho = guardar.length;
    var cont = 0
    for (let index = 0; index < tamanho; index++) {
        if (guardar[index]===" ") {
            cont++
        }
        
    }
    document.getElementById("result").innerHTML= cont ;
}


