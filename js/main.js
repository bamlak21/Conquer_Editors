//Responsive navbar icon toggle
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// Emailjs
function sendEmail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_vxdydr7";
  const templateId = "template_72z1m0j";
  const publicKey = "3asQNyRB9dSkbVQ67";

  emailjs
    .send(serviceId, templateId, params, publicKey)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Appointment scheduled!");
    })
    .catch((err) => console.log(err));
}

// Footer Year count
const year = (document.getElementById("year").innerHTML =
  new Date().getFullYear());

// Text-Animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");

hiddenElement.forEach((el) => observer.observe(el));

//nav selection indicator
const currentPage = document
  .querySelectorAll(".navbar .blue")
  .forEach((link) => {
    if (link.href === window.location.href) {
      link.setAttribute("aria-current", "page");
    }
  });
