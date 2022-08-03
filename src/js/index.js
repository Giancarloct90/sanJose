// // TO FIT WEB PAGE IN SCREEN
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty("--vh", `${vh}px`);

// const resizeOps = () => {
//   document.documentElement.style.setProperty(
//     "--vh",
//     window.innerHeight * 0.01 + "px"
//   );
// };

// resizeOps();
// window.addEventListener("resize", resizeOps);

const divBurger = document.getElementById("divBurger");
const navLinks = document.getElementById("navLinks");

// TO ADDD CLASS TO SHOW NAVLINKS
divBurger.addEventListener("click", () => {
  navLinks.classList.toggle("activeNavLinks");
  divBurger.classList.toggle("toogle");
});

const logoID = document.getElementById("logoID");
logoID.addEventListener("click", () => {
  console.log("hello");
});

// TO REMOVE CLASS TO HIDE NAVLINKS
window.addEventListener("scroll", () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    navLinks.classList.remove("activeNavLinks");
    divBurger.classList.remove("toogle");
  }
});
