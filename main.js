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

const page = document.body;
const toggle = page.querySelector(".toggle-input");
const toggleIcon = page.querySelector(".toggle-icon i");

// set theme and localStorage on page load
setCheckedState();

function setCheckedState() {
  // checks if localStorage has a "checked" value set at all
  if (!(localStorage.checked === undefined)) {
    // if it does, it sets the state of the toggle accordingly
    toggle.checked = isTrue(localStorage.getItem("checked"));
    // after setting the toggle state, the theme is adjusted according to the checked state
    toggleTheme();
  }
}

function toggleTheme() {
  // Toggle theme based on state of checkbox
  replaceClass();
  // replace icons on page
  toggleIconTheme();
  // set the value of the "checked" key in localStorage
  updateLocalStorage();
}

function replaceClass() {
  if (toggle.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }
}

function toggleIconTheme() {
  // Replace icons not able to be targeted by css variables
  if (page.classList.contains("light")) {
    toggleIcon.classList.replace("far", "fas");
  } else {
    toggleIcon.classList.replace("fas", "far");
  }
}

function updateLocalStorage() {
  localStorage.setItem("checked", toggle.checked);
}

function isTrue(value) {
  // convert string to boolean
  return value === "true";
}

// Toggle theme any time the state of the checkbox changes
toggle.addEventListener("change", toggleTheme);

const btn = document.getElementById("button");
const thename = document.getElementById("from_name");
const email = document.getElementById("email_id");
const themessage = document.getElementById("message");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_53zvw5r";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Submit";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Submit";
      alert(JSON.stringify(err));
    }
  );

  thename.value = "";
  email.value = "";
  themessage.value = "";
});

{
  AOS.init({
    duration: 3000,
    once: true,
  });
}
