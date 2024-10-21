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

    // obtenerDescuento() {
    //     for(let i = 0; this.getAñoAntiguedad.length >= 20, i++); {
    //         if(this.añoAntiguedad >= 20) {
    //             return this.valor * 0.50;
    //         }else {
    //             return this.valor;
    //         }
    //     }
    // }
    
    getValor():number {
        return this.valor;
    }
}