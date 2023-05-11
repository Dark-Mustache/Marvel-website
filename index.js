const navList = document.querySelector(".nav-list");
const navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", () => {
  const currentState = navList.getAttribute("data-visible");
  if (currentState === "false") {
    navList.setAttribute("data-visible", true);
    navButton.setAttribute("aria-expanded", true);
  } else {
    navList.setAttribute("data-visible", false);
    navButton.setAttribute("aria-expanded", false);
  }
});
