import { obtainCategories, nuevaCategoria, deleteCategory, obtenerCategory, editarCategory } from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    cargarCategorias();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarCategorias(){
    const categorias = await obtainCategories();
    const contenedor = document.querySelector(".categories");
    categorias.forEach(element => {
        const {imagen, nombre, descripcion, _id} = element
        console.log(element);
        contenedor.innerHTML+= `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 style="color: black;" class="card-title">${nombre}</h5>
                <h6 style="color: black;" class="card-subtitle mb-2">${descripcion}</h6>
                <p style="color: cyan; font-weight: bold;" class="card-text">${imagen}</p>
                <a class="card-link btn btn-warning update" id=${_id} data-bs-toggle="modal" data-bs-target="#updateCategory">Editar</a>
                <a class="card-link btn btn-danger delete" id=${_id}>Eliminar</a>
            </div>
        </div>
    `;

    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit',nuevoCategoria);

function nuevoCategoria(e){
    e.preventDefault();
    const nombre = document.querySelector("#CategoriaNombre").value;
    const descripcion = document.querySelector("#Descripcion").value;
    const imagen = document.querySelector("#Imagen").value;
    
    const registro={
        nombre,
        descripcion,
        imagen
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevaCategoria(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector(".categories");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')
        console.log(id);

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteCategory(id);
        }
    }
}

//EDITAR CATEGORIA - CRUD (U)

const infoCategoria = document.querySelector(".categories");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if(e.target.classList.contains('update')){
        const id = e.target.getAttribute('id');
        console.log(id);
        const data = await obtenerCategory(id);

        const {_id, nombre, descripcion, imagen} = data
        
        const nombres = document.querySelector("#CategoriaNombreUpdate");
        const descripciones = document.querySelector("#DescripcionUpdate");
        const imagenes = document.querySelector("#ImagenUpdate");
        const idEdit = document.querySelector("#idEdit");

        nombres.setAttribute("placeholder",nombre);
        descripciones.setAttribute("placeholder",descripcion);
        imagenes.setAttribute("placeholder",imagen);

        // nombres.value = nombre;
        // descripciones.value = descripcion;
        // imagenes.value = imagen;
        idEdit.value = _id;
    }
}


const updateFormulario = document.querySelector("#formularioUpdate");
updateFormulario.addEventListener("submit",updateCategoria)


function updateCategoria(e){
    e.preventDefault();
    const id = document.querySelector("#idEdit").value;
    console.log(id);
    const nombre = document.querySelector("#CategoriaNombreUpdate").value;
    const descripcion = document.querySelector("#DescripcionUpdate").value;
    const imagen = document.querySelector("#ImagenUpdate").value;


    const categoria = {
        nombre,
        descripcion,
        imagen
    }

    if(validation(categoria)){
        alert("Todos los datos son obligatorios");
        // Se retorna la validacion y el id en conjunto
    } return editarCategory(categoria,id);
}