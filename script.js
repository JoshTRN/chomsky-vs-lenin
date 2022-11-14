var href = false;
var slideout = new Slideout({
  panel: document.getElementById("content"),
  menu: document.getElementById("nav"),
  padding: 300,
  tolerance: 70,
});

const manageSlideoutBasedOnScreenWidth = () => {
  if (window.innerWidth > 768) {
    slideout.open();
  } else {
    slideout.close();
  }
};

window.addEventListener("resize", manageSlideoutBasedOnScreenWidth);
window.addEventListener("load", manageSlideoutBasedOnScreenWidth);

textToc = document.getElementById("text-table-of-contents");
Array.from(
  textToc.getElementsByTagName("ul")[0].getElementsByTagName("li")
).forEach((el) => {
  el.getElementsByTagName("a")[0].addEventListener("click", (e) => {
    e.preventDefault();
    const oldDuration = slideout._duration;
    slideout._duration = 1;
    manageSlideoutBasedOnScreenWidth();
    slideout._duration = oldDuration;
    const clickedHrefId = el.firstChild.getAttribute("href");
    href = $(clickedHrefId)[0];
  });
});

window.addEventListener("transitionend", () => {
  if (href) {
    href.scrollIntoView();
    href = false;
  }
});
