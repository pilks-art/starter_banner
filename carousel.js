(function () {
  const imageSlides = Array.from(document.querySelectorAll(".frame--img"));
  const textSlides = Array.from(document.querySelectorAll(".copy"));
  const navBtns = Array.from(document.querySelectorAll(".arrow"));
  let slideIndex = 0;

  // button functionality
  navBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.className.includes("next")) {
        slideIndex++;
      } else {
        --slideIndex;
      }

      if (slideIndex < 0) slideIndex = imageSlides.length - 1;
      if (slideIndex > imageSlides.length - 1) slideIndex = 0;

      hideActiveSlides(imageSlides);
      hideActiveSlides(textSlides);

      showSlide(imageSlides, slideIndex);
      showSlide(textSlides, slideIndex);
    });
  });

  // display & hide slide logic
  const showSlide = (arr, index) => {
    arr[index].classList.add("active");
  };

  const hideActiveSlides = (arr) => {
    arr.forEach((slide) => {
      slide.classList.remove("active");
    });
  };

  // continuous loop over slides
  const carouselLoop = () => {
    hideActiveSlides(imageSlides);
    hideActiveSlides(textSlides);

    if (slideIndex >= imageSlides.length) {
      slideIndex = 0;
    }

    showSlide(imageSlides, slideIndex);
    showSlide(textSlides, slideIndex);

    slideIndex++;
    setTimeout(carouselLoop, 1500);
  };

  carouselLoop();
})();
