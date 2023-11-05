
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener('click', function () {
  header.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    header.classList.remove("nav-open");
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

let darkModeEnabled = false;

function toggleTheme() {
  const body = document.body;
  const moonIcon = document.querySelector(".bx.bxs-moon");
  const sunIcon = document.querySelector(".bx.bxs-sun");

  if (!darkModeEnabled) {
    body.classList.add("dark-mode");
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  } else {
    body.classList.remove("dark-mode");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }

  darkModeEnabled = !darkModeEnabled;
}

function triggerAnimation() {
  const aboutMe = document.querySelector(".about-me-info");
  const emojiPicture = document.querySelector(".emoji-picture");

  aboutMe.style.animationName = "none";
  emojiPicture.style.animationName = "none";

  setTimeout(() => {
    aboutMe.style.animationName = "fadeRight";
    emojiPicture.style.animationName = "scale";
  }, 10);
}

function triggerAnimation2() {
  const courseCard = document.querySelector(
    ".course-container .course-card:first-child"
  );
  const courseCard2 = document.querySelector(
    ".course-container .course-card:nth-child(2)"
  );
  const courseCardLast = document.querySelector(
    ".course-container .course-card:last-child"
  );

  courseCard.style.animationName = "none";
  courseCard2.style.animationName = "none";
  courseCardLast.style.animationName = "none";

  setTimeout(() => {
    courseCard.style.animationName = "fadeRight";
    courseCard2.style.animationName = "scale";
    courseCardLast.style.animationName = "fadeLeft";
  }, 10);
}

function triggerAnimation3() {
  const projectCard = document.querySelector(
    ".projects-container .project-card:first-child"
  );
  const projectCard2 = document.querySelector(
    ".projects-container .project-card:nth-child(2)"
  );
  const projectCardLast = document.querySelector(
    ".projects-container .project-card:last-child"
  );


  projectCard.style.animationName = "none";
  projectCard2.style.animationName = "none";
  projectCardLast.style.animationName = "none";


  setTimeout(() => {
    projectCard.style.animationName = "fadeRight";
    projectCard2.style.animationName = "scale";
    projectCardLast.style.animationName = "fadeLeft";
  }, 10);
}
