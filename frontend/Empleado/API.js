const urlGet = "http://localhost:5000/empleado/all";
const urlGetId = "http://localhost:5000/empleado/one";
const urlAdd = "http://localhost:5000/empleado/add";
const urlDel = "http://localhost:5000/empleado/del";
const urlUpt = "http://localhost:5000/empleado/upt";


export const obtainEmpleados = async () => {
    try {
        const empleados = await fetch(urlGet);
        const datosEmpleados = empleados.json();
        return datosEmpleados;
    } catch (error) {
        console.log(error);
    }
}

export const nuevoEmpleado = async (empleado) => {
    try {
        await fetch(`${urlAdd}/`,{
            method: "POST",
            body: JSON.stringify(empleado),
            headers:{
                'Content-Type':'application/json'
            }
        })
        location.reload();
    } catch (error) {
        console.log(error);
    }
}


export const deleteEmpleado = async (id) => {
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



export const obtenerEmpleado = async (id) => {
    try {
        const EmpleadoId = await fetch(`${urlGetId}/${id}`);
        const result = await EmpleadoId.json();
        return result;
      } catch (error) {
        console.log(error);
      }
}



export const editarEmpleado = async (employee,id) => {
    try {
        await fetch(`${urlUpt}/${id}`,{
          method: 'PATCH',
          body: JSON.stringify(employee),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      location.reload();
      } catch (error) {
        console.log(error);
      }
}





