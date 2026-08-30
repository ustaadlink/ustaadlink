
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (menuBtn && links) {
    menuBtn.addEventListener("click", () => links.classList.toggle("open"));
  }

  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => links && links.classList.remove("open"));
  });

  document.querySelectorAll("form[data-mailto-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const to = form.dataset.mailtoTo || "ustaadlink@gmail.com";
      const name = form.querySelector('[name="name"]')?.value || "";
      const phone = form.querySelector('[name="phone"]')?.value || "";
      const message = form.querySelector('[name="message"]')?.value || "";
      const subject = `Website message from ${name}`;
      const body = `Name: ${name}\nPhone/WhatsApp: ${phone}\n\n${message}`;
      const notice = form.querySelector(".notice");
      if (notice) {
        notice.style.display = "block";
        notice.textContent = "Opening your email app with this message addressed to UstaadLink...";
      }
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      form.reset();
    });
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
});
