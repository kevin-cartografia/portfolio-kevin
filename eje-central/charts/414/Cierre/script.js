// Obtén el modal
var modal = document.getElementById("modal");

// Obtén el botón que abre el modal
var markers = document.querySelectorAll('.marker');

// Obtén el elemento <span> que cierra el modal
var span = document.querySelector(".close");

// Variable para rastrear el índice del marker actual
var currentMarkerIndex = 0;

// Función para iniciar la animación en el marker
function startAnimation(marker) {
    marker.classList.add('active');
}

// Función para detener la animación en el marker
function stopAnimation(marker) {
    marker.classList.remove('active');
}

// Función para mostrar el modal
function showModal(marker, popupId) {
    stopAnimation(marker);
    var popupContent = document.getElementById(popupId).innerHTML;
    document.getElementById('modal-text').innerHTML = popupContent;
    modal.style.display = "flex";

    // Configurar el cierre del modal
    span.onclick = function() {
        modal.style.display = "none";
        currentMarkerIndex++;
        if (currentMarkerIndex < markers.length) {
            startAnimation(markers[currentMarkerIndex]);
        }
    };

    // Cerrar el modal al hacer clic fuera de él
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            currentMarkerIndex++;
            if (currentMarkerIndex < markers.length) {
                startAnimation(markers[currentMarkerIndex]);
            }
        }
    };
}

// Empezar la animación en el primer marker al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    if (markers.length > 0) {
        startAnimation(markers[currentMarkerIndex]);
    }

    markers.forEach(marker => {
        marker.onclick = function() {
            var popupId = this.getAttribute('data-popup');
            showModal(marker, popupId);
        };
    });
});
