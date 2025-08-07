// Portfolio Theme Switcher with Extended Themes
document.addEventListener("DOMContentLoaded", function () {
  createThemeSwitcher();
  initMobileNav();
});

function createThemeSwitcher() {
  // Don't create if already exists
  if (document.querySelector(".theme-switcher")) return;

  const themes = [
    // Original Themes
    { name: "blue", color: "#0066cc", label: "Blue" },
    { name: "green", color: "#00ff41", label: "Green" },
    { name: "red", color: "#ff3333", label: "Red" },
    { name: "purple", color: "#8b5cf6", label: "Purple" },
    { name: "orange", color: "#f97316", label: "Orange" },
    { name: "pink", color: "#ec4899", label: "Pink" },
    { name: "teal", color: "#0d9488", label: "Teal" },
    { name: "dark", color: "#2c3e50", label: "Dark" },

    // New Light Themes
    { name: "light", color: "#4f46e5", label: "Light" },
    { name: "white", color: "#ffffff", label: "White", border: "#e2e8f0" },
    { name: "grey", color: "#6b7280", label: "Grey" },
    { name: "mint", color: "#10b981", label: "Mint" },
    { name: "sky", color: "#0ea5e9", label: "Sky" },
    { name: "lavender", color: "#a855f7", label: "Lavender" },
    { name: "rose", color: "#f43f5e", label: "Rose" },
    { name: "amber", color: "#f59e0b", label: "Amber" },
    { name: "emerald", color: "#059669", label: "Emerald" },
    { name: "indigo", color: "#6366f1", label: "Indigo" },
    { name: "slate", color: "#64748b", label: "Slate" },
    { name: "cyan", color: "#06b6d4", label: "Cyan" },
  ];

  // Create switcher HTML
  const switcher = document.createElement("div");
  switcher.className = "theme-switcher";
  switcher.innerHTML = `
        <button class="theme-toggle" title="Change Theme">
            <i class="fas fa-palette"></i>
        </button>
        <div class="theme-options">
            <div class="theme-grid">
                ${themes
                  .map(
                    (theme) => `
                    <button class="theme-btn" data-theme="${
                      theme.name
                    }" title="${theme.label}" 
                            style="background-color: ${theme.color}; ${
                      theme.border ? `border-color: ${theme.border};` : ""
                    } ${
                      theme.name === "white"
                        ? "border: 2px solid #e2e8f0;"
                        : "border: 2px solid rgba(255,255,255,0.3);"
                    }">
                    </button>
                `
                  )
                  .join("")}
            </div>
        </div>
    `;

  document.body.appendChild(switcher);

  // Add enhanced CSS styles
  const style = document.createElement("style");
  style.textContent = `
        .theme-switcher {
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            z-index: 10000;
        }
        
        .theme-toggle {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            cursor: pointer;
            font-size: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        
        .theme-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 25px rgba(0,0,0,0.4);
        }
        
        .theme-toggle::after {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
            border-radius: inherit;
            z-index: -1;
            animation: rotate 3s linear infinite;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .theme-toggle:hover::after {
            opacity: 1;
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .theme-options {
            position: absolute;
            right: 70px;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(20px);
            padding: 15px;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.3);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .theme-switcher:hover .theme-options {
            opacity: 1;
            visibility: visible;
            transform: translateY(-50%) translateX(-10px);
        }
        
        .theme-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
            max-width: 200px;
        }
        
        .theme-btn {
            width: 35px;
            height: 35px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            position: relative;
            overflow: hidden;
        }
        
        .theme-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            background: inherit;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        
        .theme-btn:hover {
            transform: scale(1.15);
            box-shadow: 0 4px 15px rgba(0,0,0,0.25);
            z-index: 10;
        }
        
        .theme-btn:hover::before {
            opacity: 0.2;
        }
        
        .theme-btn.active {
            transform: scale(1.2);
            box-shadow: 0 0 0 3px rgba(255,255,255,0.8), 0 0 0 6px var(--primary-color, #667eea);
            z-index: 5;
        }
        
        .theme-btn.active::after {
            content: '✓';
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 16px;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }
        
        @media (max-width: 768px) {
            .theme-switcher {
                right: 15px;
                top: 60%;
            }
            
            .theme-toggle {
                width: 50px;
                height: 50px;
                font-size: 18px;
            }
            
            .theme-options {
                right: 60px;
                padding: 12px;
            }
            
            .theme-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 6px;
                max-width: 150px;
            }
            
            .theme-btn {
                width: 30px;
                height: 30px;
                border-radius: 6px;
            }
        }
        
        @media (max-width: 480px) {
            .theme-grid {
                grid-template-columns: repeat(2, 1fr);
                max-width: 100px;
            }
        }
    `;
  document.head.appendChild(style);

  // Add click events
  const themeButtons = switcher.querySelectorAll(".theme-btn");
  themeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      const theme = this.dataset.theme;
      changeTheme(theme);

      // Update active button
      themeButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Show notification
      const themeName = themes.find((t) => t.name === theme)?.label || theme;
      showNotification(`Theme changed to ${themeName}!`);

      // Hide options after selection on mobile
      if (window.innerWidth <= 768) {
        switcher.querySelector(".theme-options").style.opacity = "0";
        switcher.querySelector(".theme-options").style.visibility = "hidden";
        setTimeout(() => {
          switcher.querySelector(".theme-options").style = "";
        }, 300);
      }
    });
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("portfolio-theme") || "blue";
  changeTheme(savedTheme);

  // Set active button
  const activeBtn = switcher.querySelector(`[data-theme="${savedTheme}"]`);
  if (activeBtn) activeBtn.classList.add("active");
}

