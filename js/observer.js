//Tambien conocido como suscriptor/observador

let observer = {
    obtenerOfertas: function(callback) {
        if ( typeof callback === 'function') {
            this.suscribers[this.suscribers.length] = callback;
        }
    },
    cancelarOfertas: function(callback){
        for (let i= 0; i < this.suscribers.length; i++){
            if (this.suscribers[i] === callback) {
                delete this.suscribers[i];
            }
        }
    },
    publicarOferta: function(oferta){
        for (let i= 0; i < this.suscribers.length; i++){
            if ( typeof this.suscribers[i] === 'function') {
                this.suscribers[i](oferta);
            }
        }
    },

    crear: function(objeto){
        for(let i in this){
            if (this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.suscribers = [];
            }
        }
    }

}


//Vendedores
const udemy = {
    nuevoCruso: function(){
        const curso = 'Un nuevo curso de javaScript';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function(){
        const oferta = 'Compra un celular';
        this.publicarOferta(oferta);
    }
}

//Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);


const Victor = {
    compartir: function(oferta){
        console.log('Victor dice: Excelente oferta! ' + oferta);
    }
};

const Karen = {
    interesa: function(oferta){
        console.log('Karen dice: Me interesa la oferta de ' + oferta);
    }
};

udemy.obtenerOfertas( Victor.compartir );
udemy.obtenerOfertas( Karen.interesa );
udemy.nuevoCruso();
udemy.cancelarOfertas(Karen.interesa)
udemy.nuevoCruso();


facebook.obtenerOfertas( Karen.interesa )
facebook.obtenerOfertas( Victor.compartir )
facebook.nuevoAnuncio()