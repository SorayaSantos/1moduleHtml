$(document).ready(function () {
    console.log("ready!")
    $(".table").hide();
});

var text = "";
var books_found = [];
var books_saved_liked = [];
var books_saved_disliked = [];
var books_ids = [];

Make_Caracter();

$("#like").click(function(){
    Books_Like();
});

$("#dislike").click(function(){
    Books_Dislike();
});
$("#home").click(function(){
    Home();
});
$("#result").click(function(){
    Result();
});
$("#search").click(function(){
    Find();
});
$("#back").click(function(){
    $("#table1").html('');
    $("#table2").html('');
    $("#conteudo").show();
    $(".table").hide();
});
