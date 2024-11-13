export class pacientes {
    private nombre: string;
    private especie: string;
    private id: number;
    
    constructor(nombre: string, especie: string, id: number) {
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;
    }

    //Getter
    public getNombre(): string {
        return this.nombre;
    }
    public getDireccion(): string {
        return this.especie;
    }
    public getId(): number {
        return this.id;
    }
   
    //Setter
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setEspecie(especie: string): void {
        this.especie = especie;
    }
    public setId(id: number): void {
        this.id = id;
    }

    public toString(): string {
        return `Paciente: ${this.nombre}, Especie: ${this.especie}, Id: (${this.id})`;
    }
}