let egresos = {
    Renta: 900,
    Ropa: 400
};
let ingresos = {
    Quincena: 9000,
    Venta: 400
};


const cargarCabecero = () => {
    const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgreso = totalEgresos() / totalIngresos();
    return { presupuesto, porcentajeEgreso };
};


const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of Object.values(ingresos)) {
        totalIngreso += ingreso;
    }
    return totalIngreso;
};


const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of Object.values(egresos)) {
        totalEgreso += egreso;
    }
    return totalEgreso;
};

const { presupuesto, porcentajeEgreso } = cargarCabecero();
//console.log("Presupuesto:", presupuesto);
//console.log("Porcentaje de egreso:", porcentajeEgreso);
//console.log("Total de ingresos:", totalIngresos());
//console.log("Total de egresos:", totalEgresos());

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
};


const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
};




console.log("Presupuesto:", formatoMoneda(presupuesto));
console.log("Porcentaje de egreso:", formatoPorcentaje(porcentajeEgreso));
console.log("Total de ingresos:", formatoMoneda(totalIngresos()));
console.log("Total de egresos:", formatoMoneda(totalEgresos()));