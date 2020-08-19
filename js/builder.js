class Formualrio{
    constructor(){
        this.campos = []
    }

    agregarCampo(tipo, texto){
        let campos = this.campos;

        let campo;

        switch (tipo) {
            case 'text':
                campo = new InputText(texto);
                break;

            case 'email':
                campo = new InputEmail(texto);
                break;

            case 'button':
                campo = new Boton(texto);
                break;

            default:
                throw new Error('Tipo no valido: ' + tipo);
                break;
        }

        campos.push(campo);
    }

    obtenerFormulario(){
        let form = document.createElement('form'),
            campos= this.campos.length,
            campo;

           for (let i = 0; i < campos; i++) {
               campo = this.campos[i];
               form.appendChild(campo.crearElemento());
               let br = document.createElement('br');
               form.appendChild(br);
           }
           return form;
    }

}

class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}

class InputText extends Inputs{
    constructor(texto){
        super(texto)
    }

    crearElemento(){
        const inputText = document.createElement('input');
        inputText.setAttribute('type' , 'text');
        inputText.setAttribute('placeholder', this.texto);
        return inputText;
    }
}

class InputEmail extends Inputs{
    constructor(texto){
        super(texto)
    }

    crearElemento(){
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type' , 'email');
        inputEmail.setAttribute('placeholder', this.texto);
        return inputEmail;
    }
}

class Boton extends Inputs{
    constructor(texto){
        super(texto)
    }

    crearElemento(){
        const button = document.createElement('button');
        button.setAttribute('type' , 'submit');
        button.textContent = this.texto;
        return button;
    }
}


//Instanciar formulario
const formualrio = new Formualrio();
formualrio.agregarCampo('text', 'Añade tu nombre');
formualrio.agregarCampo('text', 'Añade tu apellido');
formualrio.agregarCampo('email', 'Añade tu correo');
formualrio.agregarCampo('button', 'Enviar');

console.log(formualrio);

//Rendereizar en el html
document.addEventListener('DOMContentLoaded' , ()=>{
    document.querySelector('#app').appendChild( formualrio.obtenerFormulario() )
});