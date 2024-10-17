export class Motos {
    private marca : string;
    private añoAntiguedad: number;
    private valor: number;

    constructor(marca:string, añoAntiguedad:number, valor:number) {
        this.marca = marca;
        this.añoAntiguedad = añoAntiguedad;
        this.valor = valor;
    }

    getMarca():string {
        return this.marca;
    }

    getAñoAntiguedad():number {
        return this.añoAntiguedad;
    }


    getDescuento():number {
        if(this.añoAntiguedad >= 20) {
            return this.valor * 0.20;
        }else {
            return this.valor;
        }
    }


    getValor():number {
        return this.valor;
    }
}