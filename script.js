// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("open");

    const isOpen = navbar.classList.contains("open");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
});

navbar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("open");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});


// LIGHT AND DARK THEME

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeBtn.textContent = isDark ? "☀" : "☾";
    themeBtn.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
    );
});


// PROJECT FILTER

const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const category = button.dataset.filter;

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(function (card) {
            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        });
    });
});


// EXPAND PROJECT DETAILS

document.querySelectorAll(".details-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const details = button.nextElementSibling;
        const isHidden = details.hidden;

        details.hidden = !isHidden;
        button.textContent = isHidden
            ? "Show Details −"
            : "Show Details +";

        button.setAttribute("aria-expanded", isHidden);
    });
});


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const name = document.getElementById("name").value.trim();

    formStatus.textContent =
        "Thank you, " + name +
        "! Your form is valid, but this demo does not send messages.";

    contactForm.reset();
});


// AUTOMATIC CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
