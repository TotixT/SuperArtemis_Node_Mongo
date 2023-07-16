const urlGet = "http://localhost:5000/producto/all";
const urlGetId = "http://localhost:5000/producto/one";
const urlAdd = "http://localhost:5000/producto/add";
const urlDel = "http://localhost:5000/producto/del";
const urlUpt = "http://localhost:5000/producto/upt";


export const obtainProductos = async () => {
    try {
        const productos = await fetch(urlGet);
        const datosProductos = productos.json();
        return datosProductos;
    } catch (error) {
        console.log(error);
    }
}

export const nuevoProducto = async (producto) => {
    try {
        await fetch(`${urlAdd}/`,{
            method: "POST",
            body: JSON.stringify(producto),
            headers:{
                'Content-Type':'application/json'
            }
        })
        location.reload();
    } catch (error) {
        console.log(error);
    }
}


export const deleteProducto = async (id) => {
    try {
        await fetch(`${urlDel}/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        })
        location.reload();
    } catch (error) {
        console.log(error);
    }
}



export const obtenerProducto = async (id) => {
    try {
        const EmpleadoId = await fetch(`${urlGetId}/${id}`);
        const result = await EmpleadoId.json();
        return result;
      } catch (error) {
        console.log(error);
      }
}



export const editarProducto = async (product,id) => {
    try {
        await fetch(`${urlUpt}/${id}`,{
          method: 'PATCH',
          body: JSON.stringify(product),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      location.reload();
      } catch (error) {
        console.log(error);
      }
}





