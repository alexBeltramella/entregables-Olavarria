import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    protected lluviaFlechas: number;

    constructor(nombre:string, nivel?:number, puntosDeVida?:number, lluviaFlechas?:number) {
        super(nombre, nivel, puntosDeVida);
        
        this.lluviaFlechas = 300;
    }

    getLluviaFlechas():number {
        return this.lluviaFlechas;
    }


    public atacar(): void {
        console.log(`${this.getNombre()}, lanza poder lluvia de flechas, ${this.getLluviaFlechas()} de daño`);
        
    }

    public defender(): void {
        console.log(`${this.getNombre()} se defiende con su escudo`);
        
    }

    public evolucionar(): void {
        
    }
}