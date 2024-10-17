"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Motos_1 = require("./Motos");
var Camiones_1 = require("./Camiones");
var Autos_1 = require("./Autos");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
//CREO LAS MOTOS
var motos = new Motos_1.Motos("kawasaki", 21, 10.000);
var motos2 = new Motos_1.Motos("corven", 15, 20.000);
//CREO CAMIONES
var camiones = new Camiones_1.Camiones("Scania", 23, 1000);
var camiones2 = new Camiones_1.Camiones("Volvo", 25, 1000);
//CREO AUTOS
var autos = new Autos_1.Autos("Ford", 21, 1000);
var autos2 = new Autos_1.Autos("Nisan", 5, 1000);
//REGITRO
var registro = new RegistroAutomotor_1.RegistroAutomotor("lugar");
//AGREGAR VEHICULO
registro.agregarMotos(motos);
registro.agregarMotos(motos2);
registro.agregarCamiones(camiones);
registro.agregarCamiones(camiones2);
registro.agregarAutos(autos);
registro.agregarAutos(autos2);
//ver lista de cada vehiculo
console.log("vehiculos del registro", registro.obtenerMotos().map(function (moto) { return moto.getMarca(); }), registro.obtenerCamiones().map(function (camion) { return camion.getMarca(); }), registro.obtenerAutos().map(function (auto) { return auto.getMarca(); }));
//ELIMINAR AUTO
registro.eliminarAutos("Ford");
console.log("vehiculos del registro despues de actualizacion:", registro.obtenerMotos().map(function (moto) { return moto.getMarca(); }), registro.obtenerCamiones().map(function (camion) { return camion.getMarca(); }), registro.obtenerAutos().map(function (auto) { return auto.getMarca(); }));
