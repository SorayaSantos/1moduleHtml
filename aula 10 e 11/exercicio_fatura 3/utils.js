var factura;
$(document).ready(function () {
    console.log("ready!")
    $('#home-opt').click(function () {
        renderHomePage();
    });

});

function getConteudoHome(){
    return `                    <h1 class="text-center"> Nova Fatura</h1>            <br>
    <label for="pessoa">Digite o nome: </label>
    <input type="text" id="pessoa">
    <br>
    <label for="pedido">Digite o pedido: </label>
    <input type="text" id="pedido">
    <br>
    <label for="extra">Digite o extra: </label>
    <input type="text" id="extra">
    <br>
    <button onclick="addNewFatura()" id="btn1" class="btn btn-primary"> Submeter fatura </button>
    <br>`;
}

function getConteudoAddArtigo(){
    return `<h1 class="text-center"> Deseja adicionar um novo artigo?</h1>
        <label for="pedido">Digite o pedido: </label>
        <input type="text" id="pedido">
    <br>
        <label for="extra">Digite o extra: </label>
        <input type="text" id="extra">
    <br>
    <button onclick="adicionaArtigoFaturaAtual()" id= "btn-add-artigo" class="btn btn-primary"> Adicionar artigo </button>
    <button onclick="renderHomePage()" id= "btn-nao" class="btn btn-primary"> Nao, feche a fatura </button>
    <br>`;
}

function renderHomePage(){
    $('#conteudo').html(getConteudoHome());
}

function adicionaArtigoFaturaAtual(){
    var pedido = $('#pedido').val();
    var extra = $('#extra').val();
    var artigo = new Artigo(pedido, extra);

    factura.addArtigo(artigo);

    console.log(facturas);  
}

function addNewFatura() {

    var pedido = $('#pedido').val();
    var extra = $('#extra').val();
    var pessoa = $('#pessoa').val();

    console.log(pedido,extra,pessoa);
    

    var artigo = new Artigo(pedido, extra);
    factura = new Fatura(pessoa, artigo);

    addFacturaDB(factura);
    $('#conteudo').html(getConteudoAddArtigo());

    console.log(facturas);

}


    



