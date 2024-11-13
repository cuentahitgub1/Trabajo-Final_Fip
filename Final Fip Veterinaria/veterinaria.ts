export class veterinaria {
    private nombre: string;
    private direccion: string;
    private id: number;
    
    constructor(nombre: string, direccion: string, id: number) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
    }

    //Getter
    public getNombre(): string {
        return this.nombre;
    }
    public getDireccion(): string {
        return this.direccion;
    }
    public getId(): number {
        return this.id;
    }
   
    //Setter
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }
    public setId(id: number): void {
        this.id = id;
    }

    public toString(): string {
        return `Veterinaria: ${this.nombre}, Dirección: ${this.direccion}, Id: (${this.id})`;
    }
}
