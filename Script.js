/*Formulario*/ 
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Formulario enviado con éxito!');
});

function accion() {
    console.log('Está funcionando mi botón');
    var mensaje = document.getElementById('mensajeAgradecimiento');
    var formulario = document.getElementById('formularioContacto');
    
    /*Alterna la visibilidad del mensaje*/
    if (mensaje.style.display === 'none' || mensaje.style.display === '') {
        mensaje.style.display = 'block'; 
        formulario.style.display = 'block'; 
    } else {
        mensaje.style.display = 'none'; 
        formulario.style.display = 'none';
    }
}
