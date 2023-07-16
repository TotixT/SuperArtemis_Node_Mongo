const urlGet = "http://localhost:5000/categoria/all";
const urlGetId = "http://localhost:5000/categoria/one";
const urlAdd = "http://localhost:5000/categoria/add";
const urlDel = "http://localhost:5000/categoria/del";
const urlUpt = "http://localhost:5000/categoria/upt";


export const obtainCategories = async () => {
    try {
        const categorias = await fetch(urlGet);
        const datosCategorias = categorias.json();
        return datosCategorias;
    } catch (error) {
        console.log(error);
    }
}

export const nuevaCategoria = async (categoria) => {
    try {
        await fetch(`${urlAdd}/`,{
            method: "POST",
            body: JSON.stringify(categoria),
            headers:{
                'Content-Type':'application/json'
            }
        })
        location.reload();
    } catch (error) {
        console.log(error);
    }
}


export const deleteCategory = async (id) => {
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



export const obtenerCategory = async (id) => {
    try {
        const CategoryId = await fetch(`${urlGetId}/${id}`);
        const result = await CategoryId.json();
        return result;
      } catch (error) {
        console.log(error);
      }
}



export const editarCategory = async (category,id) => {
    try {
        await fetch(`${urlUpt}/${id}`,{
          method: 'PATCH',
          body: JSON.stringify(category),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      location.reload();
      } catch (error) {
        console.log(error);
      }
}





