/*==================================================
            ROYAL XV PREMIUM
                SCROLL.JS
==================================================*/

function iniciarScroll(){

    scrollSuave();

    revealScroll();

    botonSuperior();

    barraProgreso();

    menuActivo();

    navbarScroll();

}
/*==================================================
            SCROLL SUAVE
==================================================*/

function scrollSuave(){

    const enlaces=document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(enlace=>{

        enlace.addEventListener("click",e=>{

            e.preventDefault();

            const destino=document.querySelector(

                enlace.getAttribute("href")

            );

            if(destino){

                destino.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });

}
/*==================================================
                REVEAL
==================================================*/

function revealScroll(){

    const elementos=document.querySelectorAll(".reveal");

    if(!elementos.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:.15

    });

    elementos.forEach(item=>{

        observer.observe(item);

    });

}
/*==================================================
            BOTÓN SUPERIOR
==================================================*/

function botonSuperior(){

    const boton=document.getElementById("btnTop");

    if(!boton) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            boton.classList.add("show");

        }else{

            boton.classList.remove("show");

        }

    });

    boton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
/*==================================================
            BARRA PROGRESO
==================================================*/

function barraProgreso(){

    const barra=document.getElementById("scrollProgress");

    if(!barra) return;

    window.addEventListener("scroll",()=>{

        const scroll=

        document.documentElement.scrollTop;

        const altura=

        document.documentElement.scrollHeight-

        document.documentElement.clientHeight;

        const porcentaje=

        (scroll/altura)*100;

        barra.style.width=porcentaje+"%";

    });

}
/*==================================================
                MENÚ
==================================================*/

function menuActivo(){

    const secciones=document.querySelectorAll("section");

    const links=document.querySelectorAll(".menu a");

    if(!links.length) return;

    window.addEventListener("scroll",()=>{

        let actual="";

        secciones.forEach(sec=>{

            const top=sec.offsetTop-150;

            const height=sec.offsetHeight;

            if(pageYOffset>=top &&

               pageYOffset<top+height){

                actual=sec.getAttribute("id");

            }

        });

        links.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+actual){

                link.classList.add("active");

            }

        });

    });

}
/*==================================================
                NAVBAR
==================================================*/

function navbarScroll(){

    const nav=document.querySelector("header");

    if(!nav) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>60){

            nav.classList.add("scrolled");

        }else{

            nav.classList.remove("scrolled");

        }

    });

}
