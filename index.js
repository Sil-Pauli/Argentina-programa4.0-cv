const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const nombre2 = document.querySelector('#nombre2');


const generarUsuario = async()=>{
    try{
        const url = ' https://randomuser.me/api/ ';
        const respuesta = await fetch (url);
        const { results } = await respuesta.json();
        const datos = results[0];

        console.log(datos);
        foto.src =datos.picture.large;
        nombre.textContent = datos.name.first;
        apellido.textContent = datos.name.last;
        nombre2.textContent = datos.name.first;
    } catch (error){
        console.log(error);

    }
}
document.addEventListener('DOMContentLoaded', generarUsuario)