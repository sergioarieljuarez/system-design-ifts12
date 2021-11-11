//responsabilidad: calcular descuento segun condiciones

import IPedido from "../interfaces/IPedido";
import IDescuento from "../interfaces/IDescuento";

export default class Descuento implements IDescuento {

    private _pedidos: IPedido[];
    private _formaDePago: string;


    get pedidos(): IPedido[] {
        return this._pedidos;
    }

    set pedidos(value: IPedido[]) {
        this._pedidos = value;
    }

    get formaDePago(): string {
        return this._formaDePago;
    }

    set formaDePago(value: string) {
        this._formaDePago = value;
    }

    public getDiscount=(
        pedidos: IPedido[],
        newMetodoPago?: string
    ): number =>{
        this._pedidos = pedidos;
        this._formaDePago = !!newMetodoPago ? newMetodoPago : this._formaDePago;
        return 0;
    }
}
