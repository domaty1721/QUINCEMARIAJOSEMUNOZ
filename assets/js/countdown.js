/*==================================================
            ROYAL XV PREMIUM
            COUNTDOWN.JS
==================================================*/

class Countdown{

    constructor(){

        this.days=$("#days");
        this.hours=$("#hours");
        this.minutes=$("#minutes");
        this.seconds=$("#seconds");

        this.target=new Date(CONFIG.fechaEvento).getTime();

        this.interval=null;

    }

    /*==========================================
                INICIAR
    ==========================================*/

    start(){

        this.update();

        this.interval=setInterval(()=>{

            this.update();

        },1000);

    }

    /*==========================================
                ACTUALIZAR
    ==========================================*/

    update(){

        const now=Date.now();

        const distance=this.target-now;

        if(distance<=0){

            this.finish();

            return;

        }

        const days=Math.floor(distance/86400000);

        const hours=Math.floor(

            (distance%86400000)/3600000

        );

        const minutes=Math.floor(

            (distance%3600000)/60000

        );

        const seconds=Math.floor(

            (distance%60000)/1000

        );

        this.animate(this.days,pad(days));

        this.animate(this.hours,pad(hours));

        this.animate(this.minutes,pad(minutes));

        this.animate(this.seconds,pad(seconds));

    }

    /*==========================================
                ANIMACIÓN
    ==========================================*/

    animate(element,value){

        if(!element) return;

        if(element.textContent!==value){

            element.classList.remove("flip");

            void element.offsetWidth;

            element.classList.add("flip");

            element.textContent=value;

        }

    }

    /*==========================================
                FINAL
    ==========================================*/

    finish(){

        clearInterval(this.interval);

        this.days.textContent="00";
        this.hours.textContent="00";
        this.minutes.textContent="00";
        this.seconds.textContent="00";

        document.dispatchEvent(

            new CustomEvent("countdownFinished")

        );

    }

}
/*==========================================
            INICIAR
==========================================*/

function iniciarCountdown(){

    if(!CONFIG.mostrarCountdown) return;

    const countdown=new Countdown();

    countdown.start();

}
