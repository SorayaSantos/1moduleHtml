$(document).ready(function () {
    console.log("ready!")
});

    var numero;
    var text = "";

    function makeid() {
        
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 1; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    return text
    }

    makeid();
    console.log(text);

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q="+text,
        type: 'GET',
        contentType: 'application/json',
        success: function (data) {
            
        numero = Math.floor(Math.random() * data.items.lenght);

        if (Math.floor(Math.random() * data.items.lenght!=numero)) {
            
        }
            console.log(numero)

        image = data.items[0].volumeInfo.imageLinks.thumbnail;
            $('#book_image').html(`<img src="` + image +`"alt="Imagem nao encontrada! ">`);

        title = data.items[0].volumeInfo.title;
            $('#book_title').html(title);

        description = data.items[0].volumeInfo.description;
            $('#book_description').html(description);

        link = data.items[0].volumeInfo.infoLink;
        console.log(link)
            $('#book_link').html(`<a href="` + link + `"> INFOLINK </a>`);
       
        
    }
    });



