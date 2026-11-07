window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");

  // Optional: Add a small delay so the animation is visible
  // even if the site loads instantly (remove setTimeout for production if you want instant load)
  setTimeout(function () {
    loader.classList.add("loader-hidden");

    // Remove the loader from the DOM completely after the fade-out is done
    loader.addEventListener("transitionend", function () {
      loader.remove();
    });
  }, 1500); // 1500ms = 1.5 seconds delay
});
