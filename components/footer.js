class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #1F2937;
          color: white;
          padding: 3rem 2rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .footer-brand {
          display: flex;
          flex-direction: column;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        
        .footer-logo-icon {
          margin-right: 0.5rem;
        }
        
        .footer-tagline {
          color: #9CA3AF;
          margin-bottom: 1.5rem;
          max-width: 250px;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
        }
        
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .footer-link {
          color: #9CA3AF;
          text-decoration: none;
          margin-bottom: 0.75rem;
          transition: color 0.2s;
        }
        
        .footer-link:hover {
          color: white;
        }
        
        .footer-contact {
          color: #9CA3AF;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
        }
        
        .footer-contact-icon {
          margin-right: 0.5rem;
        }
        
        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid #374151;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #9CA3AF;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .social-link {
          color: white;
          background-color: #374151;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }
        
        .social-link:hover {
          background-color: #4B5563;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="footer-container">
        <div class="footer-brand">
          <a href="index.html" class="footer-logo">
            <i data-feather="leaf" class="footer-logo-icon"></i>
            GreenEdge
          </a>
          <p class="footer-tagline">Professional property care for beautiful outdoor spaces.</p>
        </div>
        <div class="footer-links">
          <h3 class="footer-heading">Quick Links</h3>
          <a href="index.html" class="footer-link">Home</a>
          <a href="services.html" class="footer-link">Services</a>
          <a href="gallery.html" class="footer-link">Gallery</a>
          <a href="about.html" class="footer-link">About Us</a>
          <a href="faq.html" class="footer-link">FAQ</a>
          <a href="contact.html" class="footer-link">Contact</a>
        </div>
<div class="footer-links">
          <h3 class="footer-heading">Services</h3>
          <a href="services.html" class="footer-link">Lawn Mowing</a>
          <a href="services.html" class="footer-link">Seasonal Cleanups</a>
          <a href="services.html" class="footer-link">Property Maintenance</a>
          <a href="services.html" class="footer-link">Gutter Cleaning</a>
        </div>
        
        <div class="footer-links">
          <h3 class="footer-heading">Contact</h3>
          <div class="footer-contact">
            <i data-feather="mail" class="footer-contact-icon"></i>
            info@greenedgecare.com
          </div>
</div>
      </div>
      
      <div class="footer-bottom">
        <div class="social-links">
          <a href="#" class="social-link">
            <i data-feather="facebook"></i>
          </a>
          <a href="#" class="social-link">
            <i data-feather="instagram"></i>
          </a>
          <a href="#" class="social-link">
            <i data-feather="twitter"></i>
          </a>
        </div>
        <p>&copy; ${new Date().getFullYear()} GreenEdge Property Care. All rights reserved.</p>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);