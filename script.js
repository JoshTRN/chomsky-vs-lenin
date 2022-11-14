var slideout = new Slideout({
  panel: document.getElementById("content"),
  menu: document.getElementById("table-of-contents"),
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

window.addEventListener("wheel", (e) => {
  console.log(e);
});
window.addEventListener("resize", manageSlideoutBasedOnScreenWidth);
window.addEventListener("load", manageSlideoutBasedOnScreenWidth);
