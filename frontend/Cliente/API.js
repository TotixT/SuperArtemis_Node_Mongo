const urlGet = "http://localhost:5000/cliente/all";
const urlGetId = "http://localhost:5000/cliente/one";
const urlAdd = "http://localhost:5000/cliente/add";
const urlDel = "http://localhost:5000/cliente/del";
const urlUpt = "http://localhost:5000/cliente/upt";


export const obtainClientes = async () => {
    try {
        const clientes = await fetch(urlGet);
        const datosClientes = clientes.json();
        return datosClientes;
    } catch (error) {
        console.log(error);
    }
}

export const nuevoCliente = async (cliente) => {
    try {
        await fetch(`${urlAdd}/`,{
            method: "POST",
            body: JSON.stringify(cliente),
            headers:{
                'Content-Type':'application/json'
            }
        })
        location.reload();
    } catch (error) {
        console.log(error);
    }
}


export const borrarCliente = async (id) => {
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



export const obtenerClient = async (id) => {
    try {
        const ClienteId = await fetch(`${urlGetId}/${id}`);
        const result = await ClienteId.json();
        return result;
      } catch (error) {
        console.log(error);
      }
}



export const editarClient = async (client,id) => {
    try {
        await fetch(`${urlUpt}/${id}`,{
          method: 'PATCH',
          body: JSON.stringify(client),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      location.reload();
      } catch (error) {
        console.log(error);
      }
}





