// Selecciona el modal
var modal = document.getElementById("modal");

// Selecciona el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Selecciona todos los marcadores
var markers = document.querySelectorAll('.marker');

// Añade eventos de clic a los marcadores para mostrar el modal con su contenido
markers.forEach(function(marker) {
    marker.onclick = function() {
        var popupId = this.getAttribute('data-popup');
        var popupContent = document.getElementById(popupId).innerHTML;
        document.getElementById("modal-text").innerHTML = popupContent;
        modal.style.display = "block";
    }
});

// Cuando el usuario hace clic en <span> (la "X"), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del contenido del modal, cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
