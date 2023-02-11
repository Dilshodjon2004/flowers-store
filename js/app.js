window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1500);
});
