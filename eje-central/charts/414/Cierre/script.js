document.addEventListener("DOMContentLoaded", function() {
    const markers = document.querySelectorAll('.marker');

    markers.forEach(marker => {
        marker.addEventListener('mouseover', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            popup.style.display = 'block';
        });

        marker.addEventListener('mouseout', function() {
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            popup.style.display = 'none';
        });
    });
});
