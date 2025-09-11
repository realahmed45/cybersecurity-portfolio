# 🚀 Jekyll Portfolio Template - Complete & Fixed

A professional, fully functional portfolio template built with Jekyll for data scientists and developers. Features dynamic content loading, 8 color themes, responsive design, and seamless GitHub Pages deployment.

## ✅ What's Been Fixed

### Major Issues Resolved

1. **✅ Dynamic Content Loading**: Homepage now pulls data from `_config.yml` instead of hard-coded values
2. **✅ Project Collection**: Projects are dynamically loaded from `_projects/` folder
3. **✅ Theme Switching**: Complete 8-theme color system with live switching
4. **✅ Missing Layouts**: Added `page.html` and `post.html` layouts
5. **✅ 404 Page**: Fixed layout reference and enhanced design
6. **✅ Resume Generation**: Dynamic resume creation from site data
7. **✅ Build Warnings**: Resolved all Jekyll build warnings
8. **✅ Responsive Design**: Enhanced mobile-first responsive design

### New Features Added

- **🎨 Live Theme Switcher**: Change themes without page reload
- **📱 Mobile Optimization**: Better touch interactions and layouts
- **🔍 SEO Enhancements**: Meta tags, Open Graph, Twitter Cards
- **♿ Accessibility**: Improved screen reader support and keyboard navigation
- **⚡ Performance**: Optimized loading and caching

## 🎨 Available Themes

Choose from 8 professional themes by changing `theme_color` in `_config.yml`:

1. **Clean** (Default) - `theme_color: "clean"` - Gray/White with Orange accents
2. **Blue** - `theme_color: "blue"` - Professional Blue
3. **Green** - `theme_color: "green"` - Cybersecurity/Hacker Green
4. **Red** - `theme_color: "red"` - Security/Alert Red
5. **Purple** - `theme_color: "purple"` - Creative Purple
6. **Orange** - `theme_color: "orange"` - Vibrant Orange
7. **Pink** - `theme_color: "pink"` - Modern Pink
8. **Teal** - `theme_color: "teal"` - Professional Teal
9. **Dark** - `theme_color: "dark"` - Professional Dark Mode

## 🚀 Quick Setup

### Prerequisites

```bash
# Install Ruby (2.7+ required)
# Install Jekyll and Bundler
gem install jekyll bundler
```

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd jekyll-portfolio-template

# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve --livereload
```

Visit `http://localhost:4000` to see your site!

## ⚙️ Configuration

### 1. Edit `_config.yml`

```yaml
# Your Information
title: "Your Name"
author_name: "Your Full Name"
job_title: "Your Job Title"
email: "your.email@example.com"
description: "Your portfolio description..."
location: "Your City, Country"

# Social Links
github_username: "your-github-username"
linkedin_username: "your-linkedin-username"

# Choose Theme (see available themes above)
theme_color: "blue"

# Company Branding
company_name: "Your Company"
company_url: "https://yourcompany.com"
```

### 2. Add Your Content

**Replace Profile Photo:**

- Add your photo as `/assets/images/profile.jpg`
- Recommended: 300x300px, high quality

**Add Projects:**
Create markdown files in `_projects/` folder:

```yaml
---
layout: project
title: "Your Project Title"
description: "Brief project description"
featured: true # Shows on homepage
read_time: "10 minute read"
tags:
  - Python
  - Machine Learning
  - Web Development
github: "https://github.com/username/project"
demo: "https://demo-link.com"
date: 2024-01-15
image: "/assets/images/projects/project-image.jpg" # Optional
---
## Your project content here...

Write your project details using Markdown.
```

## 📁 Project Structure

```
jekyll-portfolio-template/
├── _config.yml              # Site configuration (EDIT THIS!)
├── _layouts/                # Page templates
│   ├── default.html        # Main layout
│   ├── page.html           # Page layout
│   ├── post.html           # Blog post layout
│   └── project.html        # Project page layout
├── _sass/                   # Styling
│   ├── _variables.scss     # CSS variables
│   ├── _themes.scss        # 8 color themes
│   ├── _base.scss         # Base styles
│   └── _components.scss    # Component styles
├── assets/
│   ├── css/main.scss       # Main stylesheet
│   ├── js/main.js         # JavaScript with theme switcher
│   └── images/            # Your images
│       ├── profile.jpg    # Your profile photo
│       └── projects/      # Project images
├── _projects/              # Your project files
│   ├── project-1.md
│   └── project-2.md
├── _posts/                 # Blog posts (optional)
├── 404.html               # Custom 404 page
├── index.html             # Homepage
└── README.md              # This file
```

## 📝 Content Management

### Adding Projects

1. Create a new file in `_projects/` folder
2. Use the project template with front matter
3. Set `featured: true` to show on homepage
4. Add project images to `/assets/images/projects/`

### Project Front Matter Options

```yaml
---
layout: project # Always "project"
title: "Project Name" # Required
description: "Brief description" # Shows in cards
featured: true # Show on homepage
read_time: "15 min read" # Reading time estimate
tags: # Technology tags (list format)
  - Python
  - TensorFlow
  - React
github: "https://..." # GitHub URL (optional)
demo: "https://..." # Live demo URL (optional)
image: "/assets/images/projects/image.jpg" # Custom image (optional)
date: 2024-01-15 # Project date
---
```

