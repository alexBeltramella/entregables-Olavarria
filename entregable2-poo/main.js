"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Motos_1 = require("./Motos");
var Camiones_1 = require("./Camiones");
var Autos_1 = require("./Autos");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
//CREO LAS MOTOS
var motos = new Motos_1.Motos("kawasaki", 21, 10000);
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
//VER MARCA, AÑO DE ANTIGUEDAD Y VALOR
//MOTOS
console.log("Motos: Marcas: ".concat(motos.getMarca(), ", ").concat(motos2.getMarca(), " | A\u00F1o de antiguedad: ").concat(motos.getAñoAntiguedad(), ", ").concat(motos2.getAñoAntiguedad(), " | Valor: ").concat(motos.getValor(), ", ").concat(motos.getValor(), ", \"Valor con descuento:\" ").concat(motos.obtenerDescuento()));
//CAMIONES
console.log("Camiones: Marcas: ".concat(camiones.getMarca(), ", ").concat(camiones2.getMarca(), " | A\u00F1o de antiguedad: ").concat(camiones.getAñoAntiguedad(), ", ").concat(camiones2.getAñoAntiguedad(), " | Valor: ").concat(camiones.getValor(), ", ").concat(camiones2.getValor()));
//AUTOS
console.log("Autos: Marcas: ".concat(autos.getMarca(), ", ").concat(autos2.getMarca(), " | A\u00F1o de antiguedad: ").concat(autos.getAñoAntiguedad(), ", ").concat(autos2.getAñoAntiguedad(), " | Valor: ").concat(autos.getValor(), ", ").concat(autos2.getValor()));
//ver lista de cada vehiculo
console.log("vehiculos del registro: Motos:", registro.obtenerMotos().map(function (moto) { return moto.getMarca(); }), "Camiones", registro.obtenerCamiones().map(function (camion) { return camion.getMarca(); }), "Autos", registro.obtenerAutos().map(function (auto) { return auto.getMarca(); }));
//ELIMINAR AUTO
registro.eliminarAutos("Ford");
//REGISTRO DESPUES DE ELIMINAR AUTO
console.log("vehiculos del registro despues de actualizacion: Motos:", registro.obtenerMotos().map(function (moto) { return moto.getMarca(); }), "Camiones", registro.obtenerCamiones().map(function (camion) { return camion.getMarca(); }), "Autos", registro.obtenerAutos().map(function (auto) { return auto.getMarca(); }));
