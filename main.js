window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");
  const mobile_background = document.querySelector(".mob-background");
  const mob_item = document.querySelectorAll("li");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    mobile_background.classList.toggle("is-active");
  });

  for (let i = 0; i < mob_item.length; i++) {
    mob_item[i].addEventListener("click", function () {
      menu_btn.classList.remove("is-active");
      mobile_menu.classList.remove("is-active");
      mobile_background.classList.remove("is-active");
    });
  }
};
const title = document.querySelectorAll(".title");

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

title.forEach((fader) => {
  appearOnScroll.observe(fader);
});

{
  AOS.init({
    duration: 3000,
    once: true,
  });
}
