class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          background-color: rgba(249, 251, 249, 0.95);
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2E7D32;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        
        .logo-icon {
          margin-right: 0.5rem;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-link {
          color: #1F2937;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }
        
        .nav-link:hover {
          color: #2E7D32;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #2E7D32;
          transition: width 0.2s;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .cta-button {
          background-color: #2E7D32;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.2s;
          text-decoration: none;
        }
        
        .cta-button:hover {
          background-color: #3B8D40;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(46, 125, 50, 0.2);
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: #1F2937;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-button {
            display: block;
          }
        }
      </style>
      
      <nav>
        <a href="index.html" class="logo">
          <i data-feather="leaf" class="logo-icon"></i>
          GreenEdge
        </a>
        <div class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="services.html" class="nav-link">Services</a>
          <a href="gallery.html" class="nav-link">Gallery</a>
          <a href="about.html" class="nav-link">About</a>
          <a href="faq.html" class="nav-link">FAQ</a>
          <a href="contact.html" class="cta-button">Free Quote</a>
</div>
<button class="mobile-menu-button">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);