function changeTheme(themeName) {
  // Define theme configurations
  const themeConfigs = {
    // Original Themes
    blue: {
      primary: "#0066cc",
      secondary: "#00aaff",
      start: "#667eea",
      end: "#764ba2",
      isLight: false,
    },
    green: {
      primary: "#00ff41",
      secondary: "#39ff14",
      start: "#11998e",
      end: "#38ef7d",
      isLight: false,
    },
    red: {
      primary: "#ff3333",
      secondary: "#ff6b6b",
      start: "#ff416c",
      end: "#ff4b2b",
      isLight: false,
    },
    purple: {
      primary: "#8b5cf6",
      secondary: "#c084fc",
      start: "#667eea",
      end: "#764ba2",
      isLight: false,
    },
    orange: {
      primary: "#f97316",
      secondary: "#fed7aa",
      start: "#f093fb",
      end: "#f5576c",
      isLight: false,
    },
    pink: {
      primary: "#ec4899",
      secondary: "#f9a8d4",
      start: "#4facfe",
      end: "#00f2fe",
      isLight: false,
    },
    teal: {
      primary: "#0d9488",
      secondary: "#2dd4bf",
      start: "#43e97b",
      end: "#38f9d7",
      isLight: false,
    },
    dark: {
      primary: "#06d6a0",
      secondary: "#118ab2",
      start: "#2c3e50",
      end: "#34495e",
      isLight: false,
    },

    // New Light Themes
    light: {
      primary: "#4f46e5",
      secondary: "#818cf8",
      start: "#f8fafc",
      end: "#e2e8f0",
      isLight: true,
    },
    white: {
      primary: "#1e293b",
      secondary: "#475569",
      start: "#ffffff",
      end: "#f1f5f9",
      isLight: true,
    },
    grey: {
      primary: "#6b7280",
      secondary: "#d1d5db",
      start: "#f9fafb",
      end: "#e5e7eb",
      isLight: true,
    },
    mint: {
      primary: "#10b981",
      secondary: "#6ee7b7",
      start: "#ecfdf5",
      end: "#d1fae5",
      isLight: true,
    },
    sky: {
      primary: "#0ea5e9",
      secondary: "#7dd3fc",
      start: "#f0f9ff",
      end: "#e0f2fe",
      isLight: true,
    },
    lavender: {
      primary: "#a855f7",
      secondary: "#d8b4fe",
      start: "#faf5ff",
      end: "#f3e8ff",
      isLight: true,
    },
    rose: {
      primary: "#f43f5e",
      secondary: "#fda4af",
      start: "#fff1f2",
      end: "#fce7e7",
      isLight: true,
    },
    amber: {
      primary: "#f59e0b",
      secondary: "#fcd34d",
      start: "#fffbeb",
      end: "#fef3c7",
      isLight: true,
    },
    emerald: {
      primary: "#059669",
      secondary: "#34d399",
      start: "#ecfdf5",
      end: "#d1fae5",
      isLight: true,
    },
    indigo: {
      primary: "#6366f1",
      secondary: "#a5b4fc",
      start: "#f8fafc",
      end: "#e0e7ff",
      isLight: true,
    },
    slate: {
      primary: "#64748b",
      secondary: "#cbd5e1",
      start: "#f8fafc",
      end: "#f1f5f9",
      isLight: true,
    },
    cyan: {
      primary: "#06b6d4",
      secondary: "#67e8f9",
      start: "#f0fdff",
      end: "#cffafe",
      isLight: true,
    },
  };

  const config = themeConfigs[themeName] || themeConfigs.blue;

  // Apply theme class to body
  document.body.className = document.body.className.replace(/theme-\w+/g, "");
  document.body.classList.add(`theme-${themeName}`);

  // Apply dynamic background
  document.body.style.background = `linear-gradient(135deg, ${config.start} 0%, ${config.end} 100%)`;

  // Update text colors for light themes
  if (config.isLight) {
    document.body.style.color = "#1e293b";
    // Update header and footer for light themes
    const header = document.querySelector(".site-header");
    const footer = document.querySelector(".site-footer");

    if (header) {
      header.style.background = "rgba(255,255,255,0.8)";
      header.style.color = "#1e293b";
      header.querySelectorAll(".nav-link, .logo").forEach((el) => {
        el.style.color = "#1e293b";
      });
    }

    if (footer) {
      footer.style.background = "rgba(0,0,0,0.1)";
      footer.style.color = "#1e293b";
    }
  } else {
    document.body.style.color = "white";
    // Reset header and footer for dark themes
    const header = document.querySelector(".site-header");
    const footer = document.querySelector(".site-footer");

    if (header) {
      header.style.background = "rgba(255,255,255,0.1)";
      header.style.color = "white";
      header.querySelectorAll(".nav-link, .logo").forEach((el) => {
        el.style.color = "rgba(255,255,255,0.8)";
      });
    }

    if (footer) {
      footer.style.background = "rgba(0,0,0,0.3)";
      footer.style.color = "white";
    }
  }

  // Update CSS custom properties
  document.documentElement.style.setProperty("--primary-color", config.primary);
  document.documentElement.style.setProperty(
    "--secondary-color",
    config.secondary
  );
  document.documentElement.style.setProperty("--gradient-end", config.end);

  // Save theme
  localStorage.setItem("portfolio-theme", themeName);

  console.log(`Theme changed to: ${themeName}`);
}

