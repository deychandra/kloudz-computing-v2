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



//====Dots=====
const rows = 20;
const cols = 20;

function createDots(containerId) {
       const dotsContainer = document.getElementById(containerId);

       for (let y = 0; y < rows; y++) {
              for (let x = 0; x < cols; x++) {
                     const dot = document.createElement('div');
                     dot.classList.add('dot');
                     const delay = (x * 0.05 + y * 0.05).toFixed(2);
                     dot.style.animationDelay = `${delay}s`;
                     dot.style.backgroundColor = '#465579';

                     dotsContainer.appendChild(dot);
              }
       }
}

createDots('dotsleft');
createDots('dotsright');
//====Dots=====

