import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
    protected puños: number;

    constructor(nombre:string, nivel?:number, puntosDeVida?:number, puños?:number) {
        super(nombre, nivel, puntosDeVida);
        
        this.puños = 200;
    }

    getPuños():number {
        return this.puños;
    }


    public atacar(): void {
        console.log(`${this.getNombre()}, lanza ataque de golpes, ${this.getPuños()} de daño`);
        
    }

    public defender(): void {
        console.log(`${this.getNombre()} se defiende con sus brazos`);
        
    }

    public evolucionar(): void {
        
    }

}