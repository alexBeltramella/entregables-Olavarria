"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombreLugar, listaMotos, listaCamiones, listaAutos) {
        this.nombreLugar = nombreLugar;
        if (listaMotos != undefined) {
            this.motos = listaMotos;
        }
        else {
            this.motos = [];
        }
        if (listaCamiones != undefined) {
            this.camiones = listaCamiones;
        }
        else {
            this.camiones = [];
        }
        if (listaAutos != undefined) {
            this.autos = listaAutos;
        }
        else {
            this.autos = [];
        }
    }
    //NOMBRE DEL LUGAR DONDE SE HACE EL REGISTRO DEL AUTOMOTOR
    RegistroAutomotor.prototype.getNombreLugar = function () {
        return this.nombreLugar;
    };
    //PARA AGREGAR MOTOS, CAMIONES, AUTOS
    RegistroAutomotor.prototype.agregarMotos = function (moto) {
        this.motos.push(moto);
    };
    RegistroAutomotor.prototype.agregarCamiones = function (camion) {
        this.camiones.push(camion);
    };
    RegistroAutomotor.prototype.agregarAutos = function (auto) {
        this.autos.push(auto);
    };
    //PARA ELIMINAR 
    RegistroAutomotor.prototype.eliminarMotos = function (marca) {
        this.motos = this.motos.filter(function (moto) { return moto.getMarca() !== marca; });
    };
    RegistroAutomotor.prototype.eliminarAutos = function (marca) {
        this.autos = this.autos.filter(function (auto) { return auto.getMarca() !== marca; });
    };
    RegistroAutomotor.prototype.eliminarCamiones = function (marca) {
        this.camiones = this.camiones.filter(function (camion) { return camion.getMarca() !== marca; });
    };
    //OBTENER VEHICULOS
    RegistroAutomotor.prototype.obtenerMotos = function () {
        return this.motos;
    };
    RegistroAutomotor.prototype.obtenerCamiones = function () {
        return this.camiones;
    };
    RegistroAutomotor.prototype.obtenerAutos = function () {
        return this.autos;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
