export class Egreso {
    static contadorEgresos = 0;

    constructor(descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
        this._id = ++Egreso.contadorEgresos;
    }

    get descripcion() {
        return this._descripcion;
    }

    get valor() {
        return this._valor;
    }

    get id() {
        return this._id;
    }
}



/*export class Egreso extends Dato {
    static contadorEgresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }

    get id() {
        return this._id;
    }
};*/

