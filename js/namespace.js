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
    ordenar: id => {
        console.log(`
            Tu platillo: ${restaurApp.platillo[id].platillo} se esta preparando`);
    },
    agregarPaltillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillo.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menú: `);
        platillos.forEach( (platillo, index)  => {
            console.log( `${index} : ${platillo.platillo} $ ${platillo.precio}` )
        });
    }


}

console.log(restaurApp);
const { platillos } = restaurApp
restaurApp.funciones.mostrarMenu(platillos);
//restaurApp.funciones.ordenar(2);
restaurApp.funciones.ordenar(2);