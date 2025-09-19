// Enhanced JavaScript with FIXED Theme System
document.addEventListener("DOMContentLoaded", function () {
  // Initialize theme system
  initializeTheme();

  // Add smooth scroll behavior for anchor links
  document.addEventListener("click", function (e) {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });

  // Simple loading animation for project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 100 + index * 100);
  });

  // Add theme switcher if it doesn't exist
  addThemeSwitcher();
});

// FIXED Theme System Functions
function initializeTheme() {
  // Get theme from config or localStorage
  const configTheme = document.body.dataset.configTheme || "clean";
  const savedTheme = localStorage.getItem("portfolio-theme");
  const theme = savedTheme || configTheme;

  applyTheme(theme);
}

function applyTheme(theme) {
  // Remove all theme classes from both html and body
  const themeClasses = [
    "theme-clean",
    "theme-blue",
    "theme-green",
    "theme-red",
    "theme-purple",
    "theme-orange",
    "theme-pink",
    "theme-teal",
    "theme-dark",
  ];

  // Apply to both HTML and body for stronger CSS targeting
  document.documentElement.classList.remove(...themeClasses);
  document.body.classList.remove(...themeClasses);

  // Add new theme class to both elements
  document.documentElement.classList.add(`theme-${theme}`);
  document.body.classList.add(`theme-${theme}`);

  // Set data attributes for CSS targeting
  document.documentElement.setAttribute("data-theme", theme);
  document.body.setAttribute("data-theme", theme);

  // Save to localStorage
  localStorage.setItem("portfolio-theme", theme);

  // Update theme switcher if it exists
  const switcher = document.getElementById("theme-switcher");
  if (switcher) {
    switcher.value = theme;
  }

  // Force CSS recalculation
  document.body.offsetHeight;
}

function addThemeSwitcher() {
  // Check if theme switcher already exists
  if (document.getElementById("theme-switcher")) return;

  // Create theme switcher
  const switcherContainer = document.createElement("div");
  switcherContainer.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: var(--bg-primary, #ffffff);
    border: 1px solid var(--border-color, #e5e7eb);
    border-radius: 8px;
    padding: 10px;
    box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
    transition: all 0.3s ease;
  `;

  const label = document.createElement("label");
  label.textContent = "Theme: ";
  label.style.cssText = `
    font-size: 0.8rem;
    color: var(--text-primary, #1f2937);
    margin-right: 8px;
  `;

  const switcher = document.createElement("select");
  switcher.id = "theme-switcher";
  switcher.style.cssText = `
    padding: 4px 8px;
    border: 1px solid var(--border-color, #e5e7eb);
    border-radius: 4px;
    background: var(--bg-primary, #ffffff);
    color: var(--text-primary, #1f2937);
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
  `;

  // Add theme options
  const themes = [
    { value: "clean", label: "Clean" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "red", label: "Red" },
    { value: "purple", label: "Purple" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "teal", label: "Teal" },
    { value: "dark", label: "Dark" },
  ];

  themes.forEach((theme) => {
    const option = document.createElement("option");
    option.value = theme.value;
    option.textContent = theme.label;
    switcher.appendChild(option);
  });

  // Set current theme
  const currentTheme =
    localStorage.getItem("portfolio-theme") ||
    document.body.dataset.configTheme ||
    "clean";
  switcher.value = currentTheme;

  // Add event listener with immediate effect
  switcher.addEventListener("change", function () {
    applyTheme(this.value);

    // Update switcher container styles for new theme
    setTimeout(() => {
      switcherContainer.style.background = `var(--bg-primary, #ffffff)`;
      switcherContainer.style.borderColor = `var(--border-color, #e5e7eb)`;
      label.style.color = `var(--text-primary, #1f2937)`;
      switcher.style.background = `var(--bg-primary, #ffffff)`;
      switcher.style.borderColor = `var(--border-color, #e5e7eb)`;
      switcher.style.color = `var(--text-primary, #1f2937)`;
    }, 50);
  });

  // Assemble switcher
  switcherContainer.appendChild(label);
  switcherContainer.appendChild(switcher);

  // Add to page
  document.body.appendChild(switcherContainer);

  // Make it responsive
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  function handleMobileView(e) {
    if (e.matches) {
      switcherContainer.style.cssText += `
        top: 10px;
        right: 10px;
        padding: 8px;
      `;
      label.style.display = "none";
    } else {
      switcherContainer.style.cssText = switcherContainer.style.cssText.replace(
        /top: 10px;|right: 10px;|padding: 8px;/g,
        ""
      );
      label.style.display = "inline";
    }
  }

  mediaQuery.addListener(handleMobileView);
  handleMobileView(mediaQuery);
}

// Export theme functions for external use
window.portfolioTheme = {
  apply: applyTheme,
  get current() {
    return localStorage.getItem("portfolio-theme") || "clean";
  },
  available: [
    "clean",
    "blue",
    "green",
    "red",
    "purple",
    "orange",
    "pink",
    "teal",
    "dark",
  ],
};
