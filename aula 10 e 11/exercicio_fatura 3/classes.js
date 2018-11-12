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



