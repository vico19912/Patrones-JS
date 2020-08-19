const alumnos = {
    //Todos los alumnos

    listaAlumnos : [],



    //Obtener alumno
    get: function(id){
        console.log(id);
        return this.listaAlumnos[id];
    },


    //Crear alumno
    crear: function(datos){
        console.log(datos);
        this.listaAlumnos.push(datos);
        
    },



    //Listar todos los alumnos
    listado: function(){
        return this.listaAlumnos;
    }
}

const infoAlumno = {
    nombre: 'Victor',
    edad: 20
}
const infoAlumno2 = {
    nombre: 'Anthony',
    edad: 15
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listado = alumnos.listado();
console.log(listado);

const alumno = alumnos.get(0);
console.log(alumno);