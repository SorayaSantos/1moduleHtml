// A $( document ).ready() block.
 $(document).ready(function () {
     console.log("ready!")


    var data = [{ n: 1, nome: "soraya", pedido: [{ nome: "batatas", extra: "ketchup" }, { nome: "agua", extra: "sem gas" }] },

    { n: 2, nome: "joao", pedido: [{ nome: "salada", extra: "sem ovo" }, { nome: "ananas" }] },

    { n: 3, nome: "luis", pedido: [{ nome: "nada" }] }]


    function getExtra(data) {

        guardar = [];



        for (let i = 0; i < data.length; i++) {
            console.log(data[i].pedido.length);
            for (let j = 0; j < data[i].pedido.length; j++) {

                if (Object.keys(data[i].pedido[j]).length > 1) {

                    if (guardar.indexOf(data[i]) === -1) {

                        guardar.push(data[i]);
                    }

                }
            }


        }
        console.log(guardar);


    }
    getExtra(data);
    console.log(data);



 $("#btn1").click(function() {
    console.log("jhegf");
    var pessoa = $('#pessoa').val();
    var ped = $('#pedido').val();
    var ext = $('#pedido').val();
    var id = (data.length) + 1;

    data.push({ n: id, nome: pessoa, pedido: [{ nome: ped, extra: ext }] })
    console.log(data);


});
});