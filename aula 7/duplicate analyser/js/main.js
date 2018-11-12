$(document).ready(function () {
    console.log("ready!")

    $("#btn1").click(function () {
        $('result').html(gettable(numb1));
    });

    var numb1 = $('#number1');

});

function contar(numeros) {

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) {
            contar0++
        }
    }
}
