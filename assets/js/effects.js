/*==================================================
            ROYAL XV PREMIUM
            EFFECTS.JS
==================================================*/

let effectsAnimation;

/*==================================================
            INICIAR
==================================================*/

function iniciarEffects(){

    if(CONFIG.petalos){

        crearPetalos();

    }

    if(CONFIG.destellos){

        crearDestellos();

    }

    if(CONFIG.particulas){

        crearParticulas();

    }

    if(CONFIG.mariposas){

        crearMariposas();

    }

    if(CONFIG.bokeh){

        crearBokeh();

    }

}
/*==================================================
                PÉTALOS
==================================================*/

function crearPetalos(){

    const contenedor=document.getElementById("petals");

    if(!contenedor) return;

    for(let i=0;i<25;i++){

        const petalo=document.createElement("span");

        petalo.className="petal";

        petalo.style.left=Math.random()*100+"vw";

        petalo.style.animationDelay=Math.random()*12+"s";

        petalo.style.animationDuration=

        8+Math.random()*6+"s";

        petalo.style.opacity=

        .3+Math.random()*.7;

        petalo.style.transform=

        `scale(${0.5+Math.random()})`;

        contenedor.appendChild(petalo);

    }

}
/*==================================================
                DESTELLOS
==================================================*/

function crearDestellos(){

    const fondo=document.querySelector(".sparkles");

    if(!fondo) return;

    for(let i=0;i<40;i++){

        const star=document.createElement("span");

        star.className="sparkle";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=Math.random()*5+"s";

        fondo.appendChild(star);

    }

}
/*==================================================
                PARTÍCULAS
==================================================*/

function crearParticulas(){

    const hero=document.querySelector(".hero");

    if(!hero) return;

    for(let i=0;i<35;i++){

        const p=document.createElement("span");

        p.className="particle";

        p.style.left=Math.random()*100+"%";

        p.style.top=Math.random()*100+"%";

        p.style.animationDelay=Math.random()*8+"s";

        hero.appendChild(p);

    }

}
/*==================================================
                MARIPOSAS
==================================================*/

function crearMariposas(){

    const body=document.body;

    for(let i=0;i<4;i++){

        const butterfly=document.createElement("div");

        butterfly.className="butterfly";

        butterfly.innerHTML="🦋";

        butterfly.style.left=Math.random()*100+"vw";

        butterfly.style.top=Math.random()*100+"vh";

        butterfly.style.animationDelay=

        i*4+"s";

        body.appendChild(butterfly);

    }

}
/*==================================================
                BOKEH
==================================================*/

function crearBokeh(){

    const hero=document.querySelector(".hero");

    if(!hero) return;

    for(let i=0;i<18;i++){

        const bokeh=document.createElement("span");

        bokeh.className="bokeh";

        bokeh.style.left=Math.random()*100+"%";

        bokeh.style.top=Math.random()*100+"%";

        bokeh.style.width=

        20+Math.random()*80+"px";

        bokeh.style.height=

        bokeh.style.width;

        bokeh.style.animationDelay=

        Math.random()*10+"s";

        hero.appendChild(bokeh);

    }

}
/*==================================================
            VIENTO
==================================================*/

window.addEventListener("mousemove",(e)=>{

    const petalos=document.querySelectorAll(".petal");

    const fuerza=(e.clientX/window.innerWidth)-0.5;

    petalos.forEach(p=>{

        p.style.transform=

        `translateX(${fuerza*20}px)`;

    });

});
/*==================================================
            LIMPIEZA
==================================================*/

window.addEventListener("beforeunload",()=>{

    cancelAnimationFrame(effectsAnimation);

});
