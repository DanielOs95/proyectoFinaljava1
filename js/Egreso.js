

class egreso extends dato() {

    static contadoregreso = 0;
    
    constructor (descripcion, valor) {
     super (descripcion, valor);
     this._id = ++egreso.contadorEgreso;
    }

    get id() {
        return this._id;
    }

}

//module.exports = egreso;