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
exports.Mago = void 0;
var Personaje_1 = require("./Personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, nivel, puntosDeVida, poderMagia) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.poderMagia = 100;
        return _this;
    }
    Mago.prototype.getPoderMagia = function () {
        return this.poderMagia;
    };
    Mago.prototype.getEvolucion = function () {
        return this.nivel + 100;
    };
    Mago.prototype.atacar = function () {
        console.log("".concat(this.getNombre(), ", lanza poder magico, ").concat(this.getPoderMagia(), " de da\u00F1o"));
    };
    Mago.prototype.defender = function () {
        console.log("".concat(this.getNombre(), " se defiende con su capa"));
    };
    Mago.prototype.evolucionar = function () {
        console.log("".concat(this.getNombre(), ", obtiene diamantes sube a nivel ").concat(this.getEvolucion(), " y evoluciona a mago supremo"));
    };
    return Mago;
}(Personaje_1.Personaje));
exports.Mago = Mago;
