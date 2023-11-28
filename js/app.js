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