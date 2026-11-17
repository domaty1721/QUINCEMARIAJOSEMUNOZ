/*==================================================
            ROYAL XV PREMIUM
                MUSIC.JS
==================================================*/

let reproduciendo = false;

function iniciarMusica() {

    const audio = document.getElementById("backgroundMusic");
    const boton = document.getElementById("musicPlayer");

    if (!audio || !boton) return;

    const icono = boton.querySelector("i");

    // Configuración inicial
    audio.volume = CONFIG.volumen ?? 0.5;
    audio.loop = true;

    boton.addEventListener("click", () => {

        if (reproduciendo) {

            audio.pause();

            reproduciendo = false;

            boton.classList.remove("playing");

            icono.classList.remove("fa-pause");
            icono.classList.add("fa-play");

        } else {

            audio.play().then(() => {

                reproduciendo = true;

                boton.classList.add("playing");

                icono.classList.remove("fa-play");
                icono.classList.add("fa-pause");

            }).catch(error => {

                console.error("No fue posible reproducir el audio:", error);

            });

        }

    });

    // Cuando termina el audio (si loop está desactivado)
    audio.addEventListener("ended", () => {

        reproduciendo = false;

        boton.classList.remove("playing");

        icono.classList.remove("fa-pause");
        icono.classList.add("fa-play");

    });

    // Autoplay opcional
    if (CONFIG.autoplay) {

        audio.play().then(() => {

            reproduciendo = true;

            boton.classList.add("playing");

            icono.classList.remove("fa-play");
            icono.classList.add("fa-pause");

        }).catch(() => {

            // El navegador bloqueó el autoplay.
            // Esperará al clic del usuario.

        });

    }

}

// Inicializar cuando cargue la página
document.addEventListener("DOMContentLoaded", iniciarMusica);