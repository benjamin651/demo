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
          position: relative;
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
          position: relative;
          transition: color 0.2s;
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

        /* Hamburger */
        .mobile-menu-button {
          display: none;
          width: 44px;
          height: 44px;
          background: transparent;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }

        .hamburger {
          width: 22px;
          height: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          height: 2px;
          width: 100%;
          background: #1F2937;
          border-radius: 999px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .mobile-menu-button.open .hamburger span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .mobile-menu-button.open .hamburger span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-button.open .hamburger span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile dropdown */
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(249, 251, 249, 0.98);
          padding: 1rem 2rem;
          display: none;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-link {
          display: block;
          padding: 0.75rem 0;
          color: #1F2937;
          border-bottom: 1px solid #E5E7EB;
          text-decoration: none;
          font-weight: 500;
        }

        .mobile-link:hover {
          color: #2E7D32;
        }

        .mobile-cta {
          margin-top: 1rem;
          display: block;
          text-align: center;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-button {
            display: inline-flex;
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

        <button class="mobile-menu-button" aria-label="Toggle menu">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div class="mobile-menu">
          <a href="index.html" class="mobile-link">Home</a>
          <a href="services.html" class="mobile-link">Services</a>
          <a href="gallery.html" class="mobile-link">Gallery</a>
          <a href="about.html" class="mobile-link">About</a>
          <a href="faq.html" class="mobile-link">FAQ</a>
          <a href="contact.html" class="cta-button mobile-cta">Free Quote</a>
        </div>
      </nav>
    `;

    if (window.feather) feather.replace();

    const btn = this.shadowRoot.querySelector(".mobile-menu-button");
    const menu = this.shadowRoot.querySelector(".mobile-menu");

    const closeMenu = () => {
      menu.classList.remove("open");
      btn.classList.remove("open");
    };

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("open");
      btn.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!this.contains(e.target)) closeMenu();
    });

    this.shadowRoot.querySelectorAll(".mobile-menu a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
