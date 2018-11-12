$(document).ready(function () {
    console.log("ready!")
    $(".table").hide();
});

var numero=0;
var text = "";
var books_found = [];
var books_saved = [];
var books_saved_liked = [];
var books_saved_disliked = [];


Make_Caracter();
Home();

$("#like").click(function(){
    get_BooksData_Like();
});

$("#dislike").click(function(){
    get_BooksData_Dislike();
});
$("#home").click(function(){
    Home();
});
$("#result").click(function(){
    Result();
});
$("#search").click(function(){
    text = $("#word").val();
    Home();
});
