let saludo=document.getElementById("saludo")
console.log(saludo)
let boton=document.querySelector("#boton")

boton.addEventListener('click',mostrarMensaje)

function mostrarMensaje(){
    console.log(saludo.textContent)
    if(saludo.textContent=="AndresWeb"){
        saludo.textContent="Bienvenidos"
    }else{
        saludo.textContent="AndresWeb"
    }
}