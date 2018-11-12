/**
 * 
 * description
 * 
 * 
 * @param {String} nome
 * @param {object} pedido
 * 
 */


class Fatura {

    constructor(nome, pedido) {
        this.name = nome;
        this.pedidos = [pedido];

    }
    addArtigo(art){
        this.pedidos.push(art);
    }
}

class Artigo  {

    constructor(nome,  extra) {
        this.name= nome;
        this.extra = extra;

    }

}



