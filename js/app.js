//  Variables necesarias
const btnEnviarDatos = document.querySelector('.btn-success')
const btnMostrarDatos = document.querySelector('.btn-primary')
const btnGeneracion = document.querySelector('.btn-warning')
const btnMayorDeEdad = document.querySelector('.btn-danger')
const formularioDatos = document.querySelector('form')
let listaUsuarios = []

formularioDatos.onsubmit = (e) => {
    e.preventDefault()
    const inputNombre = document.getElementById('nombreUsuario').value
    const inputEdad = document.getElementById('edadUsuario').value
    const inputDNI = document.getElementById('dniUsuario').value
    const inputSexo = document.getElementById('sexoUsuario').value
    const inputPeso = document.getElementById('pesoUsuario').value
    const inputAltura = document.getElementById('alturaUsuario').value
    const inputAnioNacimiento = document.getElementById('anioNacimientoUsuario').value
    const inputDomicilio = document.getElementById('domicilioUsuario').value
    const usuario1 = new Persona(inputNombre, inputEdad, inputDNI, inputSexo, inputPeso, inputAltura, inputAnioNacimiento, inputDomicilio)
    listaUsuarios.push(usuario1)
    formularioDatos.reset()
  
    btnMostrarDatos.className = 'btn btn-primary ancho-btn-responsive d-block'
    btnEnviarDatos.className = 'btn btn-primary ancho-btn-responsive d-none'
  }

  //  Funciones
btnGeneracion.addEventListener('click', () => {
    listaUsuarios[0].mostrarGeneracion()
  })
  
  btnMayorDeEdad.addEventListener('click', () => {
    listaUsuarios[0].esMayorDeEdad()
  })
  
  btnMostrarDatos.addEventListener('click', () => {
    listaUsuarios[0].mostrarDatos()
  })

  class Persona{
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento, domicilio){
      this._nombre = nombre
      this._edad = edad
      this._dni = dni
      this._sexo = sexo
      this._peso = peso
      this._altura = altura
      this._anioNacimiento = anioNacimiento
      this._domicilio = domicilio
    }
  
    get nombre(){
      return this._nombre
    }
  
    set nombre(nuevoNombre){
      this._nombre = nuevoNombre
    }
    
    get edad(){
      return this._edad
    }
  
    set edad(nuevaEdad){
      this._edad = nuevaEdad
    }
    
    get dni(){
      return this._dni
    }
  
    set dni(nuevoDNI){
      this._dni = nuevoDNI
    }
    
    get sexo(){
      return this._sexo
    }
  
    set sexo(nuevoSexo){
      this._sexo = nuevoSexo
    }
    
    get peso(){
      return this._peso
    }
  
    set peso(nuevoPeso){
      this._peso = nuevoPeso
    }
    
    get altura(){
      return this._altura
    }
  
    set altura(nuevaAltura){
      this._altura = nuevaAltura
    }
    
    get anioNacimiento(){
      return this._anioNacimiento
    }
    
    set anioNacimiento(nuevoAnioNacimiento){
      this._anioNacimiento = nuevoAnioNacimiento
    }
    
    get domicilio(){
      return this._domicilio
    }
  
    set domicilio(nuevoDomicilio){
      this._domicilio = nuevoDomicilio
    }