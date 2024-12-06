// NAVIGATION BAR //
const menubar = document.querySelector('#menubar');
const sidebar = document.querySelector('.sidebar');
const closeIcon = sidebar.querySelector('#closeBtn');

menubar.addEventListener('click', () => {
    sidebar.style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
    sidebar.style.display = 'none';
});

const navLinks = document.querySelectorAll('nav li a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active')); 
        this.classList.add('active'); 
    });
});


// ----------------Blogs Section----------------
const swiper = document.querySelector(".swiper");
const swipes = document.querySelectorAll(".swipe");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const eachFaqs = document.querySelectorAll(".each-faq");

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


  var x=0;
  var img1=document.getElementById('logo1');
  var img2=document.getElementById('logo2');
  var img3=document.getElementById('logo3');
  var img4=document.getElementById('logo4');
  var nav=document.getElementById('nav-img');
  var foot=document.getElementById('foot');
function changeImg(){

  if(x==0){
    img1.src='/image/Group 8.0.png';
    img2.src='/image/Group 12.0.png';
    img3.src='/image/Frame 88.0.png';
    img4.src='/image/Group 11.0.png';
    nav.src='/image/Group 3.0.png'
    foot.src='/image/footer.png'


        x=1;
  }
  else{
    img1.src='/image/Group 8.png';
    img2.src='/image/Group 12.png';
    img3.src='/image/Frame 88.png';
    img4.src='/image/Group 11.png';
    nav.src='/image/Group 3.png';
    foot.src='/image/footer.0.png'
        x=0;
  }
}



// function changeImg() {
//   var img = document.getElementById('nav-img').src;
//   if (img.indexOf('/images/Group 3.0.png')!=-1) {
//      document.getElementById('nav-img').src = '/image/Group 3.png';
//   } else {
//      document.getElementById('nav-img').src = '/images/Group 3.0.png';
//   }
// }
// ----------------------Toggle Button-----------------------


// ----------------Past Events Section----------------
// const events = [
//   { date: "12 Nov, 2024", title: "Gen AI Study Jam", image: "image/event-image.png" },
//   { date: "13 Nov, 2024", title: "AI Conference", image: "image/event-image.png" },
//   { date: "14 Nov, 2024", title: "Tech Meetup", image: "image/event-image.png" },
//   { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
//   { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
//   { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
//   { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
//   { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
//   { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
//   { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
//   { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
//   { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
// ];

// const carouselInner = document.querySelector(".carousel-inner");
// const pastEventsPrevBtn = document.querySelector(".past-events-prev-btn");
// const pastEventsNextBtn = document.querySelector(".past-events-next-btn");

// let offset = 0;

// function renderEvents() {
//   carouselInner.innerHTML = "";
//   events.forEach((event) => {
//     const eventDiv = document.createElement("div");
//     eventDiv.classList.add("event");
//     eventDiv.innerHTML = `
//       <img src="${event.image}" alt="${event.title}">
//       <p>${event.date}</p>
//       <h3>${event.title}</h3>
//     `;
//     carouselInner.appendChild(eventDiv);
//   });
// }

// function updateCarousel() {
//   carouselInner.style.transform = `translateX(${offset}%)`;
// }

// pastEventsPrevBtn.addEventListener("click", () => {
//   offset += 25;
//   if (offset > 0) {
//     offset = -(events.length - 1) * 25; // Loop back to the last slide
//   }
//   updateCarousel();
// });

// pastEventsNextBtn.addEventListener("click", () => {
//   offset -= 25;
//   if (offset < -(events.length - 1) * 25) {
//     offset = 0; // Loop back to the first slide
//   }
//   updateCarousel();
// });

// renderEvents();
// updateCarousel();

const events = [
  { date: "12 Nov, 2024", title: "Gen AI Study Jam", image: "image/event-image.png" },
  { date: "13 Nov, 2024", title: "AI Conference", image: "image/event-image.png" },
  { date: "14 Nov, 2024", title: "Tech Meetup", image: "image/event-image.png" },
  { date: "15 Nov, 2024", title: "Developer Summit", image: "image/event-image.png" },
  { date: "16 Nov, 2024", title: "Innovation Fest", image: "image/event-image.png" },
  { date: "17 Nov, 2024", title: "Coding Bootcamp", image: "image/event-image.png" },
  { date: "18 Nov, 2024", title: "Hackathon Finale", image: "image/event-image.png" },
  { date: "19 Nov, 2024", title: "AI Workshop", image: "image/event-image.png" },
];

const carouselInner = document.querySelector(".carousel-inner");
const pastEventsPrevBtn = document.querySelector(".past-events-prev-btn");
const pastEventsNextBtn = document.querySelector(".past-events-next-btn");

let offset = 0;

// Get the number of visible slides based on screen size
function getVisibleSlides() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 450) return 1; // Full-width slides on small screens
  if (screenWidth <= 780) return 2; // Half-width slides on medium screens
  return 4; // Default to 4 slides on larger screens
}

// Render the events inside the carousel
function renderEvents() {
  carouselInner.innerHTML = ""; // Clear existing content
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

// Update the carousel's transform and adjust slide widths
function updateCarousel() {
  const visibleSlides = getVisibleSlides();
  const slideWidth = 100 / visibleSlides; // Calculate slide width as percentage

  carouselInner.style.transform = `translateX(${offset}%)`;

  // Adjust slide widths dynamically
  const allEvents = document.querySelectorAll(".event");
  allEvents.forEach((event) => {
    event.style.minWidth = `${slideWidth}%`;
  });
}

// Handle the "Previous" button click
pastEventsPrevBtn.addEventListener("click", () => {
  const visibleSlides = getVisibleSlides();
  const slideWidth = 100 / visibleSlides;
  offset += slideWidth;
  if (offset > 0) {
    offset = -(events.length - visibleSlides) * slideWidth; // Loop back to the last slide
  }
  updateCarousel();
});

// Handle the "Next" button click
pastEventsNextBtn.addEventListener("click", () => {
  const visibleSlides = getVisibleSlides();
  const slideWidth = 100 / visibleSlides;
  offset -= slideWidth;
  if (offset < -(events.length - visibleSlides) * slideWidth) {
    offset = 0; // Loop back to the first slide
  }
  updateCarousel();
});

// Update the carousel on window resize
window.addEventListener("resize", () => {
  offset = 0; // Reset offset when resizing
  updateCarousel();
});

// Initial render and update
renderEvents();
updateCarousel();

// ----------------Past Events Section----------------










// ------------------------------FAQ Section---------------------
eachFaqs.forEach(eachFaq => {
  eachFaq.addEventListener('click', () => {
    const answer = eachFaq.querySelector('.answer');
    const icon = eachFaq.querySelector('.question img');
    answer.classList.toggle('active');
    icon.src = answer.classList.contains('active') 
      ? "https://img.icons8.com/android/24/228BE6/minus.png" 
      : "https://img.icons8.com/fluency-systems-filled/50/228BE6/plus-math.png";
  })
})

function loadLoadingScreen() {
  fetch('loading.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('loading-placeholder').innerHTML = data;
          // Add the loading screen styles
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'loading.css';
          document.head.appendChild(link);
      })
      .catch(error => console.error('Error loading loading screen:', error));
}

// Show main content and hide the loading screen after loading
window.onload = function () {
  // Load the loading screen
  loadLoadingScreen();

  // Simulate loading delay (optional)
  setTimeout(() => {
      // Hide the loading screen
      document.getElementById('loading-placeholder').style.display = 'none';

      // Show the main content
      document.getElementById('main-content').style.display = 'block';
  }, 2000); // Adjust the delay as needed
};


