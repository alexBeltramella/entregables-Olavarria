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
    Motos.prototype.obtenerDescuento = function () {
        if (this.añoAntiguedad >= 20) {
            return this.valor * 0.50;
        }
        else {
            return this.valor;
        }
    };
    Motos.prototype.getValor = function () {
        return this.valor;
    };
    return Motos;
}());
exports.Motos = Motos;
