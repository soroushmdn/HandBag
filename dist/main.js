const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const ul = document.querySelector("ul");

menu.addEventListener("click", () => {
  ul.classList.add("open-nav");
});

close.addEventListener("click", () => {
  ul.classList.remove("open-nav");
});
