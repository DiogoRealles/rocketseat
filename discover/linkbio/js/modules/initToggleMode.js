export default function toggleMode() {
  const html = document.documentElement;
  const toggleMode = document.querySelector('[data-js="toggleMode"]');
  const img = document.querySelector("#profile img");

  toggleMode.addEventListener("click", () => {
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./img/avatar-light.png");
    } else {
      img.setAttribute("src", "./img/avatar.png");
    }
    html.classList.toggle("light");
  });
}
