// Smooth mouse shadow follow
const shadow = document.getElementById('shadow');
document.addEventListener('mousemove', e => {
  shadow.style.left = `${e.pageX}px`;
  shadow.style.top = `${e.pageY}px`;
});

// Get DOM elements
const launchBtn = document.getElementById('launchBtn');
const backBtn = document.getElementById('backBtn');
const hero = document.getElementById('hero');
const secondPage = document.getElementById('secondPage');
const logoClick = document.getElementById('logoClick');
const featureBoxes = document.querySelectorAll('.feature-box');

// Transition to second page
function showSecondPage() {
  hero.classList.add('zoom-out');
  setTimeout(() => {
    hero.style.display = 'none';
    secondPage.classList.add('active');
    resetFeatureBoxes(); // Reset animations for feature boxes when page loads
  }, 1000);
}

// Return to hero section
function returnToHero() {
  secondPage.classList.remove('active');
  hero.style.display = 'flex';
  setTimeout(() => {
    hero.classList.remove('zoom-out');
    hero.classList.add('zoom-in');
    setTimeout(() => {
      hero.classList.remove('zoom-in');
    }, 1000);
  }, 100);
}

// Reset feature box animations
function resetFeatureBoxes() {
  featureBoxes.forEach((box, index) => {
    box.style.animation = 'none';  // Reset animation
    // Re-trigger animation by setting animation again after a brief delay
    setTimeout(() => {
      box.style.animation = ''; // Re-apply animation
    }, 50 * index); // Stagger animation reset for visual effect
  });
}

// Event listeners
launchBtn.addEventListener('click', e => {
  e.preventDefault();
  showSecondPage();
});

window.addEventListener('scroll', function () {
   const features = document.querySelectorAll('.feature-box');
   features.forEach(feature => {
      if (feature.getBoundingClientRect().top < window.innerHeight) {
         feature.classList.add('visible');
      }
   });
});


backBtn.addEventListener('click', returnToHero);
logoClick.addEventListener('click', returnToHero);
