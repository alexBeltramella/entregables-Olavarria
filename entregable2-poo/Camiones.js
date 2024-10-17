"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camiones = void 0;
var Camiones = /** @class */ (function () {
    function Camiones(marca, añoAntiguedad, valor) {
        this.marca = marca;
        this.añoAntiguedad = añoAntiguedad;
        this.valor = valor;
    }
    Camiones.prototype.getMarca = function () {
        return this.marca;
    };
    return Camiones;
}());
exports.Camiones = Camiones;
