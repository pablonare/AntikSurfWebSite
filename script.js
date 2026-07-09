
let menuBoton = document.getElementById("menuBoton");
let menuCerrar = document.getElementById("menuCerrar");
let menuDesplegable = document.getElementById("menuDesplegable");
let menuLinks = document.querySelectorAll("#menuDesplegable a");
let surfLessonsTrack = document.getElementById("surfLessonsTrack");
let surfLessonsPrev = document.getElementById("surfLessonsPrev");
let surfLessonsNext = document.getElementById("surfLessonsNext");

function cerrarMenu() {
    if (!menuDesplegable) return;
    menuDesplegable.classList.remove("abierto");
    document.body.style.overflow = "auto";
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

