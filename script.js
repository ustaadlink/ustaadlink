
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (menuBtn && links) {
    menuBtn.addEventListener("click", () => links.classList.toggle("open"));
  }

  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => links && links.classList.remove("open"));
  });

  document.querySelectorAll("form[data-demo-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const notice = form.querySelector(".notice");
      if (notice) {
        notice.style.display = "block";
        notice.textContent = "Thank you! Your information has been recorded on this demo page. Connect this form to Google Forms or Formspree before launching.";
      }
      form.reset();
    });
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
