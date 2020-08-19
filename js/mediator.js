const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}
const Comprador = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador} (Sonido de mazo)`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador){
        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}

const Subasta = function(){
    let compradores = {};

    return {
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Instanciar las clases
const victor = new Comprador('Victor');
const karen = new Comprador('Karen');
const reina = new Comprador('Reina');

const vendedor = new Vendedor('vendedor');

const subasta = new Subasta();
subasta.registrar(victor);
subasta.registrar(karen);
subasta.registrar(reina);

vendedor.oferta('Mustang 1966', 3000);
victor.oferta(3500, victor);
karen.oferta(4000, karen);
reina.oferta(8000, reina);
vendedor.vendido(reina.nombre);