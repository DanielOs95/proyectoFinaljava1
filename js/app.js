//const ingreso = require('./Ingreso');
//const egreso = require('./Egreso');

/*let egresos = {
    Renta: 900,
    Ropa: 400
};
let ingresos = {
    Quincena: 9000,
    Venta: 400
}; */

/*let ingresos = {
salario: 20000,
ventaAuto: 50000
}

let egresos = {
renta: 4000, 
ropa: 800
}*/

/*let ingresos = [
    { id: 1, descripcion: 'Salario', valor: 20000 },
    { id: 2, descripcion: 'Venta Auto', valor: 50000 }
];

let egresos = [
    { id: 1, descripcion: 'Renta', valor: 4000 },
    { id: 2, descripcion: 'Ropa', valor: 800 }
];*/

let ingresos =[]
let egresos = []

const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos /*Object.values()*/) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
};


const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos /*Object.values()*/) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
};

//const { presupuesto, porcentajeEgreso } = cargarCabecero();
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
/*const formatoPorcentaje = (valor) => {
    return (valor * 100).toFixed(2) + '%';
}*/

const cargarCabecero = () => {
    const presupuesto = totalIngresos() - totalEgresos();
    const totalIngreso = totalIngresos();
    const porcentajeEgreso = totalIngreso ? totalEgresos() / totalIngresos() : 0;
    

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoMoneda(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
//return { presupuesto, porcentajeEgreso };
};



/*console.log("Presupuesto:", formatoMoneda(presupuesto));
console.log("Porcentaje de egreso:", formatoPorcentaje(porcentajeEgreso));
console.log("Total de ingresos:", formatoMoneda(totalIngresos()));
console.log("Total de egresos:", formatoMoneda(totalEgresos()));*/



const cargarIngresos = () => {
let ingresosHTML = '';
for (const ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
}
document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
   const ingresoHTML =  `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
    <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
    <div class="elemento_eliminar">
    <button class="elemento_eliminar--btn">
    <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
    </button>
    </div>
    </div>
    </div>
    `;
    return ingresoHTML;
};

    const cargarEgresos = () => {
        let egresosHTML = '';
        for (const egreso of egresos) {
            egresosHTML += crearEgresoHTML(egreso);
        }
        document.getElementById('lista-egresos').innerHTML = egresosHTML;
        };
        
        const crearEgresoHTML = (egreso) => {
            const egresoHTML = `
            <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
             <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalIngresos())}</div>
            <div class="elemento_eliminar"
            <button class="elemento_eliminar--btn">
            <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
            </button>
            </div>
            </div>
            </div>
            `;
            return egresoHTML;
        };

        const eliminarIngreso =(id) => {
    const indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    if (indiceEliminar !== -1){
    ingresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarIngresos();
    }
};

const eliminarEgreso = (id) => {
    const indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    if (indiceEliminar !== -1){
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
    }
};

const agregarDato = () => {0
    const forma = document.getElementById('forma');
    const tipo = forma.tipo.value;
    const descripcion = forma.descripcion.value;
    const valor = parseFloat(forma.valor.value);

    if (descripcion !=='' && !isNaN(valor) && valor > 0) {
        if(tipo === 'ingreso') {
            ingresos.push(new Ingreso(descripcion, valor));
            cargarCabecero();
            cargarIngresos();
        } else if (tipo ==='egreso') {
            egresos.push(new Egreso(descripcion, valor));
            cargarCabecero();
            cargarEgresos();
        }
    }
};

const cargarApp = () => {
    cargarCabecero();  
    cargarIngresos();  
    cargarEgresos() ;  
};

//cargarApp();

window.onload = cargarApp;

document.querySelector('.agregar_btn').addEventListener('click', (Event) => {agregarDato();
    
});