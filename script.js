
/* PAGE LOADER */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 800);
});

/* REVEAL ANIMATION */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

/* MOBILE NAVIGATION */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navMenu.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        navMenu.classList.remove("open");
    });
});

/* ACTIVE NAV LINK */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* DYNAMIC YEAR */
document.getElementById("year").textContent = new Date().getFullYear();

/* IMAGE FALLBACK */
const profileImage = document.querySelector(".profile-image");

profileImage.addEventListener("error", () => {
    profileImage.style.display = "none";
    profileImage.parentElement.style.background =
        "linear-gradient(135deg, #17243a, #0b1019)";
});
