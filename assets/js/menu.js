/*==================================================
            ROYAL XV PREMIUM
                MENU.JS
==================================================*/

function iniciarMenu(){

    const boton = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if(!boton || !menu) return;

    boton.addEventListener("click", () => {

        boton.classList.toggle("active");
        menu.classList.toggle("active");

    });

    const enlaces = menu.querySelectorAll("a");

    enlaces.forEach(enlace => {

        enlace.addEventListener("click", () => {

            boton.classList.remove("active");
            menu.classList.remove("active");

        });

    });

}