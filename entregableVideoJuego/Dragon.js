"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dragon = void 0;
var Personaje_1 = require("./Personaje");
var Dragon = /** @class */ (function (_super) {
    __extends(Dragon, _super);
    function Dragon(nombre, nivel, puntosDeVida, puños) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.bolaFuego = 200;
        return _this;
    }
    Dragon.prototype.getBolaFuego = function () {
        return this.bolaFuego;
    };
    Dragon.prototype.atacar = function () {
        console.log("".concat(this.getNombre(), ", lanza bola de fuego, ").concat(this.getBolaFuego(), " de da\u00F1o"));
    };
    Dragon.prototype.defender = function () {
        console.log("".concat(this.getNombre(), " se defiende con sus brazos"));
    };
    Dragon.prototype.evolucionar = function () {
    };
    return Dragon;
}(Personaje_1.Personaje));
exports.Dragon = Dragon;
