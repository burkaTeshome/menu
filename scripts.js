document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('show');
        this.classList.toggle('active'); // Toggles active state for hamburger icon
    });

    const menuItems = menu.querySelectorAll('li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menu.classList.remove('show'); // Hide the menu
            hamburger.classList.remove('active'); // Reset hamburger state
        });
    });
});
