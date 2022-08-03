const serviciosContentContent = document.querySelectorAll(
  ".serviciosContentContent"
);
const proyectosContent = document.querySelector(".proyectosContent");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      console.entry;
      if (!entry.isIntersecting) {
        return;
      }

      switch (entry.target.getAttribute("tipe")) {
        case "pg":
          entry.target
            .querySelector(".serviciosContentImage")
            .classList.add("fadeRtoL");
          entry.target
            .querySelector(".contentPaginaWeb")
            .classList.add("fadeRtoL");
          break;

        case "aw":
          entry.target
            .querySelector(".serviciosContentImageAW")
            .classList.add("fadeRtoL");
          entry.target
            .querySelector(".contentAppWeb")
            .classList.add("fadeRtoL");
          break;

        case "ot":
          entry.target
            .querySelector(".serviciosContentImage")
            .classList.add("fadeRtoL");
          entry.target.querySelector(".contentOtros").classList.add("fadeRtoL");
          break;

        default:
          break;
      }
    });
  },
  {
    root: null,
    rootMargin: "-150px",
    threshold: 0,
  }
);

const observerProject = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("proyectosContentReveal");
      // entry.isIntersecting ? entry.target.classList.add('proyectosContentReveal') : console.log('nope');
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  }
);

observerProject.observe(proyectosContent);
serviciosContentContent.forEach((element) => observer.observe(element));
