let body = document.getElementsByTagName("body");
let h2Tags = document.getElementsByTagName("h2");
body[0].classList.add("stop-scroll");

for (let i = 0; i < h2Tags.length; i++) {
  h2Tags[i].classList.add("by-left");

  document.addEventListener("scroll", function () {
    if (scrollY > i * 800) {
      h2Tags[i].classList.remove("by-left");
    }
  });
}

setTimeout(function () {
  h2Tags[0].classList.remove("by-left");
  setTimeout(function () {
    body[0].classList.remove("stop-scroll");
  }, 1000);
}, 1000);
