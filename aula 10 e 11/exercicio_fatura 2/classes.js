 // A $( document ).ready() block.

     console.log("ready!")


//     var data = [{ n: 1, nome: "soraya", pedido: [{ nome: "batatas", extra: "ketchup" }, { nome: "agua", extra: "sem gas" }] },

//     { n: 2, nome: "joao", pedido: [{ nome: "salada", extra: "sem ovo" }, { nome: "ananas" }] },

//     { n: 3, nome: "luis", pedido: [{ nome: "nada" }] }]


//     function getExtra(data) {

//         guardar = [];



//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i].pedido.length);
//             for (let j = 0; j < data[i].pedido.length; j++) {

//                 if (Object.keys(data[i].pedido[j]).length > 1) {

//                     if (guardar.indexOf(data[i]) === -1) {

//                         guardar.push(data[i]);
//                     }

//                 }
//             }


//         }
//         console.log(guardar);


//     }
//     getExtra(data);
//     console.log(data);


/**
 * 
 * description
 * 
 * @param {data} id
 * @param {String} nome
 * @param {object} pedido
 * 
 */


class Fatura {

    constructor(nome, pedido) {
        this.id = new Date().getTime();
        this.nome = nome;
        this.pedidos = [pedido];

    }
    addArtigo(art){
        this.pedidos.push(art);
    }

}

class Artigo  {

    constructor(nome,  extra) {
        this.nome= nome;
        this.extra = extra;

    }

}

// var artig= new Artigo("Mini", "queijo");
// var conta = new Fatura('Soraya',artig);
// var artig2= new Artigo("Big", "queijo");

// conta.addArtigo(artig2);

