$( document ).ready(function() {
    console.log( "ready!" )

    $("#target").click(function() {
        $('h1').css("color","red");
        $('.conteudo').html(getnota());


    });


});

function getnota(){

    
}
