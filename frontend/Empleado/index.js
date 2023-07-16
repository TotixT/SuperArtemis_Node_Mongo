import { obtainEmpleados, nuevoEmpleado, deleteEmpleado, obtenerEmpleado, editarEmpleado } from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    cargarEmpleados();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarEmpleados(){
    const empleados = await obtainEmpleados();
    const contenedor = document.querySelector(".employees");
    empleados.forEach(element => {
        const {Nombre, Apellido, Correo, Telefono, Direccion, Pais, _id} = element
        console.log(element);
        contenedor.innerHTML+= `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 style="color: black;" class="card-title">${Nombre}</h5>
                <h6 style="color: black;" class="card-subtitle mb-2">${Apellido}</h6>
                <p style="color: cyan; font-weight: bold;" class="card-text">${Correo}</p>
                <p style="color: cyan; font-weight: bold;" class="card-text">${Telefono}</p>
                <p style="color: cyan; font-weight: bold;" class="card-text">${Direccion}</p>
                <p style="color: cyan; font-weight: bold;" class="card-text">${Pais}</p>
                <a class="card-link btn btn-warning update" id=${_id} data-bs-toggle="modal" data-bs-target="#updateEmployee">Editar</a>
                <a class="card-link btn btn-danger delete" id=${_id}>Eliminar</a>
            </div>
        </div>
    `;

    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit',nuevoEmployee);

function nuevoEmployee(e){
    e.preventDefault();
    const Nombre = document.querySelector("#EmpleadoNombre").value;
    const Apellido = document.querySelector("#EmpleadoApellido").value;
    const Correo = document.querySelector("#Correo").value;
    const Telefono = document.querySelector("#Telefono").value;
    const Direccion = document.querySelector("#Direccion").value;
    const Pais = document.querySelector("#Pais").value;
    
    const registro={
        Nombre,
        Apellido,
        Correo,
        Telefono,
        Direccion,
        Pais
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevoEmpleado(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector(".employees");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteEmpleado(id);
        }
    }
}

//EDITAR CATEGORIA - CRUD (U)

const infoCategoria = document.querySelector(".employees");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if(e.target.classList.contains('update')){
        const id = e.target.getAttribute('id');
        console.log(id);
        const data = await obtenerEmpleado(id);

        const {_id, Nombre, Apellido, Correo, Telefono, Direccion, Pais} = data
        
        const nombres = document.querySelector("#EmpleadoNombreUpdate");
        const apellidos = document.querySelector("#EmpleadoApellidoUpdate");
        const correos = document.querySelector("#CorreoUpdate");
        const telefonos = document.querySelector("#TelefonoUpdate");
        const direcciones = document.querySelector("#DireccionUpdate");
        const paises = document.querySelector("#PaisUpdate");
        const idEdit = document.querySelector("#idEdit");

        nombres.setAttribute("placeholder",Nombre);
        apellidos.setAttribute("placeholder",Apellido);
        correos.setAttribute("placeholder",Correo);
        telefonos.setAttribute("placeholder",Telefono);
        direcciones.setAttribute("placeholder",Direccion);
        paises.setAttribute("placeholder",Pais);

        // nombres.value = nombre;
        // descripciones.value = descripcion;
        // imagenes.value = imagen;
        idEdit.value = _id;
    }
}


const updateFormulario = document.querySelector("#formularioUpdate");
updateFormulario.addEventListener("submit",updateEmpleado)


function updateEmpleado(e){
    e.preventDefault();
    const id = document.querySelector("#idEdit").value;
    console.log(id);

    const Nombre = document.querySelector("#EmpleadoNombreUpdate").value;
    const Apellido = document.querySelector("#EmpleadoApellidoUpdate").value;
    const Correo = document.querySelector("#CorreoUpdate").value;
    const Telefono = document.querySelector("#TelefonoUpdate").value;
    const Direccion = document.querySelector("#DireccionUpdate").value;
    const Pais = document.querySelector("#PaisUpdate").value;


    const empleado = {
        Nombre,
        Apellido,
        Correo,
        Telefono,
        Direccion,
        Pais
    }

    if(validation(empleado)){
        alert("Todos los datos son obligatorios");
        // Se retorna la validacion y el id en conjunto
    } return editarEmpleado(empleado,id);
}