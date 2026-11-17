const slider = document.querySelector(".gallery-slider");

document.querySelector(".next").onclick = () => {

    slider.scrollBy({
        left:380,
        behavior:"smooth"
    });

};

document.querySelector(".prev").onclick = () => {

    slider.scrollBy({
        left:-380,
        behavior:"smooth"
    });

};