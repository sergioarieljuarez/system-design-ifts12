//responsabilidad: informar stock de item deseada solo si hay o no hay
/*
 "de la item se conoce" dice el enunciado, lo cual no deja explicito
 la consigna si es obligación o no que el atributo stock este dentro o
 no de la clase Bicicleta por lo cual se procede a separar en esta clase
 el stock del item para mantenerlo separado y poder validar el mismo
 */
import IBicicleta from "../interfaces/IBicicleta";
import IStockBicicleta from "../interfaces/IStockBicicleta";
import {productosMock} from "../constants/productosMock";

export default class StockBicicleta implements IStockBicicleta {

    private _bicicleta: IBicicleta;
    private _stock: number;

    constructor(
        bicicleta: IBicicleta,
    ) {
        this._bicicleta = bicicleta; //setea la bicicleta que se esta preguntando si hay o no stock
        this._stock = this.getCurrentStock() || 0; // trae el stock disponible de la base
    }

    get bicicleta(): IBicicleta {
        return this._bicicleta;
    }

    set bicicleta(value: IBicicleta) {
        this._bicicleta = value;
    }

    get stock(): number {
        return this._stock;
    }

    set stock(value: number) {
        this._stock = value;
    }

    public getCurrentStock = () => {
        this._stock = productosMock.find((bici) => bici.item === this._bicicleta)?.stock || 0;
        return (this._stock);
    }

    public reservarStock = (cantidad: number) => {
        const reservaPermitida = this._stock - cantidad >= 0;
        if (reservaPermitida) this._stock -= cantidad; // actualiza el stock
        return(reservaPermitida);
    }
}
