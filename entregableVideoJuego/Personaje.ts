export abstract class Personaje {
    private nombre: string;
    protected nivel: number;
    protected puntosDeVida: number = 500;

    abstract atacar():void;
    abstract defender():void;
    abstract evolucionar():void;

    constructor(nombre:string, nivel:number, puntosDeVida:number) {
        this.nombre = nombre;
        this.nivel = nivel = 10;
        this.puntosDeVida = puntosDeVida;
        
    }

    getNombre():string {
        return this.nombre;
    }

    getNivel():number {
        return this.nivel;
    }

    setNivel(masNivel):void {
        this.nivel = masNivel;
    }

    getPuntosDeVida():number {
        return this.puntosDeVida;
    }
}