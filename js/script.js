
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
    if (menuBoton) {
        menuBoton.setAttribute("aria-expanded", "false");
    }
    document.body.style.overflow = "auto";
}

if (menuBoton && menuDesplegable) 
{
    menuBoton.addEventListener("click", () => {
        menuDesplegable.classList.toggle("abierto");
        menuBoton.setAttribute("aria-expanded", menuDesplegable.classList.contains("abierto") ? "true" : "false");
        document.body.style.overflow = "auto";
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

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuDesplegable && menuDesplegable.classList.contains("abierto")) {
        cerrarMenu();
    }
});

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

const accordionTitles = document.querySelectorAll(".surf-lessons-section .elementor-tab-title");

if (accordionTitles.length > 0) {
    accordionTitles.forEach((title) => {
        title.addEventListener("click", () => {
            const tabId = title.getAttribute("data-tab");
            const content = document.querySelector(`.surf-lessons-section .elementor-tab-content[data-tab=\"${tabId}\"]`);

            accordionTitles.forEach((item) => {
                item.classList.remove("elementor-active");
                item.setAttribute("aria-expanded", "false");
                item.setAttribute("aria-selected", "false");
            });

            document.querySelectorAll(".surf-lessons-section .elementor-tab-content").forEach((panel) => {
                panel.classList.remove("elementor-active");
                panel.style.display = "none";
            });

            title.classList.add("elementor-active");
            title.setAttribute("aria-expanded", "true");
            title.setAttribute("aria-selected", "true");

            if (content) {
                content.classList.add("elementor-active");
                content.style.display = "block";
            }
        });
    });
}

