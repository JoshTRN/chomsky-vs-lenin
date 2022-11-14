var href = false;
var slideout = new Slideout({
  panel: document.getElementById("content"),
  menu: document.getElementById("nav"),
  padding: 300,
  tolerance: 70,
});

const manageSlideoutBasedOnScreenWidth = () => {
  console.log("managing slideout");
  if (window.innerWidth > 768) {
    slideout.open();
  } else {
    slideout.close();
  }
};

window.addEventListener("resize", manageSlideoutBasedOnScreenWidth);
window.addEventListener("load", manageSlideoutBasedOnScreenWidth);

textToc = document.getElementById("text-table-of-contents");
textToc.getElementsByTagName("ul")[0].childNodes.forEach((el) => {
  el.addEventListener("click", (e) => {
    manageSlideoutBasedOnScreenWidth();
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
