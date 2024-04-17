document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleButton');
    updateButton();

    button.addEventListener('click', function() {
        const currentBuyer = localStorage.getItem('lastBuyer');
        const nextBuyer = currentBuyer === 'Kuba' ? 'Janek' : 'Kuba';
        localStorage.setItem('lastBuyer', nextBuyer);
        updateButton();
    });

    function updateButton() {
        const lastBuyer = localStorage.getItem('lastBuyer') || 'Kuba';
        button.textContent = `Teraz kupuje: ${lastBuyer}`;
    }
});
