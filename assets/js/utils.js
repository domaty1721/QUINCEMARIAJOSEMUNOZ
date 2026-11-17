/*==================================================
            ROYAL XV PREMIUM
                UTILS.JS
==================================================*/

/*==========================================
            SELECTORES
==========================================*/

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);


/*==========================================
            RANDOM
==========================================*/

function random(min,max){

    return Math.random()*(max-min)+min;

}


/*==========================================
            ENTERO
==========================================*/

function randomInt(min,max){

    return Math.floor(random(min,max));

}


/*==========================================
            ESPERAR
==========================================*/

function wait(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}


/*==========================================
            CREAR
==========================================*/

function create(tag,clase=""){

    const element=document.createElement(tag);

    if(clase) element.className=clase;

    return element;

}


/*==========================================
            SCROLL
==========================================*/

function smoothScroll(target){

    document.querySelector(target).scrollIntoView({

        behavior:"smooth"

    });

}


/*==========================================
            FORMATO
==========================================*/

function pad(num){

    return String(num).padStart(2,"0");

}


/*==========================================
            VISIBILIDAD
==========================================*/

function isVisible(element){

    const rect=element.getBoundingClientRect();

    return(

        rect.top<window.innerHeight &&

        rect.bottom>0

    );

}