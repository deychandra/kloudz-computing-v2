const container = document.querySelector('.parallax-container');
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
              const progress = ((currentIndex + 1) / totalServices) * 100;
              progressBar.style.width = `${progress}%`;
       }
       function updateContent(index) {
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