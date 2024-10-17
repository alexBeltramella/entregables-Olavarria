import { Motos } from "./Motos";
import { Camiones } from "./Camiones"; 
import { Autos } from "./Autos";
import { RegistroAutomotor } from "./RegistroAutomotor";

//CREO LAS MOTOS
const motos = new Motos("kawasaki", 21, 10.000);
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

//ver lista de cada vehiculo
console.log("vehiculos del registro", registro.obtenerMotos().map(moto => moto.getMarca()), registro.obtenerCamiones().map(camion => camion.getMarca()), registro.obtenerAutos().map(auto => auto.getMarca()));


//ELIMINAR AUTO
registro.eliminarAutos("Ford");

console.log("vehiculos del registro despues de actualizacion:", registro.obtenerMotos().map(moto => moto.getMarca()), registro.obtenerCamiones().map(camion => camion.getMarca()), registro.obtenerAutos().map(auto => auto.getMarca()));




