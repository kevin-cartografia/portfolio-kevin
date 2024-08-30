document.addEventListener("DOMContentLoaded", function() {
    const markers = document.querySelectorAll('.marker');

    markers.forEach(marker => {
        marker.addEventListener('mouseover', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);

            // Posicionar el popup cerca del marcador
            const markerRect = this.getBoundingClientRect();
            popup.style.top = `${markerRect.top - popup.offsetHeight}px`; // Arriba del marcador
            popup.style.left = `${markerRect.left + markerRect.width / 2}px`; // Centrado respecto al marcador

            popup.style.display = 'block';
        });

        marker.addEventListener('mouseout', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            popup.style.display = 'none';
        });
    });
});
