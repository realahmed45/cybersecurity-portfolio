---
layout: default
title: About
permalink: /about/
---

<section class="about-hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-image">
                <img src="/assets/images/profile.jpg" alt="{{ site.title }}" class="profile-photo">
            </div>
            
            <div class="hero-text">
                <h1>About {{ site.author_name | default: site.title }}</h1>
                <p class="lead">{{ site.description }}</p>
            </div>
        </div>
    </div>
</section>

<section class="about-content">
    <div class="container">
        <div class="content-wrapper">
            <h2>My Journey</h2>
            <p>Welcome to my portfolio! I'm a passionate data scientist with expertise in machine learning, deep learning, and computer vision. My journey in data science began during my university studies, where I discovered the power of data to solve real-world problems.</p>
            
            <p>Over the years, I've worked on various projects ranging from image classification to natural language processing, always focusing on creating practical solutions that deliver business value.</p>
            
            <h2>Skills & Expertise</h2>
            <div class="skills-section">
                <div class="skill-category">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>Python</li>
                        <li>R</li>
                        <li>SQL</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                
                <div class="skill-category">
                    <h3>Machine Learning</h3>
                    <ul>
                        <li>TensorFlow</li>
                        <li>PyTorch</li>
                        <li>Scikit-learn</li>
                        <li>Keras</li>
                    </ul>
                </div>
                
                <div class="skill-category">
                    <h3>Data Visualization</h3>
                    <ul>
                        <li>Matplotlib</li>
                        <li>Seaborn</li>
                        <li>Plotly</li>
                        <li>Tableau</li>
                    </ul>
                </div>
                
                <div class="skill-category">
                    <h3>Tools & Platforms</h3>
                    <ul>
                        <li>Jupyter Notebook</li>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
            
            <h2>Education</h2>
            <div class="education">
                <div class="edu-item">
                    <h4>Master of Science in Data Science</h4>
                    <p><strong>University Name</strong> | 2020-2022</p>
                    <p>Specialized in machine learning and statistical modeling with a focus on computer vision applications.</p>
                </div>
                
                <div class="edu-item">
                    <h4>Bachelor of Science in Computer Science</h4>
                    <p><strong>University Name</strong> | 2016-2020</p>
                    <p>Foundation in programming, algorithms, and software development with emphasis on artificial intelligence.</p>
                </div>
            </div>
            
            <h2>Let's Connect</h2>
            <p>I'm always interested in discussing new opportunities, collaborating on projects, or simply chatting about the latest developments in data science and AI.</p>
            
            <div class="connect-links">
                {% if site.email %}
                <a href="mailto:{{ site.email }}" class="btn btn-primary">
                    <i class="fas fa-envelope"></i>
                    Email Me
                </a>
                {% endif %}
                
                {% if site.linkedin_username %}
                <a href="https://linkedin.com/in/{{ site.linkedin_username }}" class="btn btn-secondary" target="_blank">
                    <i class="fab fa-linkedin"></i>
                    LinkedIn
                </a>
                {% endif %}
            </div>
        </div>
    </div>
</section>

<style>
.about-hero {
    padding: 5rem 0;
    background: linear-gradient(135deg, var(--bg-primary, #fff) 0%, var(--bg-secondary, #f9fafb) 100%);
    
    .hero-content {
        display: grid;
        gap: 3rem;
        align-items: center;
        text-align: center;
        
        @media (min-width: 768px) {
            grid-template-columns: 250px 1fr;
            text-align: left;
        }
    }
    
    .profile-photo {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--primary-color);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        
        @media (min-width: 768px) {
            width: 250px;
            height: 250px;
        }
    }
    
    h1 {
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
    }
    
    .lead {
        font-size: 1.25rem;
        color: var(--text-secondary, #6b7280);
        line-height: 1.6;
    }
}

.about-content {
    padding: 5rem 0;
    
    .content-wrapper {
        max-width: 800px;
        margin: 0 auto;
        
        h2 {
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--primary-color);
            
            &:first-child {
                margin-top: 0;
            }
        }
        
        p {
            margin-bottom: 1.5rem;
            line-height: 1.8;
            color: var(--text-secondary, #4b5563);
        }
    }
}

.skills-section {
    display: grid;
    gap: 2rem;
    margin: 2rem 0;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .skill-category {
        h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 1.25rem;
        }
        
        ul {
            list-style: none;
            padding: 0;
            
            li {
                padding: 0.5rem 0;
                border-bottom: 1px solid var(--border-color, #e5e7eb);
                color: var(--text-secondary, #4b5563);
                
                &:last-child {
                    border-bottom: none;
                }
            }
        }
    }
}

.education {
    .edu-item {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: var(--bg-secondary, #f9fafb);
        border-radius: 0.75rem;
        border-left: 4px solid var(--primary-color);
        
        h4 {
            margin-bottom: 0.5rem;
            color: var(--text-primary, #111827);
        }
        
        p {
            margin-bottom: 0.5rem;
            
            &:last-child {
                margin-bottom: 0;
            }
            
            strong {
                color: var(--primary-color);
            }
        }
    }
}

.connect-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}
</style>
