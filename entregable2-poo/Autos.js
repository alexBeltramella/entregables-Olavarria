"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autos = void 0;
var Autos = /** @class */ (function () {
    function Autos(marca, añoAntiguedad, valor) {
        this.marca = marca;
        this.añoAntiguedad = añoAntiguedad;
        this.valor = valor;
    }
    Autos.prototype.getMarca = function () {
        return this.marca;
    };
    return Autos;
}());
exports.Autos = Autos;
