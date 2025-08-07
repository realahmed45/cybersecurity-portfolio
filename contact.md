---
layout: default
title: Contact
permalink: /contact/
---

<section class="contact-hero">
    <div class="container">
        <h1>Get In Touch</h1>
        <p>I'd love to hear from you! Whether you have a question about my work, want to collaborate, or just want to say hello.</p>
    </div>
</section>

<section class="contact-content">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-info">
                <h2>Let's Connect</h2>
                <p>Feel free to reach out through any of these channels:</p>
                
                <div class="contact-methods">
                    {% if site.email %}
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="method-details">
                            <h4>Email</h4>
                            <a href="mailto:{{ site.email }}">{{ site.email }}</a>
                        </div>
                    </div>
                    {% endif %}
                    
                    {% if site.location %}
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="method-details">
                            <h4>Location</h4>
                            <p>{{ site.location }}</p>
                        </div>
                    </div>
                    {% endif %}
                    
                    {% if site.linkedin_username %}
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div class="method-details">
                            <h4>LinkedIn</h4>
                            <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank">Connect with me</a>
                        </div>
                    </div>
                    {% endif %}
                    
                    {% if site.github_username %}
                    <div class="contact-method">
                        <div class="method-icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <div class="method-details">
                            <h4>GitHub</h4>
                            <a href="https://github.com/{{ site.github_username }}" target="_blank">View my code</a>
                        </div>
                    </div>
                    {% endif %}
                </div>
                
                <div class="social-links">
                    <h3>Follow Me</h3>
                    <div class="social-icons">
                        {% if site.github_username %}
                        <a href="https://github.com/{{ site.github_username }}" target="_blank" class="social-icon">
                            <i class="fab fa-github"></i>
                        </a>
                        {% endif %}
                        
                        {% if site.linkedin_username %}
                        <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank" class="social-icon">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        {% endif %}
                        
                        {% if site.twitter_username %}
                        <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        {% endif %}
                    </div>
                </div>
            </div>
            
            <div class="contact-form-section">
                <h2>Send a Message</h2>
                <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary submit-btn">
                        <i class="fas fa-paper-plane"></i>
                        Send Message
                    </button>
                </form>
                
                <div class="form-note">
                    <p><strong>Note:</strong> To activate the contact form, replace "your-form-id" in the form action with your actual Formspree form ID, or use another form handling service.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.contact-hero {
    padding: 5rem 0 3rem;
    text-align: center;
    background: linear-gradient(135deg, var(--bg-primary, #fff) 0%, var(--bg-secondary, #f9fafb) 100%);
    
    h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
    }
    
    p {
        font-size: 1.25rem;
        color: var(--text-secondary, #6b7280);
        max-width: 600px;
        margin: 0 auto;
    }
}

.contact-content {
    padding: 3rem 0 5rem;
    
    .contact-wrapper {
        display: grid;
        gap: 3rem;
        max-width: 1200px;
        margin: 0 auto;
        
        @media (min-width: 1024px) {
            grid-template-columns: 1fr 1.5fr;
            gap: 4rem;
        }
    }
}

.contact-info {
    h2 {
        margin-bottom: 1rem;
        color: var(--text-primary, #111827);
    }
    
    > p {
        margin-bottom: 2rem;
        color: var(--text-secondary, #6b7280);
        line-height: 1.6;
    }
    
    .contact-methods {
        margin-bottom: 3rem;
        
        .contact-method {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 1.5rem;
            
            .method-icon {
                width: 50px;
                height: 50px;
                background: var(--primary-color);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.25rem;
                flex-shrink: 0;
            }
            
            .method-details {
                h4 {
                    margin-bottom: 0.25rem;
                    color: var(--text-primary, #111827);
                    font-size: 1.125rem;
                }
                
                p, a {
                    color: var(--text-secondary, #6b7280);
                    margin: 0;
                }
                
                a:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
    
    .social-links {
        h3 {
            margin-bottom: 1rem;
            color: var(--text-primary, #111827);
        }
        
        .social-icons {
            display: flex;
            gap: 1rem;
            
            .social-icon {
                width: 50px;
                height: 50px;
                background: var(--bg-secondary, #f3f4f6);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-primary, #111827);
                font-size: 1.25rem;
                transition: all 0.3s ease;
                
                &:hover {
                    background: var(--primary-color);
                    color: white;
                    transform: translateY(-2px);
                }
            }
        }
    }
}

.contact-form-section {
    background: var(--bg-primary, #fff);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    
    h2 {
        margin-bottom: 1.5rem;
        color: var(--text-primary, #111827);
    }
    
    .contact-form {
        .form-group {
            margin-bottom: 1.5rem;
            
            label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 500;
                color: var(--text-primary, #111827);
            }
            
            input, textarea {
                width: 100%;
                padding: 0.75rem 1rem;
                border: 2px solid var(--border-color, #e5e7eb);
                border-radius: 0.5rem;
                font-size: 1rem;
                transition: border-color 0.3s ease;
                background: var(--bg-primary, #fff);
                color: var(--text-primary, #111827);
                
                &:focus {
                    outline: none;
                    border-color: var(--primary-color);
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }
            }
            
            textarea {
                resize: vertical;
                min-height: 120px;
            }
        }
        
        .submit-btn {
            width: 100%;
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
            
            &:hover {
                transform: translateY(-2px);
            }
        }
    }
    
    .form-note {
        margin-top: 1.5rem;
        padding: 1rem;
        background: #fef3cd;
        border: 1px solid #fecf20;
        border-radius: 0.5rem;
        
        p {
            margin: 0;
            font-size: 0.875rem;
            color: #92400e;
        }
    }
}

@media (max-width: 767px) {
    .contact-hero {
        padding: 3rem 0 2rem;
        
        h1 {
            font-size: 2rem;
        }
        
        p {
            font-size: 1rem;
        }
    }
    
    .contact-content {
        padding: 2rem 0 3rem;
    }
    
    .contact-form-section {
        padding: 1.5rem;
    }
}
</style>
