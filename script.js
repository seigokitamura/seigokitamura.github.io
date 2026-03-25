const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const currentYear = document.getElementById("current-year");
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  themeToggle.innerHTML = "<span aria-hidden=\"true\">☀</span>";
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = "<span aria-hidden=\"true\">☾</span>";
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = "<span aria-hidden=\"true\">☀</span>";
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
