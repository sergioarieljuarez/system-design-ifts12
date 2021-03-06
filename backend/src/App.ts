import ClienteComun from "./classes/ClienteComun";
import ClienteFederado from "./classes/ClienteFederado";
import Pedido from "./classes/Pedido";
import DireccionEnvio from "./classes/DireccionEnvio";
import DatosPago from "./classes/DatosPago";
import IClienteComun from "./interfaces/IClienteComun";
import IClienteFederado from "./interfaces/IClienteFederado";
import IDatosPago from "./interfaces/IDatosPago";
import TarjetaDebito from "./classes/TarjetaDebito";
import ITarjetaCredito
    from "./interfaces/ITarjetaCredito";
import ITarjetaDebito
    from "./interfaces/ITarjetaDebito";
import TarjetaCredito
    from "./classes/TarjetaCredito";
import {bicicletasMock} from "./constants/bicicletasMock";
import {clientesFederadosMock} from "./constants/clientesFederadosMock";
import {clientesComunesMock} from "./constants/clientesComunesMock";
import {direccionesMock} from "./constants/direccionesMock";
import {tarjetasDebitoMock} from "./constants/tarjetasDebitoMock";
import {tarjetasCreditoMock} from "./constants/tarjetasCreditoMock";
import {formasDePagoEnum} from "./constants/formasDePagoEnum";
import Compra from "./classes/Compra";
import IPedido from "./interfaces/IPedido";

let pedidos: IPedido[] = [],
    cliente: IClienteComun | IClienteFederado,
    tarjeta: ITarjetaDebito | ITarjetaCredito | boolean,
    formaDePago: string,
    datosPago: IDatosPago;

console.log(`
*****************
 INICIANDO BACKEND 
"node && typescript"
*****************`);

console.log(`
*******************************
CREAR CLIENTES
*******************************`);

export function crearClienteComun() {
    const clienteComunMock = clientesComunesMock[0];
    const direccionEnvioMock = direccionesMock[0]; // opciones 0 a 3
    return new ClienteComun(
        clienteComunMock.nombre,
        clienteComunMock.apellido,
        clienteComunMock.dni,
        clienteComunMock.fechaNacimiento,
        new DireccionEnvio(
            direccionEnvioMock.ciudad,
            direccionEnvioMock.barrio,
            direccionEnvioMock.calle,
            direccionEnvioMock.altura,
            // direccionEnvioMock.piso,
            // direccionEnvioMock.departamento,
        ),
    );
}

export function crearClienteFederado() {
    const clienteFederadoMock = clientesFederadosMock[0]; // opciones 0 a 3
    return new ClienteFederado(
        clienteFederadoMock.nombre,
        clienteFederadoMock.apellido,
        clienteFederadoMock.dni,
        clienteFederadoMock.fechaNacimiento,
        clienteFederadoMock.matricula,
        clienteFederadoMock.agrupacion,
    );
}

// crear clientes
const clienteComun = crearClienteComun();
const conEnvio = true;
const clienteFederado = crearClienteFederado();

// cliente = clienteComun;
cliente = clienteFederado;

console.log(`Tipo: ${cliente.constructor.name}`);
console.log(Object.entries(cliente))

console.log(`
*******************************
DEFINIR DATOS DE PAGO
*******************************`);

export function crearTarjetaDebito() {
    const tarjetaDebitoMock = tarjetasDebitoMock[0];
    return new TarjetaDebito(
        tarjetaDebitoMock.numeroTarjeta,
    );
}

export function crearTarjetaCredito() {
    const tarjetaCreditoMock = tarjetasCreditoMock[0];
    return new TarjetaCredito(
        tarjetaCreditoMock.numeroTarjeta,
        tarjetaCreditoMock.fechaVencimiento,
    );
}

// crear tarjetas
const tarjetaDebito = crearTarjetaDebito();
const tarjetaCredito = crearTarjetaCredito();

export function crearDatosPago() {
    // formaDePago = formasDePagoEnum.DEBITO;
    // tarjeta = tarjetaDebito;
    // formaDePago = formasDePagoEnum.CREDITO;
    // tarjeta = tarjetaCredito;
    formaDePago = formasDePagoEnum.EFECTIVO;
    tarjeta = false;

    return new DatosPago(
        formaDePago,
        tarjeta,
    );
}

// crear datos de pago
datosPago = crearDatosPago();

console.log(`Tipo: ${datosPago.formaDePago}`);
console.log(Object.entries(datosPago))

console.log(`
*******************************
Pedidos: SUBTOTALES con y sin descuentos
*******************************`);

const bici1 = bicicletasMock[0]; // opciones 0 a 3
const cantidadBici1 = 1;
const pedido1 = new Pedido(cliente, datosPago, bici1, cantidadBici1)
pedido1.validar() && pedidos.push(pedido1);

const bici2 = bicicletasMock[1]; // opciones 0 a 3
const cantidadBici2 = 1;
const pedido2 = new Pedido(cliente, datosPago, bici2, cantidadBici2)
pedido1.validar() && pedidos.push(pedido2);

const bici3 = bicicletasMock[2]; // opciones 0 a 3
const cantidadBici3 = 1;
const pedido3 = new Pedido(cliente, datosPago, bici3, cantidadBici3)
pedido1.validar() && pedidos.push(pedido3);

const bici4 = bici3;
const cantidadBici4 = cantidadBici3;
const pedido4 = new Pedido(cliente, datosPago, bici4, cantidadBici4)
pedido1.validar() && pedidos.push(pedido4);

export function crearCompra(
    pedidos: IPedido[],
    conEnvio?: boolean,
) {
    return new Compra(pedidos, conEnvio);
}

const compra = crearCompra(pedidos, conEnvio);
compra.procesar(pedidos, conEnvio); // procesar la compra
compra.imprimir(); // imprimir la compra

export default class App{}
