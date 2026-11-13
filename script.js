const boton = document.getElementById('boton-accion');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', function() {
    mensaje.textContent = '¡JavaScript y CSS están enlazados correctamente!';
    mensaje.style.color = '#28a745';
    mensaje.style.fontWeight = 'bold';
});
