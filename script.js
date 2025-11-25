const progressBars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const progress = bar.getAttribute("data-progress");
      bar.style.width = progress + "%";
      observer.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
  observer.observe(bar);
});






document.querySelectorAll(".project-card").forEach(card => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) {
      window.location.href = link;
    }
  });
});


const slides = document.querySelectorAll("#slider .slide");
const sliderContainer = document.querySelector("#slider .slider-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1; // wrap to last
  } else if (index >= slides.length) {
    currentIndex = 0; // wrap to first
  } else {
    currentIndex = index;
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));





const body = document.body;
const themeBtn = document.getElementById("themeBtn");

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1472 1536">
          <path fill="currentColor"
            d="M1464 1090q-94 203-283 323.5T768 1536q-157-1-299-62t-244.5-163.5T61 1066T0 768q0-205 97.5-378t267-276.5T738 2q43-2 62 38q17 42-16 72q-176 164-176 400q0 111 43 211.5t115 173t172.5 116T1151 1056q119 0 228-51q41-18 72 13t13 72z" />
        </svg>`;
  } else {
    body.classList.add("dark-mode");
    themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 472 472">
    <path fill="currentColor" d="m123 95l-30 30l-39-38l30-30zM64 216v43H0v-43h64zM256 4v63h-43V4h43zm159 83l-38 38l-30-30l38-38zm-69 292l30-29l39 38l-30 30zm59-163h64v43h-64v-43zM235 109q53 0 90.5 37.5T363 237t-37.5 90.5T235 365t-90.5-37.5T107 237t37.5-90.5T235 109zm-22 362v-63h43v63h-43zM54 388l39-39l30 30l-39 39z"/>
</svg>`;
  }
})

themeBtn.addEventListener("click", () => {
  // document.body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");

    themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 472 472">
    <path fill="currentColor" d="m123 95l-30 30l-39-38l30-30zM64 216v43H0v-43h64zM256 4v63h-43V4h43zm159 83l-38 38l-30-30l38-38zm-69 292l30-29l39 38l-30 30zm59-163h64v43h-64v-43zM235 109q53 0 90.5 37.5T363 237t-37.5 90.5T235 365t-90.5-37.5T107 237t37.5-90.5T235 109zm-22 362v-63h43v63h-43zM54 388l39-39l30 30l-39 39z"/>
</svg>`;

    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark-mode", "light-mode");
    themeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1472 1536">
          <path fill="currentColor"
            d="M1464 1090q-94 203-283 323.5T768 1536q-157-1-299-62t-244.5-163.5T61 1066T0 768q0-205 97.5-378t267-276.5T738 2q43-2 62 38q17 42-16 72q-176 164-176 400q0 111 43 211.5t115 173t172.5 116T1151 1056q119 0 228-51q41-18 72 13t13 72z" />
        </svg>`;
    localStorage.setItem("theme", "light");
  }
})





document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formMessage");

  if (!name || !email || !message) {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
    return;
  }

  function isValidEmail(email) {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");
    return (
      email.includes("@") &&
      email.includes(".") &&
      atIndex < dotIndex &&
      !email.startsWith("@") &&
      !email.endsWith("@") &&
      !email.startsWith(".") &&
      !email.endsWith(".")
    )
  }

  if (!isValidEmail(email)) {
    status.textContent = "⚠ Please enter a valid email.";
    status.style.color = "red";
    return;
  }

  localStorage.setItem("contactName", name);
  localStorage.setItem("contactEmail", email);
  localStorage.setItem("contactMessage", message);

  status.textContent = "Thanks for reaching out! I’ll reply soon.";
  status.style.color = "green";

  window.location.href = "form-details.html";
});






const goUpBtn = document.getElementById("goUpBtn");
goUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
