const accordion_containers = document.querySelectorAll(".accordion-container");

accordion_containers.forEach((accordion_container) => {
  accordion_container.addEventListener("click", function () {
    const data = this.nextElementSibling; // get data
    data.classList.toggle("show");
    const icon = this.querySelector("i");
    icon.classList.toggle("animate");
  });
});
document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("show");
    const icon = accordion.querySelector(".toggle-icon");
    icon.classList.toggle("animate");
  });
});