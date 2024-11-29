// ----------------Blogs Section----------------
const swiper = document.querySelector(".swiper");
const swipes = document.querySelectorAll(".swipe");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentswipe = 0;

function updateswiper() {
  swiper.style.transform = `translateX(-${currentswipe * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentswipe = (currentswipe + 1) % swipes.length;
  updateswiper();
});

prevBtn.addEventListener("click", () => {
  currentswipe = (currentswipe - 1 + swipes.length) % swipes.length;
  updateswiper();
});
// ----------------Blogs Section----------------

// ----------------Past Events Section----------------
const events = [
  { date: "12 Nov, 2024", title: "Gen AI Study Jam", image: "image/event-image.png" },
  { date: "13 Nov, 2024", title: "AI Conference", image: "image/event-image.png" },
  { date: "14 Nov, 2024", title: "Tech Meetup", image: "image/event-image.png" },
  { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
  { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
  { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
  { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
  { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
  { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
  { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
  { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
  { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
];

const carouselInner = document.querySelector(".carousel-inner");
const pastEventsPrevBtn = document.querySelector(".past-events-prev-btn");
const pastEventsNextBtn = document.querySelector(".past-events-next-btn");

let offset = 0;

function renderEvents() {
  carouselInner.innerHTML = "";
  events.forEach((event) => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
    eventDiv.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <p>${event.date}</p>
      <h3>${event.title}</h3>
    `;
    carouselInner.appendChild(eventDiv);
  });
}

function updateCarousel() {
  carouselInner.style.transform = `translateX(${offset}%)`;
}

pastEventsPrevBtn.addEventListener("click", () => {
  offset += 25;
  if (offset > 0) {
    offset = -(events.length - 1) * 25; // Loop back to the last slide
  }
  updateCarousel();
});

pastEventsNextBtn.addEventListener("click", () => {
  offset -= 25;
  if (offset < -(events.length - 1) * 25) {
    offset = 0; // Loop back to the first slide
  }
  updateCarousel();
});

renderEvents();
updateCarousel();
// ----------------Past Events Section----------------
