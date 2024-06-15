const ingreso = require('./Ingreso');
const egreso = require('./Egreso');

/*let egresos = {
    Renta: 900,
    Ropa: 400
};
let ingresos = {
    Quincena: 9000,
    Venta: 400
};*/ 
let ingresos = {
salario: 20000,
ventaAuto: 50000
}

egresos = {
renta: 4000, 
ropa: 800
}


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


const cargarIngresos = () => {
let ingresosHTML = '';
for (const ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
}
Document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
    return `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
    <div class="elemento_eliminar">
    <button class="elemento_eliminar--btn">
    <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
    </button>
    </div>
    </div>
    `;
};

    const cargarEgresos = () => {
        let ingresosHTML = '';
        for (const egreso of egresos) {
            egresosHTML += crearEgresoHTML(egreso);
        }
        Document.getElementById('lista-egresos').innerHTML;
        };
        
        const cargarEgresos = () => {
            return `
            <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="elemento_valor">+ ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${calcularPorcentajeEgreso(egreso)}
            <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
            <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${Egreso.id})"></ion-icon>
            </button>
            </div>
            </div>
            `;
        };
