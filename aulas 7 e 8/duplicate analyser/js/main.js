// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" )

  

    $("#btn1").click(function () {  
        var numb1 = $('#number1').val();
        console.log(numb1)
        $('#result').html(criar_tabela(contar(numb1)));
  
    });

    
});

function contar(texto) {

    guardar={};

    for (let i = 0; i < texto.length; i++) {
        
        if (guardar[texto[i]] === undefined) {
            guardar[texto[i]] = 1;
        }

        else

            {guardar[texto[i]] ++
            }
        
    }
    console.log( guardar )
    return guardar;
    

}

function criar_tabela(objecto) {
    
    var chave = Object.keys(objecto);

    for (let i = 0; i < chave.length; i++) {

        $("#tableBody").append(`<tr>
                                    <td>`+chave[i]+`</td>
                                    <td>`+objecto[chave[i]]+`</td>
                                </tr>`)

        //$('#tableBody').append('<tr><td>' + chave[i] + '</td>');
        //$('#tableBody').append('<td>' + objecto[chave[i]] + '</td></tr>');
    }

    //for (let j = 0; j < chave.length; j++) {

    //    $('.table').append('<tr><td>' + guardar[chave[j]] + '</tr>');
//}
}
