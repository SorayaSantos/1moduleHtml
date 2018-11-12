function Make_Caracter() {

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 1; i++) {
        text = possible.charAt(Math.floor(Math.random() * possible.length));
    }
    getData(text);
}

function Books_Like() {

    books_saved_liked.push(books_found[numero]);
    books_found.shift();
  
    if (books_found.length<5){
        Make_Caracter();}
    else{
        Set_Parameters()
    }
}

function Books_Dislike() {
    books_saved_disliked.push(books_found[numero]);
    books_found.shift();

    if (books_found.length<5){
        Make_Caracter();}
    else{
        Set_Parameters()
    }
}

function Home() {
    $("#tableBody").html('');
    $("#conteudo").show();
    $(".table").hide();
    books_found=[];
    Make_Caracter();
};

function Result() {
    $("#conteudo").hide();
    $(".table").show();

    for (let i = 0; i < books_saved_liked.length; i++) {
        $("#tableBody").append(`<tr class="d-flex">
                                <td class="col-sm-6">`+ books_saved_liked[i].volumeInfo.title + `</td>
                                </tr>`)
    }

    for (let j = 0; j < books_saved_disliked.length; j++) {
        $("#tableBody").append(`<tr class="d-flex">
                            <td class="col-sm-6"></td>
                            <td class="col-sm-6">`+ books_saved_disliked[j].volumeInfo.title + `</td>
                            </tr>`)
    }
}

function getData(letra) {
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + letra+ "&startIndex=0&maxResults=40",
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            for (j in data.items) {
                books_found.push(data.items[j]);
            }
            numero=0;
            Set_Parameters();
        }
    });
   
};

function Set_Parameters() {

    if (books_found[numero].volumeInfo.imageLinks.thumbnail != undefined) {
        image = books_found[numero].volumeInfo.imageLinks.thumbnail;
    }
    else {
        image = "Impossible to display the book image";
    }
    if (books_found[numero].volumeInfo.title != undefined) {
        title = books_found[numero].volumeInfo.title;
    }
    else {
        title = "Impossible to display the book title";
    }
    if (books_found[numero].volumeInfo.description != undefined) {
        description = books_found[numero].volumeInfo.description;
    }
    else {
        description = "Impossible to display the book description";
    }
    if (books_found[numero].volumeInfo.infoLink != undefined) {
        link = books_found[numero].volumeInfo.infoLink;
    }
    else {
        link = "Impossible to display the infoLink of the book";
    }

    Display();
}

function Display() {
    $('#book_image').html(`<img src="` + image + `"alt="Image unavailable! ">`);
    $('#book_title').html(title);
    $('#book_description').html(description);
    $('#book_link').html(`<a href="` + link + `"alt="Link unavailable!" target="_blank"> Click to get more info about the book </a>`);
 }
 function Find() {
    books_found=[];
    text = $("#word").val();
    getData(text);
};