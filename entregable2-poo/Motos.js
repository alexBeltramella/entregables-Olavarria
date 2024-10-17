"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motos = void 0;
var Motos = /** @class */ (function () {
    function Motos(marca, añoAntiguedad, valor) {
        this.marca = marca;
        this.añoAntiguedad = añoAntiguedad;
        this.valor = valor;
    }
    Motos.prototype.getMarca = function () {
        return this.marca;
    };
    Motos.prototype.getAñoAntiguedad = function () {
        return this.añoAntiguedad;
    };
    Motos.prototype.getValor = function () {
        return this.valor;
    };
    return Motos;
}());
exports.Motos = Motos;
