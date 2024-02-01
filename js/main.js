// ----------------- Setting box -----------------
// Open or close setting box when click on setting icon
let settingBox = document.querySelector(".setting-box");
let settingIcon = document.querySelector(".setting-icon");
settingIcon.addEventListener("click", () => {
  settingBox.classList.toggle("open");
  if (settingBox.classList.contains("open")) {
    settingIcon.style.background =
      "linear-gradient(95deg, rgba(11,5,29,1) 49%, rgba(97,49,223,1) 100%)";
  } else {
    settingIcon.style.background = "#fff";
    settingIcon.style.boxShadow = "none";
  }
});

// Close setting box when click on it or outside
document.addEventListener("click", (event) => {
  if (
    !settingIcon.contains(event.target) &&
    !settingBox.contains(event.target)
  ) {
    settingBox.classList.remove("open");
    settingIcon.style.background = "#fff";
    settingIcon.style.boxShadow = "none";
  }
});

// Check if there is a main color in local storage
const mainColor = localStorage.getItem("colorOption");
if (mainColor) {
  // Set main color to root
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.querySelectorAll(".colors-list li").forEach((li) => {
    li.classList.remove("active");
    // Add active class to main color
    if (li.dataset.color === mainColor) {
      li.classList.add("active");
    }
  });
}

// Switch color
const colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Add active class to clicked color li in colors list
    localStorage.setItem("colorOption", e.target.dataset.color);
    // Add or remove active class from all lis in colors list
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// Array background image
let landing = document.querySelector(".landing-page");
let bgImages = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
];

// Random Background option
let bgOption = true;
let backgroundInterval;

// Check if there is a background image in local storage
let bgOptionLocalStorage = localStorage.getItem("bgImageOption");
if (bgOptionLocalStorage !== null) {
  // Check if bgOption is true or false from local storage
  if (bgOptionLocalStorage === "true") {
    bgOption = true;
    document
      .querySelector(".option-box .btn button[data-bg='on']")
      .classList.add("active");
  } else {
    bgOption = false;
    document
      .querySelector(".option-box .btn button[data-bg='off']")
      .classList.add("active");
  }
}

function randomBgImg() {
  if (bgOption === true) {
    backgroundInterval = setInterval(() => {
      // Get random number
      let random = Math.floor(Math.random() * bgImages.length);
      // Set background image by random number
      landing.style.backgroundImage = `url("images/${bgImages[random]}")`;
    }, 7000);
  }
}

// Set active class in cliked button on setting box random background
let btns = document.querySelectorAll(".option-box .btn button");
btns.forEach((button) => {
  button.addEventListener("click", (btn) => {
    btn.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    // Add active class to clicked button
    btn.target.classList.add("active");
    if (btn.target.dataset.bg === "on") {
      bgOption = true;
      // Set background option to true in local storage
      localStorage.setItem("bgImageOption", true);
      randomBgImg();
    } else {
      bgOption = false;
      // Set background option to false in local storage
      localStorage.setItem("bgImageOption", false);
      clearInterval(backgroundInterval);
    }
  });
});
randomBgImg();

// Reset setting local storage
let resetBtn = document.querySelector(".setting-box .option-box .reset");
resetBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
// ----------------- End Setting box ----------------
// Go to the section when click on links nav or bullet nav
const linksNav = document.querySelectorAll("header ul li a");
const bullets = document.querySelectorAll(".nav-bullets .bullet");
const linkfoot = document.querySelectorAll("footer ul li a");
function scrollToElement(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (event) => {
      event.preventDefault();
      document
        .querySelector(event.target.dataset.section)
        .scrollIntoView({ behavior: "smooth" });
      // Add active class to clicked bullet
      elements.forEach((ele) => {
        ele.classList.remove("active");
      });
      event.target.classList.add("active");
    });
  });
}
scrollToElement(bullets);
scrollToElement(linksNav);
scrollToElement(linkfoot);
// ----- Active nav link and nav bullet when scroll At the apparent section ----
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let sectionOffsetTop = section.offsetTop;
    let sectionOuterHeight = section.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;
    if (
      windowScrollTop + 200 >
      sectionOffsetTop - sectionOuterHeight + windowHeight
    ) {
      current = section.getAttribute("id");
      let bullets = document.querySelectorAll(".nav-bullets .bullet");
      bullets.forEach((bullet) => {
        if (bullet.dataset.section === `.${current}`) {
          bullet.classList.add("active");
        } else {
          bullet.classList.remove("active");
        }
      });
      linksNav.forEach((link) => {
        if (link.dataset.section === `.${current}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
});
// ----------------- Toggle menu ---------------------
// Active toggle menu
const toggle = document.querySelector(".menu");
toggle.addEventListener("click", () => {
  if (toggle.classList.contains("toggle")) {
    toggle.classList.remove("toggle");
  } else {
    toggle.classList.add("toggle");
  }
});

// -------- Set background to header when scroll ------
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
// ----------------- End Navigation bar ----------------
// ----------------- Effect on typing text -------------
// Effect on typing text
let typeEffect = new Typed(".type", {
  strings: [
    "Mostafa Khaled",
    "Web Developer",
    "Front-End Developer",
    "Web Designer",
    "Freelancer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
  showCursor: true,
  smartBackspace: false,
  shuffle: true,
  loopCount: Infinity,
  contentType: "html",
});
// ----------- End Effect on typing text --------------
// ----------------- Skills ---------------------------
const skills = document.querySelector(".skills");
window.addEventListener("scroll", () => {
  let skillOffsetTop = skills.offsetTop;
  let skillOuterHeight = skills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.scrollY;
  if (
    windowScrollTop + 500 >
    skillOffsetTop - skillOuterHeight + windowHeight
  ) {
    let skillspans = document.querySelectorAll(
      ".skills .skill .skill-progress span"
    );
    skillspans.forEach((span) => {
      span.style.width = span.dataset.progress;
      span.innerHTML = span.dataset.progress;
    });
  } else {
    let skillspans = document.querySelectorAll(
      ".skills .skill .skill-progress span"
    );
    skillspans.forEach((span) => {
      span.style.width = 0;
      span.innerHTML = 0;
    });
  }
});
// ----------------- End Skills ----------------------
// Stop form submit when click on button
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
})
// ----------------- Year footer -----------------
const year = document.querySelector("footer .year");
year.innerHTML = new Date().getFullYear();
// ----------------- End Year footer ------------
