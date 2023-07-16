import { obtainClientes, nuevoCliente, borrarCliente, obtenerClient, editarClient } from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    cargarClientes();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarClientes(){
    const clientes = await obtainClientes();
    const contenedor = document.querySelector(".clients");
    clientes.forEach(element => {
        const {Compania, Contacto, Titulo, Direccion, Ciudad, CodigoPostal, Pais, Telefono, Fax, _id} = element
        console.log(element);
        contenedor.innerHTML+= `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 style="color: black;" class="card-title">${Compania}</h5>
                <h6 style="color: black;" class="card-subtitle mb-2">${Contacto}</h6>
                <p style="color: cyan; font-weight: bold;" class="card-text">${Titulo}</p>
                <p style="color: cyan; font-weight: bold;" class="card-text">${Direccion}</p>
                <p style="color: cyan; font-weight: bold;" class="card-text">${Ciudad}</p>
                <p style="color: cyan; font-weight: bold;" class="card-text">${CodigoPostal}</p>
                <p style="color: cyan; font-weight: bold;" class="card-text">${Pais}</p>
                <p style="color: cyan; font-weight: bold;" class="card-text">${Telefono}</p>
                <p style="color: cyan; font-weight: bold;" class="card-text">${Fax}</p>
                <a class="card-link btn btn-warning update" id=${_id} data-bs-toggle="modal" data-bs-target="#updateClient">Editar</a>
                <a class="card-link btn btn-danger delete" id=${_id}>Eliminar</a>
            </div>
        </div>
    `;

    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit',nuevoClients);

function nuevoClients(e){
    e.preventDefault();
    const Compania = document.querySelector("#Compania").value;
    const Contacto = document.querySelector("#Contacto").value;
    const Titulo = document.querySelector("#Titulo").value;
    const Direccion = document.querySelector("#Direccion").value;
    const Ciudad = document.querySelector("#Ciudad").value;
    const CodigoPostal = document.querySelector("#CodigoPostal").value;
    const Pais = document.querySelector("#Pais").value;
    const Telefono = document.querySelector("#Telefono").value;
    const Fax = document.querySelector("#Fax").value;
    
    const registro={
        Compania,
        Contacto,
        Titulo,
        Direccion,
        Ciudad,
        CodigoPostal,
        Pais,
        Telefono,
        Fax
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevoCliente(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector(".clients");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')
        console.log(id);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            borrarCliente(id);
        }
    }
}

//EDITAR CATEGORIA - CRUD (U)

const infoCliente = document.querySelector(".clients");
infoCliente.addEventListener("click",getInfo);

async function getInfo(e){
    if(e.target.classList.contains('update')){
        const id = e.target.getAttribute('id');
        console.log(id);
        const data = await obtenerClient(id);

        const {_id, Compania, Contacto, Titulo, Direccion, Ciudad, CodigoPostal, Pais, Telefono, Fax} = data
        
        const Companias = document.querySelector("#CompaniaUpdate");
        const Contactos = document.querySelector("#ContactoUpdate");
        const Titulos = document.querySelector("#TituloUpdate");
        const Direcciones = document.querySelector("#DireccionUpdate");
        const Ciudades = document.querySelector("#CiudadUpdate");
        const CodigoPostales = document.querySelector("#CodigoPostalUpdate");
        const Paises = document.querySelector("#PaisUpdate");
        const Telefonos = document.querySelector("#TelefonoUpdate");
        const Faxs = document.querySelector("#FaxUpdate");
        const idEdit = document.querySelector("#idEdit");

        Companias.setAttribute("placeholder",Compania);
        Contactos.setAttribute("placeholder",Contacto);
        Titulos.setAttribute("placeholder",Titulo);
        Direcciones.setAttribute("placeholder",Direccion);
        Ciudades.setAttribute("placeholder",Ciudad);
        CodigoPostales.setAttribute("placeholder",CodigoPostal);
        Paises.setAttribute("placeholder",Pais);
        Telefonos.setAttribute("placeholder",Telefono);
        Faxs.setAttribute("placeholder",Fax);

        // nombres.value = nombre;
        // descripciones.value = descripcion;
        // imagenes.value = imagen;
        idEdit.value = _id;
    }
}


const updateFormulario = document.querySelector("#formularioUpdate");
updateFormulario.addEventListener("submit",updateCliente)


function updateCliente(e){
    e.preventDefault();
    const id = document.querySelector("#idEdit").value;
    console.log(id);
    const Compania = document.querySelector("#CompaniaUpdate").value;
    const Contacto = document.querySelector("#ContactoUpdate").value;
    const Titulo = document.querySelector("#TituloUpdate").value;
    const Direccion = document.querySelector("#DireccionUpdate").value;
    const Ciudad = document.querySelector("#CiudadUpdate").value;
    const CodigoPostal = document.querySelector("#CodigoPostalUpdate").value;
    const Pais = document.querySelector("#PaisUpdate").value;
    const Telefono = document.querySelector("#TelefonoUpdate").value;
    const Fax = document.querySelector("#FaxUpdate").value;


    const cliente = {
        Compania,
        Contacto,
        Titulo,
        Direccion,
        Ciudad,
        CodigoPostal,
        Pais,
        Telefono,
        Fax
    }

    if(validation(cliente)){
        alert("Todos los datos son obligatorios");
        // Se retorna la validacion y el id en conjunto
    } return editarClient(cliente,id);
}