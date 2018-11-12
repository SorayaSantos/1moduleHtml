function Make_Caracter() {

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 1; i++) {
        text = possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text
}


//Função get_BooksData:

//vai buscar dados à API da google books encontrados com o carácter devolvido na função Make_Caracter
//guarda esses livros encontrado no array books_found
//cria um número aleatório
//guarda a informação do livro do array books_found cujo indice é o número aleatório criado
//se esse livro não estiver no array books_saved é guardado nesse array e é enviado para aparecer no html
//se esse livro estiver no array books_saved a função é corrida novamente para procurar um novo livro    


function Books_Like() {

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
    for (l in books_saved) {
        if (books_saved[l] == new Book(title, image, description, link)) {
            get_BooksData_Like();
        }
    }
    books_saved_liked.push(books_saved[books_saved.length - 1]);
    books_saved.push(new Book(title, image, description, link));
    console.log(books_found[numero]);
    console.log(books_found[numero].id);
    $('#book_image').html(`<img src="` + image + `"alt="Imagem unavailable! ">`);
    $('#book_title').html(title);
    $('#book_description').html(description);
    $('#book_link').html(`<a href="` + link + `"alt="Link unavailable!" target="_blank"> Click to get more info about the book </a>`);
 
    if (numero<books_found.length-1){
            numero++;}
    else{
        getData();
    }
}


function get_BooksData_Dislike() {

    if (text != $("#word").val()) {
        Make_Caracter();
    }

    var books_found = [];

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + text,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {

            //console.log(data.items)
            //console.log(data.items.lenght)
            //var array = JSON.parse(data.items);
            //console.log(array)
            for (j in data.items) {
                books_found.push(data.items[j])
            }
            numero = Math.floor(Math.random() * books_found.length);

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
            for (l in books_saved) {
                if (books_saved[l] == new Book(title, image, description, link)) {
                    get_BooksData_Dislike();
                }
            }
            books_saved_disliked.push(books_saved[books_saved.length - 1]);
            books_saved.push(new Book(title, image, description, link));
            console.log(books_found[numero]);
            console.log(books_found[numero].id);
            $('#book_image').html(`<img src="` + image + `"alt="Imagem unavailable! ">`);
            $('#book_title').html(title);
            $('#book_description').html(description);
            $('#book_link').html(`<a href="` + link + `"alt="Link unavailable!" target="_blank"> Click to get more info about the book </a>`);
        }
    });
};

function Home() {

    $("#tableBody").html("");

    if (text != $("#word").val()) {
        Make_Caracter();
    }

    $("#conteudo").show();
    $(".table").hide();

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + text,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {

            //console.log(data.items)
            //console.log(data.items.lenght)
            //var array = JSON.parse(data.items);
            //console.log(array)

            for (j in data.items) {
                books_found.push(data.items[j])
            }

            numero = Math.floor(Math.random() * books_found.length);

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

            books_saved.push(new Book(title, image, description, link));
            $('#book_image').html(`<img src="` + image + `"alt="Image unavailable! ">`);
            $('#book_title').html(title);
            $('#book_description').html(description);
            $('#book_link').html(`<a href="` + link + `"alt="Link unavailable!" target="_blank"> Click to get more info about the book  </a>`);

        }
    });
};

function Result() {
    $("#conteudo").hide();
    $(".table").show();

    for (let i = 0; i < books_saved_liked.length; i++) {
        $("#tableBody").append(`<tr class="d-flex">
                                <td class="col-sm-6">`+ books_saved_liked[i].titulo + `</td>
                                </tr>`)
    }

    for (let j = 0; j < books_saved_disliked.length; j++) {
        $("#tableBody").append(`<tr class="d-flex">
                            <td class="col-sm-6"></td>
                            <td class="col-sm-6">`+ books_saved_disliked[j].titulo + `</td>
                            </tr>`)
    }
}

function getData() {

    if (text != $("#word").val()) {
        Make_Caracter();
    }

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + text,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            for (j in data.items) {
                books_found.push(data.items[j]);
            }
        }
    });
};
