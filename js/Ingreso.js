export class Ingreso {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
        this._id = ++Ingreso.contadorIngresos;
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


/*export class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }

    get id() {
        return this._id;
    }
};*/



