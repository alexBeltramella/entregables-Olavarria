import { Motos } from "./Motos";
import { Camiones } from "./Camiones"; 
import { Autos } from "./Autos";
import { RegistroAutomotor } from "./RegistroAutomotor";

//CREO LAS MOTOS
const motos = new Motos("kawasaki", 21, 10000);
const motos2 = new Motos("corven", 15, 20.000);

//CREO CAMIONES
const camiones = new Camiones("Scania", 23, 1000);
const camiones2 = new Camiones("Volvo", 25, 1000);

//CREO AUTOS
const autos = new Autos("Ford", 21, 1000);
const autos2 = new Autos("Nisan", 5, 1000);


//REGITRO
const registro = new RegistroAutomotor("lugar");

//AGREGAR VEHICULO
registro.agregarMotos(motos);
registro.agregarMotos(motos2);

registro.agregarCamiones(camiones);
registro.agregarCamiones(camiones2);

registro.agregarAutos(autos);
registro.agregarAutos(autos2);

//VER MARCA, AÑO DE ANTIGUEDAD Y VALOR
//MOTOS
// console.log(`Motos: Marcas: ${motos.getMarca()}, ${motos2.getMarca()} | Año de antiguedad: ${motos.getAñoAntiguedad()}, ${motos2.getAñoAntiguedad()} | Valor: ${motos.getValor()}, ${motos.getValor()}, "Valor con descuento:" ${motos.obtenerDescuento()}`);


//CAMIONES
console.log(`Camiones: Marcas: ${camiones.getMarca()}, ${camiones2.getMarca()} | Año de antiguedad: ${camiones.getAñoAntiguedad()}, ${camiones2.getAñoAntiguedad()} | Valor: ${camiones.getValor()}, ${camiones2.getValor()}`);

//AUTOS
console.log(`Autos: Marcas: ${autos.getMarca()}, ${autos2.getMarca()} | Año de antiguedad: ${autos.getAñoAntiguedad()}, ${autos2.getAñoAntiguedad()} | Valor: ${autos.getValor()}, ${autos2.getValor()}`);




//ver lista de cada vehiculo
console.log("vehiculos del registro: Motos:", registro.obtenerMotos().map(moto => moto.getMarca()), "Camiones", registro.obtenerCamiones().map(camion => camion.getMarca()), "Autos", registro.obtenerAutos().map(auto => auto.getMarca()));


//ELIMINAR AUTO
registro.eliminarAutos("Ford");


//REGISTRO DESPUES DE ELIMINAR AUTO
console.log("vehiculos del registro despues de actualizacion: Motos:", registro.obtenerMotos().map(moto => moto.getMarca()), "Camiones", registro.obtenerCamiones().map(camion => camion.getMarca()), "Autos", registro.obtenerAutos().map(auto => auto.getMarca()));




