// Obtener referencia al contenedor y al mapa
const contenedor = document.getElementById('contenedor');
const mapa = document.getElementById('mapa');

// Agregar evento de clic al contenedor
contenedor.addEventListener('click', function(event) {
    // Obtener la posición horizontal y vertical del clic relativa al contenedor
    const clickX = event.clientX - contenedor.getBoundingClientRect().left;
    const clickY = event.clientY - contenedor.getBoundingClientRect().top;

    // Determinar si el clic está en los lados izquierdo o derecho del contenedor
    if (clickX < 100) { // Si el clic está cerca del lado izquierdo del contenedor
        contenedor.scrollLeft -= 100; // Desplazarse hacia la izquierda
    } else if (clickX > contenedor.offsetWidth - 100) { // Si el clic está cerca del lado derecho del contenedor
        contenedor.scrollLeft += 100; // Desplazarse hacia la derecha
    }

    // Determinar si el clic está en la parte superior o inferior del contenedor
    if (clickY < 100) { // Si el clic está cerca de la parte superior del contenedor
        contenedor.scrollTop -= 100; // Desplazarse hacia arriba
    } else if (clickY > contenedor.offsetHeight - 100) { // Si el clic está cerca de la parte inferior del contenedor
        contenedor.scrollTop += 100; // Desplazarse hacia abajo
    }
});

if(document.getElementById("puntosCardinales")){
    document.getElementById("puntosCardinales").addEventListener('click', () => {
        
        document.getElementById("mapOpen").style.display = "flex";

    });
}
if(document.getElementById("closeIcon")){
    document.getElementById("closeIcon").addEventListener('click', () => {
        
        document.getElementById("mapOpen").style.display = "none";

    });
}
