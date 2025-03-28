// Parallax
function setupParallax() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.utils.toArray(".parallax").forEach((layer) => {
    const speed = layer.dataset.speed;
    const movement = -(layer.offsetHeight * speed);
    tl.to(layer, { y: movement, ease: "none" }, 0);
  });
}

// Title
function animateTitle() {
  const title = document.querySelector(".hero__title");
  const titleLetters = title.textContent.split(/( )/);

  title.innerHTML = "";

  const spanArray = titleLetters.map((letter) => {
    const span = document.createElement("span");
    span.classList.add("hero__title_letter");
    span.textContent = letter;
    if (letter === " ") {
      span.style.width = "0.3em";
    }
    title.appendChild(span);
    return span;
  });

  setTimeout(() => {
    gsap.to(".hero__title_letter", {
      duration: 1.5,
      opacity: 0.9,
      color: "#f3eecc",
      y: -10,
      stagger: 0.12,
      ease: "power2.out",
    });
  }, 500);
}

// Text
function animateText() {
  document.querySelectorAll(".main_section__text").forEach((textElement) => {
    const text = textElement.textContent;
    textElement.innerHTML = "";

    const letters = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      span.style.display = "inline-block";

      if (char === " ") {
        span.style.width = "4px";
      }

      textElement.appendChild(span);
      return span;
    });

    gsap.to(letters, {
      opacity: 1,
      y: -5,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textElement,
        start: "top 90%",
        once: true,
      },
    });
  });
}

function initAnimations() {
  setupParallax();
  animateTitle();
  animateText();
}

initAnimations();
