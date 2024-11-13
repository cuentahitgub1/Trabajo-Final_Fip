import { veterinaria } from './veterinaria';
import { proveedores } from './proveedores';
import { clientes } from './clientes';
import { pacientes } from './pacientes';

type Sucursal = veterinaria | clientes | pacientes | proveedores;

export class Registro {
    private sucursales: Sucursal[] = [];

    public agregar(sucursal: Sucursal): void {
        this.sucursales.push(sucursal);
    }

    public darDeAlta(index: number): void {
        if (index >= 0 && index < this.sucursales.length) {
            this.sucursales.splice(index, 1);
        } else {
            console.log("Modificado");
        }
    }

    public darDeBaja(index: number): void {
        if (index >= 0 && index < this.sucursales.length) {
            this.sucursales.splice(index, 1);
        } else {
            console.log("Modificado");
        }
    }

    public listar(): void {
        this.sucursales.forEach((sucursal, index) => {
            console.log(`${index}: ${sucursal.toString()}`);
        });
    }
}
