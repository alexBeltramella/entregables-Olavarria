import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    protected poderMagia: number;

    constructor(nombre:string, nivel?:number, puntosDeVida?:number, poderMagia?:number) {
        super(nombre, nivel, puntosDeVida);
        
        this.poderMagia = 100;
    }

    getPoderMagia():number {
        return this.poderMagia;
    }

    getEvolucion():number {
        return this.nivel + 100;
    }


    public atacar(): void {
        console.log(`${this.getNombre()}, lanza poder magico, ${this.getPoderMagia()} de daño`);
        
    }

    public defender(): void {
        console.log(`${this.getNombre()} se defiende con su capa`);
        
    }

    public evolucionar(): void {
        console.log(`${this.getNombre()}, obtiene diamantes sube a nivel ${this.getEvolucion()} y evoluciona a mago supremo`);
        
    }

}