### Theme Switching

**Method 1: Configuration File**

```yaml
# In _config.yml
theme_color: "blue" # Changes default theme
```

**Method 2: Live Theme Switcher**

- Use the theme switcher widget (appears automatically)
- Changes are saved to localStorage
- No page reload required

**Method 3: Programmatically**

```javascript
// In browser console or custom JS
window.portfolioTheme.apply("dark");
```

## 🎨 Customization

### Colors and Theming

Edit `_sass/_themes.scss` to customize or add new themes:

```scss
.theme-custom {
  --primary-color: #your-color;
  --primary-dark: #darker-shade;
  --primary-light: #lighter-shade;
  // ... other CSS variables
}
```

### Styling

- **Variables**: `_sass/_variables.scss`
- **Components**: `_sass/_components.scss`
- **Base styles**: `_sass/_base.scss`
- **Themes**: `_sass/_themes.scss`

### Layout Customization

- **Homepage**: Edit `index.html`
- **Project pages**: Edit `_layouts/project.html`
- **Global layout**: Edit `_layouts/default.html`

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Create repository named `your-username.github.io`
2. Push your code to the main branch
3. Go to Settings → Pages
4. Select "Deploy from a branch" → "main"
5. Your site will be live at `https://your-username.github.io`

### Custom Domain

1. Add `CNAME` file to repository root with your domain
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

### Other Platforms

- **Netlify**: Connect your GitHub repo
- **Vercel**: Import your GitHub repo
- **Firebase Hosting**: Use `firebase deploy`

## 🔧 Advanced Features

### Google Analytics

Add to `_config.yml`:

```yaml
google_analytics: "G-XXXXXXXXXX"
```

### Contact Form

The template supports Formspree integration. Update the form action in your contact page.

### SEO Optimization

Built-in SEO features:

- Meta tags and descriptions
- Open Graph tags for social sharing
- Structured data markup
- XML sitemap generation

## 📱 Mobile Optimization

Features for mobile users:

- Touch-optimized navigation
- Responsive images and layouts
- Fast loading on mobile networks
- Optimized animations and interactions

## 🆘 Troubleshooting

### Common Issues

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

**Build errors:**

- Check Jekyll version compatibility
- Run `bundle update` to update gems
- Check for YAML syntax errors

### Getting Help

```bash
# Check for Jekyll issues
bundle exec jekyll doctor

# Clean and rebuild
bundle exec jekyll clean
bundle exec jekyll build

# Update dependencies
bundle update
```

## 📄 File List for Updates

If you're updating an existing site, replace/modify these files:

### Required Updates:

1. `_config.yml` - Enhanced configuration
2. `index.html` - Dynamic homepage
3. `_layouts/default.html` - Enhanced layout
4. `_sass/_themes.scss` - Complete theme system
5. `assets/js/main.js` - Theme switching functionality
6. `404.html` - Fixed 404 page

### New Files to Add:

1. `_layouts/page.html` - Page layout
2. `_layouts/post.html` - Post layout

### Optional Updates:

1. `_projects/*.md` - Update project files with proper front matter
2. `assets/css/main.scss` - Ensure proper imports

## 🎯 Best Practices

### Performance

- Optimize images (use WebP when possible)
- Keep project descriptions concise
- Use appropriate image sizes

### SEO

- Write descriptive page titles
- Add meta descriptions
- Use semantic HTML structure

### Accessibility

- Include alt text for images
- Use proper heading hierarchy
- Ensure sufficient color contrast

### Content

- Keep project descriptions focused on impact
- Use clear, professional language
- Include relevant technical details

## 📊 Analytics & Tracking

### Google Analytics Setup

1. Create a Google Analytics account
2. Get your tracking ID
3. Add to `_config.yml`:

```yaml
google_analytics: "G-XXXXXXXXXX"
```

### Performance Monitoring

Monitor your site's performance:

- Page load speeds
- Mobile usability
- Search console data

## 🔒 Security

### Best Practices

- Keep Jekyll and gems updated
- Use HTTPS (enabled by default on GitHub Pages)
- Validate user inputs if adding forms
- Regular security audits

## 🚀 Quick Commands Reference

```bash
# Development
bundle exec jekyll serve              # Start dev server
bundle exec jekyll serve --livereload # Auto-refresh browser
bundle exec jekyll build              # Build for production

# Maintenance
bundle exec jekyll clean              # Clean build files
bundle exec jekyll doctor             # Check for issues
bundle update                         # Update dependencies

# Theme Testing
# Change theme_color in _config.yml and restart server
```

## 📞 Support

Need help? Check these resources:

1. **Jekyll Documentation**: https://jekyllrb.com/docs/
2. **GitHub Pages Docs**: https://docs.github.com/en/pages
3. **Issue Tracker**: Use the GitHub Issues tab
4. **Community**: Jekyll Discord/Forum

---

**🎉 Your portfolio is now ready! Happy coding!**

Made with ❤️ for developers and data scientists worldwide.
