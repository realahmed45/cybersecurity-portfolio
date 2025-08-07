# 🚀 Cybersecurity Student Portfolio Template

A professional, customizable portfolio template built with Jekyll for cybersecurity students. Features easy color theming, responsive design, and seamless GitHub Pages deployment.

## ✨ Features

- **8 Color Themes** - Easy one-line theme switching
- **Responsive Design** - Looks perfect on all devices
- **GitHub Pages Ready** - Deploy in minutes
- **Project Showcase** - Beautiful project cards with animations
- **SEO Optimized** - Built-in meta tags and structured data
- **Fast Loading** - Optimized performance
- **Easy Content Management** - Simple Markdown files

## 🎨 Available Themes

Choose from 8 professional themes by changing one line in `_config.yml`:

- 🔵 **Blue** (Default) - `theme_color: "blue"`
- 🟢 **Green** (Hacker) - `theme_color: "green"`
- 🔴 **Red** (Security) - `theme_color: "red"`
- 🟣 **Purple** - `theme_color: "purple"`
- 🟠 **Orange** - `theme_color: "orange"`
- 🩷 **Pink** - `theme_color: "pink"`
- 🫐 **Teal** - `theme_color: "teal"`
- ⚫ **Dark** - `theme_color: "dark"`

## 🚀 Quick Setup

### 1. Prerequisites

- Ruby 2.7+ installed
- Jekyll and Bundler installed

```bash
gem install jekyll bundler
```

### 2. Installation

```bash
# Clone or download this repository
git clone https://github.com/your-repo/cybersecurity-portfolio-template.git
cd cybersecurity-portfolio-template

# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site!

### 3. Customization

**Edit `_config.yml`:**

```yaml
# Your Information
title: "Your Name"
author_name: "Your Full Name"
email: "your.email@example.com"
description: "Your portfolio description..."
location: "Your City, Country"

# Social Links
github_username: "your-github-username"
linkedin_username: "your-linkedin-username"

# Choose Theme
theme_color: "blue" # Change this to any theme

# Company Branding
company_name: "CyberSecurityRockstar"
company_url: "https://cybersecurityrockstar.com"
```

**Add Your Photo:**

- Replace `assets/images/profile.jpg` with your photo
- Recommended: 300x300 pixels, high quality

### 4. Adding Projects

Create files in `_projects/` folder:

**Example: `_projects/my-project.md`**

```yaml
---
layout: project
title: "My Awesome Project"
description: "Brief description here"
featured: true
read_time: "10 minute read"
tags: [Python, Machine Learning, Flask]
github: "https://github.com/username/project"
demo: "https://demo-link.com"
date: 2024-08-07
---

## Project Overview
Write your project details here using Markdown...

## Technologies Used
- Python
- TensorFlow
- Flask

## Results
Your results and conclusions...
```

### 5. Deploy to GitHub Pages

1. Create repository named `your-username.github.io`
2. Push your code to the repository
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → "main"
5. Your site will be live at `https://your-username.github.io`

## 📁 Project Structure

```
cybersecurity-portfolio-template/
├── _config.yml              # Site configuration
├── _layouts/                # Page templates
│   ├── default.html        # Main layout
│   └── project.html        # Project page layout
├── _sass/                   # Styling
│   ├── _variables.scss     # Variables
│   ├── _themes.scss        # Color themes
│   ├── _base.scss         # Base styles
│   └── _components.scss    # Component styles
├── assets/
│   ├── css/main.scss       # Main stylesheet
│   ├── js/main.js         # JavaScript
│   └── images/            # Images
├── _projects/              # Project files
├── pages/
│   ├── index.html         # Homepage
│   ├── about.md           # About page
│   ├── projects.html      # Projects listing
│   └── contact.md         # Contact page
└── README.md              # This file
```

## 🎯 Content Management

### Project Front Matter Options

```yaml
---
layout: project # Always "project"
title: "Project Name" # Required
description: "Brief desc" # Shows in project cards
featured: true # Show on homepage (optional)
read_time: "15 min read" # Estimated reading time
tags: [Tag1, Tag2] # Technology tags
github: "https://..." # GitHub URL (optional)
demo: "https://..." # Live demo URL (optional)
image: "/assets/images/project.jpg" # Custom image (optional)
date: 2024-08-07 # Project date
---
```

### Changing Themes

Simply edit `_config.yml`:

```yaml
theme_color: "green" # Changes entire site theme
```

### Adding Custom Themes

Edit `_sass/_themes.scss` to create custom color schemes.

## 🛠️ Customization

### Colors

All themes use CSS custom properties, making customization easy:

```scss
.theme-custom {
  --primary-color: #your-color;
  --primary-dark: #darker-shade;
  --gradient-start: #gradient-start;
  --gradient-end: #gradient-end;
}
```

### Content

- **Homepage**: Edit `index.html`
- **About**: Edit `about.md`
- **Projects**: Add files to `_projects/`
- **Contact**: Edit `contact.md`

### Styling

- **Variables**: `_sass/_variables.scss`
- **Components**: `_sass/_components.scss`
- **Themes**: `_sass/_themes.scss`

## 🔧 Advanced Features

### Contact Form

The contact page includes a form. To activate:

1. Sign up at [Formspree.io](https://formspree.io)
2. Replace `your-form-id` in `contact.md` with your Formspree form ID

### Google Analytics

Add to `_config.yml`:

```yaml
google_analytics: "UA-XXXXXXXXX-X"
```

### Custom Domain

1. Add `CNAME` file to repository root with your domain
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📱 Mobile Optimization

The template is fully responsive with:

- Touch-optimized navigation
- Responsive images and layouts
- Fast loading on mobile networks
- Optimized animations

## 🔍 SEO Features

Built-in SEO optimization:

- Meta tags and descriptions
- Open Graph tags for social sharing
- Structured data markup
- XML sitemap generation
- Fast loading speeds

## 🆘 Support

### Troubleshooting

**Site not loading:**

- Check repository name is `username.github.io`
- Ensure GitHub Pages is enabled
- Wait 5-10 minutes for deployment

**Theme not changing:**

- Check `theme_color` spelling in `_config.yml`
- Clear browser cache
- Ensure no syntax errors in YAML

**Images not showing:**

- Check file paths use forward slashes
- Ensure images are in `assets/images/`
- Verify image file names match exactly

### Getting Help

- 📧 Email: support@cybersecurityrockstar.com
- 💬 Issues: Use GitHub Issues tab
- 📖 Docs: Check Jekyll documentation

## 📄 License

This template is provided free for educational use by CyberSecurityRockstar students.

## 🙏 Credits

**Built for:** [CyberSecurityRockstar](https://cybersecurityrockstar.com) students
**Framework:** Jekyll static site generator
**Hosting:** GitHub Pages
**Icons:** Font Awesome
**Fonts:** Google Fonts (Inter)

---

**Powered by [CyberSecurityRockstar](https://cybersecurityrockstar.com)** 🚀

_Made with ❤️ for cybersecurity students worldwide_

## 🚀 Quick Commands

```bash
# Development
bundle exec jekyll serve              # Start dev server
bundle exec jekyll serve --livereload # Auto-refresh browser
bundle exec jekyll build              # Build for production

# Troubleshooting
bundle exec jekyll clean              # Clean build files
bundle exec jekyll doctor             # Check for issues
bundle update                         # Update dependencies
```
