export default function initDateYear() {
  const dateYear = document.querySelector('[data-js="dateYear"]');

  dateYear.innerHTML = new Date().getFullYear();
}
