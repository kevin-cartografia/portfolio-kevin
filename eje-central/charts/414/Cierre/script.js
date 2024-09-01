// Obtén el modal
var modal = document.getElementById("modal");

// Obtén el botón que abre el modal
var markers = document.querySelectorAll('.marker');

// Obtén el elemento <span> que cierra el modal
var span = document.querySelector(".close");

// Cuando el usuario haga clic en un marcador, abre el modal
markers.forEach(marker => {
    marker.onclick = function() {
        var popupId = this.getAttribute('data-popup');
        var popupContent = document.getElementById(popupId).innerHTML;
        document.getElementById('modal-text').innerHTML = popupContent;
        modal.style.display = "flex";
    }
});

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérralo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
