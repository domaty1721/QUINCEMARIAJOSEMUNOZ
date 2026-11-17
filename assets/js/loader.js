/*==================================================
            ROYAL XV PREMIUM
              LOADER.JS
==================================================*/

class Loader{

    constructor(){

        this.loader=$("#loader");

        this.progress=$("#loader-progress");

        this.percent=$("#loader-percent");

        this.images=[...document.images];

        this.loaded=0;

        this.total=this.images.length;

    }

    /*==========================================
                INICIAR
    ==========================================*/

    async init(){

        await this.preloadImages();

        await this.openEnvelope();

        await this.showLetter();

        await this.showPhoto();

        await this.finish();

    }

    /*==========================================
                PRECARGAR
    ==========================================*/

    preloadImages(){

        return new Promise(resolve=>{

            if(this.total===0){

                this.update(100);

                resolve();

                return;

            }

            this.images.forEach(img=>{

                if(img.complete){

                    this.imageLoaded(resolve);

                }else{

                    img.addEventListener("load",()=>{

                        this.imageLoaded(resolve);

                    });

                    img.addEventListener("error",()=>{

                        this.imageLoaded(resolve);

                    });

                }

            });

        });

    }

    imageLoaded(resolve){

        this.loaded++;

        const percent=Math.round(

            (this.loaded/this.total)*100

        );

        this.update(percent);

        if(this.loaded>=this.total){

            resolve();

        }

    }

    /*==========================================
                PROGRESO
    ==========================================*/

    update(value){

        if(this.progress){

            this.progress.style.width=value+"%";
        }

        if(this.percent){

            this.percent.textContent=value+"%";
        }

    }

    /*==========================================
                SOBRE
    ==========================================*/

    async openEnvelope(){

        const envelope=$(".envelope");

        if(envelope){

            envelope.classList.add("open");
        }

        await wait(1200);

    }

    /*==========================================
                CARTA
    ==========================================*/

    async showLetter(){

        const letter=$(".letter");

        if(letter){

            letter.classList.add("show");
        }

        await wait(1200);

    }

    /*==========================================
                FOTO
    ==========================================*/

    async showPhoto(){

        const photo=$("#foto-loader");

        if(photo){

            photo.classList.add("visible");
        }

        await wait(1000);

    }

    /*==========================================
                FINALIZAR
    ==========================================*/

    async finish(){

        this.loader.classList.add("hide");

        await wait(900);

        this.loader.remove();

        document.body.classList.add("loaded");

        document.dispatchEvent(

            new CustomEvent("loaderFinished")

        );

    }

}
/*==========================================
            INICIAR
==========================================*/

function iniciarLoader(){

    const loader=new Loader();

    loader.init();

}
