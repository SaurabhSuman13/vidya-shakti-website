const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "Close" : "Menu";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();


// Use the email entered in the contact box to open the visitor's email app.
const emailButton = document.getElementById("emailButton");
const officialEmail = document.getElementById("officialEmail");
if (emailButton && officialEmail) {
  emailButton.addEventListener("click", (event) => {
    const email = officialEmail.value.trim();
    if (!email || !officialEmail.checkValidity()) {
      event.preventDefault();
      officialEmail.focus();
      officialEmail.setCustomValidity(email ? "Enter a valid email address." : "Enter the organisation's official email first.");
      officialEmail.reportValidity();
      return;
    }
    officialEmail.setCustomValidity("");
    emailButton.href = `mailto:${encodeURIComponent(email)}?subject=Enquiry%20for%20Vidya%20Shakti%20Niwas`;
  });
  officialEmail.addEventListener("input", () => officialEmail.setCustomValidity(""));
}
