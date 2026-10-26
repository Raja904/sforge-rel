import { SITE_CONFIG } from "@/config/site";

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container-lg site-footer__inner">
        <div className="site-footer__brand-col">
          <a href="#top" className="site-footer__logo-link" aria-label="SignalsForge AI — top">
            <img
              src="/logo-brand.png"
              alt="SignalsForge AI logo"
              width={26}
              height={24}
              className="site-footer__logo-img"
            />
            <span className="site-footer__brand-name">{SITE_CONFIG.name}</span>
          </a>
          <p className="site-footer__tagline">
            Faster root cause diagnosis for production AI agent failures.
          </p>
        </div>

        <div className="site-footer__nav-col">
          <nav className="site-footer__links" aria-label="Footer navigation">
            <a href="#problem">Problem</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} id="footer-contact-link">
              Contact
            </a>
          </nav>
          <p className="site-footer__copy">
            &copy; {CURRENT_YEAR} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
