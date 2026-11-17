/*==================================================
            ROYAL XV PREMIUM
                RSVP.JS
==================================================*/

function iniciarRSVP(){

    const abrir = document.getElementById("btnWhatsapp");
    const modal = document.getElementById("rsvpModal");
    const cerrar = document.querySelector(".close-modal");
    const enviar = document.getElementById("sendWhatsapp");

    if(!abrir || !modal) return;

    abrir.addEventListener("click",(e)=>{

        e.preventDefault();

        modal.classList.add("show");

    });

    cerrar.addEventListener("click",()=>{

        modal.classList.remove("show");

    });

    modal.addEventListener("click",(e)=>{

        if(e.target===modal){

            modal.classList.remove("show");

        }

    });

    enviar.addEventListener("click",enviarWhatsapp);

}

/*==================================================
            ENVIAR
==================================================*/

function enviarWhatsapp(){

    const nombre=document.getElementById("guestName").value.trim();

    const personas=document.getElementById("guestPeople").value;

    const mensaje=document.getElementById("guestMessage").value.trim();

    if(nombre===""){

        alert("Por favor escribe tu nombre.");

        return;

    }

    let texto=`Hola 👋

Quiero confirmar mi asistencia a los XV años de ${CONFIG.nombre}.

👤 Nombre:
${nombre}

👥 Asistiremos:
${personas} persona(s)`;

    if(mensaje!==""){

        texto+=`

💌 Mensaje:
${mensaje}`;

    }

    texto+=`

¡Nos vemos ese día! 🎉`;

    const url=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;

    window.open(url,"_blank");

}
