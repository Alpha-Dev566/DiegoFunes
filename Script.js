// === FORMULARIO ===
const form = document.getElementById('formularioContacto');
const mensajeExito = document.getElementById('mensajeExito');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // evita recarga de la página

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.reset();
            form.style.display = "none";
            mensajeExito.style.display = "block"; // mostramos mensaje de éxito
        } else {
            alert("⚠️ Ocurrió un error al enviar el mensaje. Intenta de nuevo.");
        }
    } catch (error) {
        alert("❌ Error de conexión, revisa tu internet.");
    }
});

// === BOTÓN INTERESANTE ===
function accion() {
    console.log('Está funcionando mi botón');
    var mensaje = document.getElementById('mensajeAgradecimiento');
    var formulario = document.getElementById('formularioContacto');
    
    // Alterna la visibilidad
    if (mensaje.style.display === 'none' || mensaje.style.display === '') {
        mensaje.style.display = 'block'; 
        formulario.style.display = 'block'; 
    } else {
        mensaje.style.display = 'none'; 
        formulario.style.display = 'none';
    }
}
