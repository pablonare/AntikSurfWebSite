
let menuBoton = document.getElementById("menuBoton");
let menuCerrar = document.getElementById("menuCerrar");
let menuDesplegable = document.getElementById("menuDesplegable");
let menuLinks = document.querySelectorAll("#menuDesplegable a");
let hero = document.getElementById("hero");
let surfLessonsTrack = document.getElementById("surfLessonsTrack");
let surfLessonsPrev = document.getElementById("surfLessonsPrev");
let surfLessonsNext = document.getElementById("surfLessonsNext");

const imagenesHero = [
    'images/fondo.webp',
    'images/surflessons.jpg',
    'images/surfrentals.jpg',
    'images/surftrips.jpg'
];

let indiceImagen = 0;

function cerrarMenu() {
    if (!menuDesplegable) return;
    menuDesplegable.classList.remove("abierto");
    document.body.style.overflow = "auto";
}

function cambiarImagenHero() {
    if (!hero) return;

    indiceImagen = (indiceImagen + 1) % imagenesHero.length;
    hero.style.backgroundImage = `url('${imagenesHero[indiceImagen]}')`;
}

if (menuBoton && menuDesplegable) 
{
    menuBoton.addEventListener("click", () => {
        menuDesplegable.classList.toggle("abierto");
        document.body.style.overflow = menuDesplegable.classList.contains("abierto") ? "hidden" : "auto";
    });
}

if (menuCerrar && menuDesplegable) {
    menuCerrar.addEventListener("click", () => {
        cerrarMenu();
    });
}

if (menuLinks.length > 0) {
    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            cerrarMenu();
        });
    });
}

setInterval(cambiarImagenHero, 6000);

if (surfLessonsTrack && surfLessonsPrev && surfLessonsNext) {
    const slideCount = 3;
    let currentSlide = 0;

    function updateSurfLessonsSlide() {
        surfLessonsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    surfLessonsNext.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSurfLessonsSlide();
    });

    surfLessonsPrev.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSurfLessonsSlide();
    });
}

