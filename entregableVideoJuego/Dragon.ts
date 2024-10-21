import { Personaje } from "./Personaje";

export class Dragon extends Personaje {
    private bolaFuego: number;

    constructor(nombre:string, nivel?:number, puntosDeVida?:number, puños?:number) {
        super(nombre, nivel, puntosDeVida);
        
        this.bolaFuego = 200;
    }

    getBolaFuego():number {
        return this.bolaFuego;
    }


    public atacar(): void {
        console.log(`${this.getNombre()}, lanza bola de fuego, ${this.getBolaFuego()} de daño`);
        
    }


    public defender(): void {
        console.log(`${this.getNombre()} se defiende con sus brazos`);
        
    }

    public evolucionar(): void {
        
    }

}
