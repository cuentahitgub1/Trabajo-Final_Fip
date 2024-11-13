import { veterinaria } from './veterinaria';
import { proveedores } from './proveedores';
import { clientes } from './clientes';
import { pacientes } from './pacientes';
import { Registro } from './registro';

const registro = new Registro();

const veterinaria1 = new veterinaria('M1', 'Av.Argentina Calle Messi',10);
const cliente1 = new clientes('Leandro', 441590,'No', 1234);
const cliente2 = new clientes('Facundo', 443022,'Si', 2222);
const cliente3 = new clientes('Maico', 456933,'No', 9876);
const paciente1 = new pacientes('Firulais', 'Perro', 5678);
const paciente2 = new pacientes('Tigresa', 'Exotica', 3333);
const paciente3 = new pacientes('Michi', 'Gato', 5432);
const proveedor1 = new proveedores('BuenaVida', 100100, 100);
const proveedor2 = new proveedores('MascotasFelices', 900900, 900);


registro.agregar(veterinaria1);
registro.agregar(proveedor1);
registro.agregar(proveedor2);
registro.agregar(cliente1);
registro.agregar(paciente1);
registro.agregar(cliente2); 
registro.agregar(paciente2);

console.log("");
registro.listar();

registro.darDeAlta(3);
registro.darDeAlta(3);

console.log("\nDespués de dar de alta:");
registro.listar();

registro.darDeBaja(3);
registro.darDeBaja(3);

console.log("\nDespués de dar de baja:");
registro.listar();

registro.agregar(cliente3); 
registro.agregar(paciente3);
registro.agregar(cliente1); 
registro.agregar(paciente1);

console.log("\nNuevos clientes y pacientes:");
registro.listar();
