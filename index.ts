// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
class Persona {
  private nombre: string;
  private apellido: string;
  private anoNac: number;
  constructor(nombre: string, apellido: string, anoNac: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.anoNac = anoNac;
  }
  public toString(): string {
    return this.nombre + this.apellido;
  }
  public edad(anoActual: number): number {
    return anoActual - this.anoNac;
  }

  get Nombre(): string {
    return this.nombre;
  }
  set Nombre(nombre: string) {
    this.nombre = nombre;
  }
  get Apellido(): string {
    return this.apellido;
  }
  set Apellido(apellido: string) {
    this.apellido = apellido;
  }
  get AnoNacimiento(): number {
    return this.anoNac;
  }
  set AnoNacimiento(anoNac: number) {
    this.anoNac = anoNac;
  }
}
