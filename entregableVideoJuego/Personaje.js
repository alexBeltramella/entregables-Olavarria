"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, nivel, puntosDeVida) {
        this.puntosDeVida = 500;
        this.nombre = nombre;
        this.nivel = nivel = 10;
        this.puntosDeVida = puntosDeVida;
    }
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.setNivel = function (masNivel) {
        this.nivel = masNivel;
    };
    Personaje.prototype.getPuntosDeVida = function () {
        return this.puntosDeVida;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
