const fadersleft = document.querySelectorAll(".fade-left");
const fadersright = document.querySelectorAll(".fade-right");
const faderin = document.querySelectorAll(".fadein");
const faderout = document.querySelectorAll(".fadeout");
const item = document.querySelectorAll(".resume-grid-item");
const percentage = document.querySelectorAll(".percentage");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};


const appearOptions1 = {
  threshold: 0,
  rootMargin: "0px 0px -40px 0px"
};

const appearScroll = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("_appear");
      //appearScroll.unobserve(entry.target);
    } else {
      entry.target.classList.remove("_appear");
    }
  });
}, appearOptions);

const appearScroll1 = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("_appear");
      //appearScroll.unobserve(entry.target);
    } else {
      entry.target.classList.remove("_appear");
    }
  });
}, appearOptions1);

if (fadersleft) {
  fadersleft.forEach(function (fader) {
    appearScroll.observe(fader);
  });
}

if (fadersright) {
  fadersright.forEach(function (fader) {
    appearScroll.observe(fader);
  });
}

if (faderin) {
  faderin.forEach(function (fader) {
    appearScroll.observe(fader);
  });
}

if (faderout) {
  faderout.forEach(function (fader) {
    appearScroll.observe(fader);
  });
}

if (item) {
  item.forEach(function (fader) {
    appearScroll1.observe(fader);
  });
}

if (percentage) {
  percentage.forEach(function (fader) {
    appearScroll1.observe(fader);
  });
}
