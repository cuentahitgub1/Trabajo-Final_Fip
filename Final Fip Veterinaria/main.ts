import { clientes } from './clientes';
import { pacientes } from './pacientes';
import { proveedores } from './proveedores';
import { Registro } from './registro';
import { veterinaria } from './veterinaria';

const registro = new Registro();

const veterinaria1 = new veterinaria('M1', 'Av.Argentina Calle Messi',10);
const cliente1 = new clientes('Leandro', 441590,'No', 1234);
const cliente2 = new clientes('Facundo', 443022,'Si', 2222);
const cliente3 = new clientes('Maico', 456933,'No', 9876);
const paciente1 = new pacientes('Firulais', 'Perro', 5678);
const paciente2 = new pacientes('Tigresa', 'Exotica', 3333);
const paciente3 = new pacientes('Michi', 'Gato', 5432);
const proveedor = new proveedores('BuenaVida', 100100, 100);


registro.agregar(veterinaria1);//0
registro.agregar(proveedor);//1
registro.agregar(cliente1);//2
registro.agregar(paciente1);//3
registro.agregar(cliente2); //4
registro.agregar(paciente2);//5

console.log("");
registro.listar();


registro.darDeAlta(2);
registro.darDeAlta(3);

console.log("\nDespués de dar de alta:");
registro.listar();

registro.darDeBaja(4);
registro.darDeBaja(5);

registro.agregar(cliente3);
registro.agregar(paciente3);

console.log("\nDespués de dar de baja:");
registro.listar();
