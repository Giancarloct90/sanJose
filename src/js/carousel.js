// VARIABLES
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
// console.log(Array.from(track.children));
const nextButton = document.querySelector(".carousel-button-right");
const prevButton = document.querySelector(".carousel-button-left");
const dotNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotNav.children);

// INIT
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
});

// FUNCTIONS
const moveSlide = (track, currentSlide, targetSlide) => {
  console.log("hello");
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
  const targetIndex = slides.findIndex((slide) => slide === targetSlide);
  moveDots(targetIndex);
};

const moveDots = (targetDot) => {
  const currentDot = dotNav.querySelector(".current-slide");
  currentDot.classList.remove("current-slide");
  dots[targetDot].classList.add("current-slide");
};

// ADDEVENTLISTENERS
nextButton.addEventListener("click", () => {
  const currentSlide = document.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  if (!nextSlide) {
    return;
  }
  moveSlide(track, currentSlide, nextSlide);
});

prevButton.addEventListener("click", () => {
  const currentSlide = document.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  if (!prevSlide) {
    return;
  }
  moveSlide(track, currentSlide, prevSlide);
});

dotNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveSlide(track, currentSlide, targetSlide);
});
