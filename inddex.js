function saludar(){
    alert('a');
}

// Importar la biblioteca

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const imageWrapper = document.querySelector(".image-wrapper");
const images = document.querySelectorAll(".image-wrapper img");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

function updateSlider() {
    const imageWidth = images[currentIndex].offsetWidth;
    const translateValue = -currentIndex * imageWidth;
    imageWrapper.style.transform = `translateX(${translateValue}px)`;

    images.forEach((img, i) => {
        if (i === currentIndex) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    });
}


window.addEventListener("resize", updateSlider);
updateSlider();

//=ACCIONES PARA EL FORMULARIO=\\


