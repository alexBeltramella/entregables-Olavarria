import { Motos } from "./Motos";
import { Autos } from "./Autos";
import { Camiones } from "./Camiones";

export class RegistroAutomotor {
    private nombreLugar: string;
    private motos: Motos[];
    private camiones : Camiones[];
    private autos : Autos[];

    constructor(nombreLugar:string, listaMotos?:Motos[], listaCamiones?:Camiones[], listaAutos?:Autos[]) {
        this.nombreLugar = nombreLugar;

        if(listaMotos != undefined) {
            this.motos = listaMotos;
        }else {
            this.motos = [];
        }
        

        if(listaCamiones != undefined) {
            this.camiones = listaCamiones;
        }else {
            this.camiones = [];
        }


        if(listaAutos != undefined) {
            this.autos = listaAutos;
        }else {
            this.autos = [];
        }
    }

    //NOMBRE DEL LUGAR DONDE SE HACE EL REGISTRO DEL AUTOMOTOR
    getNombreLugar(): string {
        return this.nombreLugar;
    }

    //PARA AGREGAR MOTOS, CAMIONES, AUTOS
    agregarMotos(moto:Motos):void {
        this.motos.push(moto);
    }

    agregarCamiones(camion:Camiones):void {
        this.camiones.push(camion);
    }

    agregarAutos(auto:Autos):void {
        this.autos.push(auto);
    }
    

    //PARA ELIMINAR 
    eliminarMotos(marca:string):void {
        this.motos = this.motos.filter(moto => moto.getMarca() !== marca);
    }

    eliminarAutos(marca:string):void {
        this.autos = this.autos.filter(auto => auto.getMarca() !== marca);
    }

    eliminarCamiones(marca:string):void {
        this.camiones = this.camiones.filter(camion => camion.getMarca() !== marca);
    }

    //OBTENER VEHICULOS
    obtenerMotos(): Motos[] {
        return this.motos;
    }

    obtenerCamiones(): Camiones[] {
        return this.camiones;
    }

    obtenerAutos(): Autos[] {
        return this.autos;
    }

}