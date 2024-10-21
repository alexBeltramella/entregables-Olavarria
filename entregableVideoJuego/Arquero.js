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
exports.Arquero = void 0;
var Personaje_1 = require("./Personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, nivel, puntosDeVida, lluviaFlechas) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.lluviaFlechas = 300;
        return _this;
    }
    Arquero.prototype.getLluviaFlechas = function () {
        return this.lluviaFlechas;
    };
    Arquero.prototype.atacar = function () {
        console.log("".concat(this.getNombre(), ", lanza poder lluvia de flechas, ").concat(this.getLluviaFlechas(), " de da\u00F1o"));
    };
    Arquero.prototype.defender = function () {
        console.log("".concat(this.getNombre(), " se defiende con su escudo"));
    };
    Arquero.prototype.evolucionar = function () {
    };
    return Arquero;
}(Personaje_1.Personaje));
exports.Arquero = Arquero;
