// NAVIGATION BAR //
// const menubar = document.querySelector('#menubar');
// const sidebar = document.querySelector('.sidebar');
// const closeIcon = sidebar.querySelector('#closeBtn');

// // menubar.addEventListener('click', () => {
// //     sidebar.style.display = 'flex';
// // });
// menubar.addEventListener('click', () => {
//     sidebar.style.display = 'flex';
//     // sidebar.style.right = '0'; // Ensure it's visible
// });


// closeIcon.addEventListener('click', () => {
//     sidebar.style.display = 'none';
// });

// const navLinks = document.querySelectorAll('nav li a');

// navLinks.forEach(link => {
//     link.addEventListener('click', function () {
//         navLinks.forEach(nav => nav.classList.remove('active')); 
//         this.classList.add('active'); 
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded, script running!"); // Debugging message

    const menubar = document.querySelector('#menubar');
    const sidebar = document.querySelector('.sidebar');
    const closeIcon = document.querySelector('#closeBtn');

    if (!menubar || !sidebar || !closeIcon) {
        console.error("One or more elements are missing!");
        return;
    }

    menubar.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Hamburger menu clicked"); // Debugging message
        sidebar.classList.toggle('active');
    });

    closeIcon.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Close button clicked"); // Debugging message
        sidebar.classList.remove('active');
    });

    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && event.target !== menubar) {
            console.log("Clicked outside, closing sidebar");
            sidebar.classList.remove('active');
        }
    });
});







// SLIDER //
const sliders = document.querySelectorAll(".slider-container");

sliders.forEach((slider) => {
    const carousel = slider.querySelector(".cards-wrapper");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = slider.querySelectorAll(".arrow");
    const carouselChildrens = [...carousel.children];

    let isDragging = false, startX, startScrollLeft;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
});
// ----------------------Toggle Button-----------------------
let lightMode = localStorage.getItem('lightMode');
const modeSwitch = document.querySelector('.mode-icon');

const enableLightmode = () => {
    document.body.classList.add('lightMode');
    localStorage.setItem('lightMode','active');
};

const disableLightmode = () => {
    document.body.classList.remove('lightMode');
    localStorage.removeItem('lightMode');
};

if(lightMode === "active") enableLightmode();

modeSwitch.addEventListener("click", () => {
    lightMode = localStorage.getItem('lightMode');
    lightMode !== "active" ? enableLightmode() : disableLightmode();
});



// ----------------------Toggle Button-----------------------
