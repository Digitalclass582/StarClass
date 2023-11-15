let botonFormulario=document.getElementById("botonlogin")
botonFormulario.addEventListener("click",function(){
    let usuario=document.getElementById("correo")
    let contrasena=document.getElementById("password")

    setTimeout(function(){ window.location.href="./index.html"
},2000)
Swal.fire({
    title: "BIENVENIDO " +usuario.value,
    icon: "success"
  })
})
let botonGoogle=document.getElementById("botongoogle")
botonGoogle.addEventListener("click",function(){
    setTimeout(function(){ window.location.href="https://www.google.com/intl/es-419/gmail/about/"
},1000)
})
