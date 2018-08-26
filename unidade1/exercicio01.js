var Carro = /** @class */ (function () {
    function Carro(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    Carro.prototype.buzinar = function () {
        console.log("FonFon!");
    };
    ;
    Carro.prototype.acelerar = function (velocidade) {
        this.velocidade = this.velocidade + velocidade;
    };
    ;
    return Carro;
}());
var carro = new Carro("BMW");
carro.buzinar();
console.log(carro.velocidade);
carro.acelerar(100);
console.log(carro.velocidade);
// function Carro(nome) {
//   this.nome = nome;
//   this.velocidade = 0;
//   this.buzinar = function () {
//     console.log("FonFon!");
//   };
//   this.acelerar = function (velocidade) {
//     this.velocidade = this.velocidade + velocidade;
//   }; 
// }
// var carro = new Carro("BMW");
// carro.buzinar();
// console.log(carro.velocidade);
// carro.acelerar(100);
// console.log(carro.velocidade);
