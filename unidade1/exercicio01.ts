class Carro{
    
    velocidade: number;
    constructor(
        public nome: string)
    {
        this.velocidade = 0;
    }

    buzinar(){
        console.log("FonFon!");
    };

    acelerar(velocidade:number){
        this.velocidade = this.velocidade + velocidade;
    };
}

let carro = new Carro("BMW");
carro.buzinar();
console.log(carro.velocidade);
carro.acelerar(100);
console.log(carro.velocidade);