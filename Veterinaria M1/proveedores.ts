export class proveedores {
    private nombre: string;
    private telefono: number;
    private id: number;
    
    constructor(nombre: string, telefono: number, id: number) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
    }

    //Getter
    public getNombre(): string {
        return this.nombre;
    }
    public getTelefono(): number {
        return this.telefono;
    }
    public getId(): number {
        return this.id;
    }
   
    //Setter
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }
    public setId(id: number): void {
        this.id = id;
    }

    public toString(): string {
        return `Proveedor: ${this.nombre}, Teléfono: ${this.telefono}, Id: (${this.id})`;
    }
}