import { Operacion } from "./Operacion";

export class Resta extends Operacion{

  public constructor(numero1: number, numero2: number) {
    super();
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  public resultado(): number {
    return this.numero1 - this.numero2;
  }
}
