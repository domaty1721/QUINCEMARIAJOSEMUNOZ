/*==================================================
            ROYAL XV PREMIUM
                APP.JS
==================================================*/

document.addEventListener("DOMContentLoaded", iniciarAplicacion);

/*==================================================
            APP
==================================================*/
function iniciarAplicacion(){

    window.scrollTo(0, 0);

    aplicarConfiguracion();

    iniciarModulos();
    history.scrollRestoration = "manual";
window.scrollTo(0, 0);

}

/*==================================================
            CONFIG
==================================================*/

function aplicarConfiguracion(){

    /*==============================
            FOTO LOADER
    ==============================*/

    const fotoLoader=document.getElementById("foto-loader");

    if(fotoLoader){

        fotoLoader.src=CONFIG.fotoLoader;

    }
/*==============================
        PADRES
==============================*/

const padre = document.getElementById("nombrePadre");

if (padre) {
    padre.textContent = CONFIG.padre;
}

const madre = document.getElementById("nombreMadre");

if (madre) {
    madre.textContent = CONFIG.madre;
}
    /*==============================
            HERO
    ==============================*/

    const hero=document.querySelector(".hero-photo img");

    if(hero){

        hero.src=CONFIG.fotoPrincipal;

    }

    /*==============================
            NOMBRE
    ==============================*/

    const nombre=document.querySelectorAll(".nombreXV");

    nombre.forEach(item=>{

        item.textContent=CONFIG.nombre;

    });

    /*==============================
            AUDIO
    ==============================*/

    const audio=document.getElementById("backgroundMusic");

    if(audio){

        audio.src=CONFIG.musica;

        audio.volume=CONFIG.volumen;

    }

}

/*==================================================
            MÓDULOS
==================================================*/

function iniciarModulos(){

    if(typeof iniciarLoader==="function"){

        iniciarLoader();

    }

    if(typeof iniciarCountdown==="function"){

        iniciarCountdown();

    }

    if(typeof iniciarMusica==="function"){

        iniciarMusica();

    }

    if(typeof iniciarGaleria==="function"){

        iniciarGaleria();

    }

    if(typeof iniciarScroll==="function"){

        iniciarScroll();

    }

    if(typeof iniciarRSVP==="function"){

        iniciarRSVP();

    }

    if(typeof iniciarEffects==="function"){

        iniciarEffects();

    }

}