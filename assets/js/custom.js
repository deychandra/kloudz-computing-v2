// Sticky-header
$(document).ready(function () {
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 15) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

const hamburger = document.querySelector('.toggle-hamburger');
hamburger.addEventListener('click', function () {
  header.classList.toggle('open_nav');
});

});

const container = document.querySelector('.parallax-container');
if (container) {
       const item = container.querySelector('.it-solution');

       container.addEventListener('mousemove', (e) => {
              const rect = container.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 1;
              const y = e.clientY - rect.top - rect.height / 2;

              const rotateX = (-y / 20).toFixed(100);
              const rotateY = (x / 20).toFixed(5);

              item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
       });

       container.addEventListener('mouseleave', () => {
              item.style.transform = 'rotateX(0deg) rotateY(0deg)';
       });
}


// Hover-image
const listItems = document.querySelectorAll('.serve-row-container .serve-row');
const firstLi = document.getElementById('firstList');

listItems.forEach((serveRow, index) => {
       if (index === 0) return;

       serveRow.addEventListener('mouseenter', () => {
              firstLi.classList.add('active-style');
       });

       serveRow.addEventListener('mouseleave', () => {
              firstLi.classList.remove('active-style');
       });
});
// Hover-image



$(document).ready(function () {
       var owl = $(".customer-review .owl-carousel");
       owl.owlCarousel({
              items: 1,
              loop: true,
              margin: 10,
              dots: false,
              nav: false,
              autoplay: false,
              autoplayTimeout: 5000,
              autoplayHoverPause: true
       });

       $('#customPrev').click(function () {
              owl.trigger('prev.owl.carousel');
       });

       $('#customNext').click(function () {
              owl.trigger('next.owl.carousel');
       });
});



// why-choose-kloudz
$(document).ready(function(){
       $(".why-choose-kloudz .owl-carousel").owlCarousel({
         loop: true,
         margin: 30,
         nav: false,
         dots: false,
         autoplay: false,
         autoplayTimeout: 3000,
         responsive: {
           0: {
             items: 1
           },
           768: {
             items: 2
           },
           1024: {
             items: 3
           }
         }
       });
     });


// why-choose-kloudz

// Our-Services-slider
$(document).ready(function () {
       const services = [
              {
                     title: "Mobile Development",
                     description: "Mobile Computing Devices End-To-End Mobile App Development To Boost Brand Identity. Enhance User Experience, Build Cross-Platform Applications, And Create Intuitive Mobile Solutions.",
                     image: "assets/images/mobile-development.png"
              },
              {
                     title: "Software Development",
                     description: "Custom software solutions tailored to your business needs. We develop scalable, secure, and efficient software applications that drive innovation and growth.",
                     image: "assets/images/mobile-development.png"
              },
              {
                     title: "UI UX Design",
                     description: "Creating beautiful, intuitive interfaces that enhance user experience. Our design team focuses on usability, accessibility, and visual appeal to create memorable digital experiences.",
                     image: "assets/images/mobile-development.png"
              },
              {
                     title: "Android Application",
                     description: "Specialized in developing high-performance Android applications. From concept to launch, we create Android apps that leverage the full potential of the platform.",
                     image: "assets/images/mobile-development.png"
              },
       ];

       const mainContent = document.querySelector('.main-content');
       const progressBar = document.querySelector('.progress-bar');
       let currentIndex = 0;
       const totalServices = services.length;

       $('.owl-carousel').owlCarousel({
              loop: true,
              margin: 0,
              nav: false,
              items: 3.5,
              dots: false,
              mouseDrag: false,
       });

       function updateProgressBar() {
              if (progressBar) {
                     const progress = ((currentIndex + 1) / totalServices) * 100;
                     progressBar.style.width = `${progress}%`;
              }
       }
       function updateContent(index) {
              if (!mainContent) return;

              mainContent.classList.remove('slide-in');
              void mainContent.offsetWidth;
              mainContent.innerHTML = `
            <div class="service-info">
                <h3>${services[index].title}</h3>
                <p>${services[index].description}</p>
            </div>
            <div class="service-img">
                <img src="${services[index].image}" alt="${services[index].title}">
            </div>
        `;
              mainContent.classList.add('slide-in');

              updateProgressBar();
       }
       $('.service-card').click(function () {
              const index = $(this).data('index');
              currentIndex = index;
              updateContent(currentIndex);
       });
       $('.next').click(function () {
              $('.owl-carousel').trigger('next.owl.carousel');
              currentIndex = (currentIndex + 1) % totalServices;
              updateContent(currentIndex);
       });
       $('.prev').click(function () {
              $('.owl-carousel').trigger('prev.owl.carousel');
              currentIndex = (currentIndex - 1 + totalServices) % totalServices;
              updateContent(currentIndex);
       });
       updateContent(currentIndex);
});
// Our-Services-slider


document.addEventListener("DOMContentLoaded", function () {
       const banner = document.querySelector(".inner-banner");
       const gradient = document.querySelector(".slider-gradient");

       if (!banner || !gradient) return;

       gradient.style.transform = "none";

       banner.addEventListener("mousemove", function (e) {
              const rect = banner.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const leftPos = Math.min(Math.max((x / rect.width) * 100, 0), 100);
              const topPos = Math.min(Math.max((y / rect.height) * 100, 0), 100);
              gradient.style.left = `${leftPos}%`;
              gradient.style.top = `${topPos}%`;
       });
});

// Inner-Banner-slider

// Text-Overlay

document.addEventListener("DOMContentLoaded", () => {
       gsap.registerPlugin(ScrollTrigger);

       const textElements = document.querySelectorAll(".highlighted-text");

       textElements.forEach(textElement => {
              const text = textElement.textContent;
              textElement.innerHTML = text.split("").map(char => `<span>${char}</span>`).join("");

              const chars = textElement.querySelectorAll("span");

              gsap.from(chars, {
                     scrollTrigger: {
                            trigger: textElement,
                            start: "top 85%",
                            end: "bottom 20%",
                            scrub: true,
                     },
                     color: "#a0a0a0",
                     stagger: 1, 
                     duration: 1,
              });
       });
})


// Text-Overlay