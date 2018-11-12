function getOk() {
    $.ajax({
        url: "http://192.168.0.122:3000/health",
        type: 'GET',
        contentType: 'application/json',
        data:JSON.stringify({
            //aqui enviar o que eu quero
        }),
        success: function (data) {
            console.log(data);

        }
    });
}
getOk();