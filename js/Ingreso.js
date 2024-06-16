

class ingreso extends dato() {
    static contadorIngreso = 0;
    
    constructor (descripcion, valor) {
     super (descripcion, valor);
     this._id = ++ingreso.contadorIngreso;
    }

    get id() {
        return this._id;
    }

}


//module.exports = ingreso;