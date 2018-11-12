// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" )

  

    $("#btn1").click(function () {  
        var numb1 = $('#number1').val();
        console.log(numb1)
        $('result').html(criar_obj(contar(numb1)));
  
    });

    
});

function contar(numeros) {

    var contar0=0;
    var contar1=0;
    var contar2=0;
    var contar3=0;
    var contar4=0;
    var contar5=0;
    var contar6=0;
    var contar7=0;
    var contar8=0;
    var contar9=0;
    var contar = []
    var algarismo = []
    console.log( numeros );

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) {
            contar0++
        }
        else if (parseInt(numeros[i]) === 1) {
            contar1++
        }
        else if (parseInt(numeros[i]) === 2) {
            contar2++
        }
        else if (parseInt(numeros[i]) === 3) {
            contar3++
        }
        else if (parseInt(numeros[i]) === 4) {
            contar4++
        }
        else if (parseInt(numeros[i]) === 5) {
            contar5++
        }
        else if (parseInt(numeros[i]) === 6) {
            contar6++
        }
        else if (parseInt(numeros[i]) === 7) {
            contar7++
        }
        else if (parseInt(numeros[i]) === 8) {
            contar8++
        }
        else if (parseInt(numeros[i]) === 9) {
            contar9++
        }
    }

algarismo.push(0,1,2,3,4,5,6,7,8,9);
contar.push(contar0,contar1,contar2,contar3,contar4,contar5,contar6,contar7,contar8,contar9);

console.log( contar );
console.log( algarismo );
return algarismo, contar

}



function criar_obj(array1,array2) {

    guardar = {}

    for (let i = 0; i < array1.lenght; i++) {
        for (let j = 0; j < array2.lenght; j++) {
            
            guardar.alg(array1[i]);
            guardar.cont(array1[j]);

        }
    }
return guardar
}

