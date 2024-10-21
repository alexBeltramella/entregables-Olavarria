import { Personaje } from "./Personaje";
import { Mago } from "./Mago"; 
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";
import { Dragon } from "./Dragon";

const mago1 = new Mago("Nexus");

const luchador1 = new Luchador("Felius");

const arquero1 = new Arquero("Tenz");

const dragon1 = new Dragon("Drogo")

mago1.atacar();
dragon1.atacar();
mago1.defender();

mago1.evolucionar();

luchador1.atacar();
luchador1.defender();

arquero1.atacar();
arquero1.defender();