function showNotification(message) {
  // Remove existing notification
  const existing = document.querySelector(".theme-notification");
  if (existing) existing.remove();

  const notification = document.createElement("div");
  notification.className = "theme-notification";
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-palette" style="color: var(--primary-color); margin-right: 8px;"></i>
            ${message}
        </div>
    `;

  // Add notification styles
  const style = document.createElement("style");
  style.textContent = `
        .theme-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10001;
            animation: slideInRight 0.3s ease-out;
        }
        
        .notification-content {
            background: rgba(255,255,255,0.95);
            color: #333;
            padding: 12px 20px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            font-weight: 500;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.3);
            display: flex;
            align-items: center;
            min-width: 200px;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @media (max-width: 768px) {
            .theme-notification {
                top: 10px;
                right: 10px;
                left: 10px;
            }
            
            .notification-content {
                padding: 10px 15px;
                font-size: 14px;
            }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Remove after 2.5 seconds with animation
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

function initMobileNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");

      // Animate hamburger menu
      const spans = navToggle.querySelectorAll("span");
      if (navToggle.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
      } else {
        spans[0].style.transform = "";
        spans[1].style.opacity = "";
        spans[2].style.transform = "";
      }
    });

    // Close menu on link click
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");

        // Reset hamburger animation
        const spans = navToggle.querySelectorAll("span");
        spans[0].style.transform = "";
        spans[1].style.opacity = "";
        spans[2].style.transform = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !navToggle.contains(event.target) &&
        !navMenu.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");

        // Reset hamburger animation
        const spans = navToggle.querySelectorAll("span");
        spans[0].style.transform = "";
        spans[1].style.opacity = "";
        spans[2].style.transform = "";
      }
    });
  }
}

// Initialize theme on page load
window.addEventListener("load", function () {
  const savedTheme = localStorage.getItem("portfolio-theme") || "blue";
  changeTheme(savedTheme);

  // Add some nice loading animations
  const elements = document.querySelectorAll(".project-card, .skill-item");
  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;

    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100 + index * 100);
  });
});

// Add smooth scroll behavior
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

// Add parallax effect to hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Preload theme colors
const preloadThemes = () => {
  const themeColors = [
    "#0066cc",
    "#00ff41",
    "#ff3333",
    "#8b5cf6",
    "#f97316",
    "#ec4899",
    "#0d9488",
    "#2c3e50",
    "#4f46e5",
    "#ffffff",
    "#6b7280",
    "#10b981",
    "#0ea5e9",
    "#a855f7",
    "#f43f5e",
    "#f59e0b",
    "#059669",
    "#6366f1",
    "#64748b",
    "#06b6d4",
  ];

  // Create hidden elements to preload colors
  themeColors.forEach((color) => {
    const div = document.createElement("div");
    div.style.background = color;
    div.style.position = "absolute";
    div.style.width = "1px";
    div.style.height = "1px";
    div.style.opacity = "0";
    div.style.pointerEvents = "none";
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 100);
  });
};

// Initialize everything
document.addEventListener("DOMContentLoaded", function () {
  preloadThemes();

  // Add some easter egg functionality
  let clickCount = 0;
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", function () {
      clickCount++;
      if (clickCount === 5) {
        showNotification("🎉 Easter egg found! You clicked the logo 5 times!");
        clickCount = 0;
      }
    });
  }
});
