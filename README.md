# Vamsy Vrishank - Quantitative Researcher Portfolio

A sophisticated, minimalistic portfolio website with mathematical animations, designed specifically for quantitative researchers and algorithmic traders.

## 🎨 Features

- **Mathematical Background Animation**: Dynamic equations floating across the page
- **Comprehensive Sections**: About, Education, Experience, Projects, Achievements, Books, Blog
- **Logo Integration**: Company and university logos with hover effects
- **Skill Visualization**: Tech stack with icons, quantitative skills with mathematical symbols
- **Responsive Design**: Optimized for all devices
- **Blog System**: Built-in blog with individual post pages
- **Dark Theme**: Professional dark mode with neon green accents (#00ff88)

## 📁 File Structure

```
portfolio/
├── index.html              # Main portfolio page
├── styles.css              # Main stylesheet  
├── script.js               # Interactive features & animations
├── Vamsy_Vrishank_Resume_QR_1.pdf  # Your resume
├── blog/                   # Blog directory
│   ├── blog-post.css       # Blog post styling
│   ├── regime-switching-volatility.html  # Sample blog post
│   └── [your-blog-posts].html
└── README.md               # This file
```

## 🚀 Quick Start

1. **Download all files** to your computer
2. **Upload to GitHub** repository
3. **Enable GitHub Pages** in settings
4. **Your site is live!**

## 📝 Adding Blog Posts - COMPLETE GUIDE

### Step-by-Step Process

**1. Copy the Template**
```bash
cp blog/regime-switching-volatility.html blog/your-new-post.html
```

**2. Edit Your New Post** (`blog/your-new-post.html`):
- Update the `<title>` tag
- Change post category, title, date
- Replace content between `<div class="post-content">` tags
- Update tags in footer

**3. Add to Main Page** (`index.html`, around line 670):
```html
<article class="blog-card">
    <div class="blog-category">Your Category</div>
    <h3 class="blog-title">Your Post Title</h3>
    <p class="blog-excerpt">
        Brief excerpt (2-3 sentences).
    </p>
    <div class="blog-footer">
        <span class="blog-date">Feb 2025</span>
        <span class="blog-read-time">8 min read</span>
        <a href="blog/your-new-post.html" class="blog-link">Read Article →</a>
    </div>
</article>
```

**4. Commit and Push**
```bash
git add .
git commit -m "Add new blog post"
git push
```

Your new post will be live in a few minutes!

### Blog Post Content Elements

Use these in your blog posts:

**Lead Paragraph** (opening hook):
```html
<p class="lead">
    Your compelling opening paragraph that draws readers in.
</p>
```

**Section Headings**:
```html
<h2>Main Section</h2>
<h3>Subsection</h3>
```

**Code Blocks**:
```html
<div class="code-block">
    <pre><code>import numpy as np
import pandas as pd

# Your code here
df = pd.read_csv('data.csv')
</code></pre>
</div>
```

**Math Equations**:
```html
<div class="math-block">
    <p>The Capital Asset Pricing Model:</p>
    <code>E[R] = Rf + β(E[Rm] - Rf)</code>
</div>
```

**Lists**:
```html
<ul>
    <li><strong>Point 1:</strong> Explanation</li>
    <li><strong>Point 2:</strong> Explanation</li>
</ul>
```

**Inline Code**:
```html
Use <code>variable_name</code> for inline code.
```

**Call-to-Action Box**:
```html
<div class="post-cta">
    <p><strong>Want to discuss this?</strong> <a href="mailto:avrishan@stevens.edu">Get in touch</a></p>
</div>
```

## 🛠️ Customization Guide

### Update Personal Info

Edit `index.html`:

**Name** (line 40):
```html
<span class="line">Your</span>
<span class="line">Name</span>
<span class="line">Here</span>
```

**Contact** (lines 90-110):
- Email
- LinkedIn
- GitHub  
- Phone

### Add Projects

Location: `index.html` lines 380-480

```html
<article class="project-card">
    <div class="project-header">
        <h3 class="project-title">Project Name</h3>
        <span class="project-tag">Python • ML</span>
    </div>
    <p class="project-description">
        Description with <strong>key metrics</strong>.
    </p>
    <div class="project-meta">
        <span class="project-date">2025</span>
        <a href="#" class="project-link">View Details →</a>
    </div>
</article>
```

### Update Skills

**Tech Stack** (lines 170-240):
```html
<div class="skill-card">
    <div class="skill-icon">
        <img src="LOGO_URL" alt="Skill">
    </div>
    <span>Skill Name</span>
</div>
```

**Logo Sources:**
- `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/[name]/[name]-original.svg`
- `https://www.vectorlogo.zone/logos/[company]/[company]-icon.svg`

### Change Colors

Edit `styles.css` (lines 2-11):

```css
:root {
    --color-accent: #00ff88;  /* Change to your color */
}
```

**Popular alternatives:**
- Blue: `#00d4ff`
- Purple: `#b794f6`
- Orange: `#ff9500`

## 📤 Deployment

### GitHub Pages Setup

1. **Create Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```

3. **Enable Pages**
   - Settings → Pages
   - Source: `main` branch
   - Save

4. **Your site:** `https://USERNAME.github.io/REPO/`

### Custom Domain (Optional)

1. Add `CNAME` file with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   ```
   Type A → @ → 185.199.108.153
   Type A → @ → 185.199.109.153  
   Type A → @ → 185.199.110.153
   Type A → @ → 185.199.111.153
   Type CNAME → www → USERNAME.github.io
   ```

## 💡 Blog Post Ideas

Based on your background:

**Volatility Modeling**
- HMM implementation
- HAR-RV-J explained
- Jump detection methods

**Risk Management**
- CVaR vs VaR
- Portfolio optimization
- Dynamic hedging

**Execution**
- VWAP algorithms
- Market impact
- Transaction costs

**Machine Learning**
- Feature engineering
- Time series models
- Backtesting frameworks

**Infrastructure**
- Data pipelines
- Real-time processing
- System design

## 🎯 Writing Tips

1. **Hook readers** with the lead paragraph
2. **Use subheadings** to break up content
3. **Include code examples** for technical posts
4. **Add math notation** when relevant
5. **Use lists** for clarity
6. **End with takeaways**
7. **Add relevant tags**

## 📱 Testing

Test on:
- Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Chrome Android
- Use DevTools responsive mode (F12)

## 🐛 Common Issues

**Blog post not showing?**
- Check file path: `blog/post-name.html`
- Verify link in `index.html`
- Clear cache: Ctrl+Shift+R

**Images not loading?**
- Use correct URLs
- Check external image sources
- Use relative paths for local files

**Styles not applying?**
- Link both CSS files in blog posts:
  ```html
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="blog-post.css">
  ```

## 📊 Analytics (Optional)

Add to `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## 🔄 Regular Updates

**Suggested schedule:**
- Projects: As completed
- Blog: 1-2 posts/month
- Skills: Quarterly
- Resume: After achievements

## 📧 Contact

Questions? Email: avrishan@stevens.edu

---

**Built with HTML, CSS, JavaScript** • **No frameworks** • **Fully responsive** • **February 2025**
