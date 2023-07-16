import { obtainProductos, nuevoProducto, deleteProducto, obtenerProducto, editarProducto } from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function cargarProductos(){
    const productos = await obtainProductos();
    const contenedor = document.querySelector(".products");
    productos.forEach(element => {
        const {NombreProducto, Precio, Stock, CategoriaProducto, _id} = element
        // console.log(element);
        contenedor.innerHTML+= `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 style="color: black;" class="card-title">${NombreProducto}</h5>
                <h6 style="color: black;" class="card-subtitle mb-2">Precio: $${Precio}</h6>
                <p style="color: cyan; font-weight: bold;" class="card-text">Unidades: ${Stock}</p>
                <p style="color: cyan; font-weight: bold;" class="card-text">${CategoriaProducto}</p>
                <a class="card-link btn btn-warning update" id=${_id} data-bs-toggle="modal" data-bs-target="#updateProduct">Editar</a>
                <a class="card-link btn btn-danger delete" id=${_id}>Eliminar</a>
            </div>
        </div>
    `;

    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit',nuevoProduct);

function nuevoProduct(e){
    e.preventDefault(); //Aca
    const NombreProducto = document.querySelector("#ProductoNombre").value;
    const Precio = document.querySelector("#Precio").value;
    const Stock = document.querySelector("#Stock").value;
    const CategoriaProducto = document.querySelector("#CategoriaProducto").value;
    
    const registro={
        NombreProducto,
        Precio,
        Stock,
        CategoriaProducto
    }

    if(validation(registro)){
        alert("Todos los datos son obligatorios");
    } return nuevoProducto(registro);
    
}

function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
}

/* ELIMINAR CATEGORIA  - CRUD (D) */

const eliminar = document.querySelector(".products");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id')

        const confirmar = confirm("Desea Eliminarlo?")
        if(confirmar){
            deleteProducto(id);
        }
    }
}

//EDITAR CATEGORIA - CRUD (U)

const infoCategoria = document.querySelector(".products");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if(e.target.classList.contains('update')){
        const id = e.target.getAttribute('id');
        console.log(id);
        const data = await obtenerProducto(id);

        const {_id, NombreProducto, Precio, Stock, CategoriaProducto} = data
        
        const nombres = document.querySelector("#ProductoNombreUpdate");
        const precios = document.querySelector("#PrecioUpdate");
        const stocks = document.querySelector("#StockUpdate");
        const categorias = document.querySelector("#CategoriaProductoUpdate");
        const idEdit = document.querySelector("#idEdit");

        nombres.setAttribute("placeholder",NombreProducto);
        precios.setAttribute("placeholder",Precio);
        stocks.setAttribute("placeholder",Stock);
        categorias.setAttribute("placeholder",CategoriaProducto);

        // nombres.value = nombre;
        // descripciones.value = descripcion;
        // imagenes.value = imagen;
        idEdit.value = _id;
    }
}


const updateFormulario = document.querySelector("#formularioUpdate");
updateFormulario.addEventListener("submit",updateProducto)


function updateProducto(e){
    e.preventDefault();
    const id = document.querySelector("#idEdit").value;
    console.log(id);

    const NombreProducto = document.querySelector("#ProductoNombreUpdate").value;
    const Precio = document.querySelector("#PrecioUpdate").value;
    const Stock = document.querySelector("#StockUpdate").value;
    const CategoriaProducto = document.querySelector("#CategoriaProductoUpdate").value;


    const producto = {
        NombreProducto,
        Precio,
        Stock,
        CategoriaProducto
    }
    console.log(producto);

    if(validation(producto)){
        alert("Todos los datos son obligatorios");
        // Se retorna la validacion y el id en conjunto
    } return editarProducto(producto,id);
}