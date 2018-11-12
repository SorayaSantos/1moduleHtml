/**
 * 
 * description
 * 
 * @param {String} combustivel
 * @param {String} cor
 * @param {number} numeroRodas
 * 
 */


class Veiculo{

    constructor(combustivel,cor,numeroRodas=2){ // 2 e o default do numero de rodas
        this.combustivel=combustivel; //por convencao utiliza se o mesmo nome em vez de a b c
        this.cor = cor;
        this.numeroRodas = numeroRodas;
        this.contaQuilometros=0;
    }


    andar(distancia=1){
        this.contaQuilometros+=distancia;
        return "andou " + distancia;
    }

}

var v1 = new Veiculo("gasoleo","red",4);

v1.andar(10);

console.log("v1 contaQuilometros",v1.contaQuilometros);


class automovel extends Veiculo{

    constructor(combustivel,cor,numeroAssentos,numeroPortas){
        super(combustivel,cor,4);
        this.numeroAssentos=numeroAssentos;
        this.numeroPortas=numeroPortas;
        this.NumeroVolantes=1;
        this.LitrosDeposito=10;
    }

    porCombustivel(litros){
        this.litrosDeposito+=litros;
    }

    tirarCombustivel(litros){
        this.litrosDeposito-=litros;
    }

    
    andar(distancia=1){
        super.andar(distancia);
        this.litrosDeposito-=distancia;
        return "andou " + distancia + "litros ";
    }
        

    }



var auto1 = new automovel("Gasolina95","Preto",2,4);
