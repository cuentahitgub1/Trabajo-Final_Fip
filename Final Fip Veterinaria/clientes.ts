export class clientes {
    private nombre: string;
    private telefono: number;
    private vip: string;
    private id: number;
    
    constructor(nombre: string, telefono: number, vip: string, id: number) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.vip = vip;
        this.id = id;
    }

    //Getter
    public getNombre(): string {
        return this.nombre;
    }
    public getTelefono(): number {
        return this.telefono;
    }
    public getVip(): string {
        return this.vip;
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
    public setVip(vip: string): void {
        this.vip = vip;
    }
    public setId(id: number): void {
        this.id = id;
    }

    public toString(): string {
        return `Cliente: ${this.nombre}, Teléfono: ${this.telefono}, VIP: ${this.vip}, Id: (${this.id})`;
    }
}
