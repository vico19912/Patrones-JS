const restaurApp = {};

restaurApp.platillo = [
    {
        platillo: 'Pizza',
        precio: 25,
    },
    {
        platillo: 'Hanbueguesa',
        precio: 20,
    },
    {
        platillo: 'Hot Dog',
        precio: 15,
    },
];
//Funciones

restaurApp.funciones = {
    ordenar: id =>{
        console.log(`
            Tu platillo: ${restaurApp.platillo[id].platillo} se esta preparando
        `);
    }
}

console.log(restaurApp);
restaurApp.funciones.ordenar(2);