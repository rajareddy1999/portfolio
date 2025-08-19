document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const menu_bar = document.querySelector('.navbar-menu .menu-bar');

    // Toggle on click
    hamburger.addEventListener('click', () => {
        console.log("Hamburger clicked!");
        menu_bar.classList.toggle('show');
    });

    // Reset on desktop resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            menu_bar.classList.remove('show');
        }
    });
});
