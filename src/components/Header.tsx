"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/config/site";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="container-lg site-header__inner">
        {/* Wordmark with brand logo */}
        <a href="#top" className="site-header__logo" aria-label="SignalsForge AI — home">
          <img
            src="/logo-brand.png"
            alt="SignalsForge AI logo"
            width={28}
            height={26}
            className="site-header__logo-img"
          />
          <span>{SITE_CONFIG.name}</span>
        </a>

        {/* Desktop nav */}
        <nav
          id="main-nav"
          className={`site-header__nav${navOpen ? " open" : ""}`}
          aria-label="Primary navigation"
        >
          <a href="#problem" onClick={() => setNavOpen(false)}>Problem</a>
          <a href="#approach" onClick={() => setNavOpen(false)}>Approach</a>
          <a href="#about" onClick={() => setNavOpen(false)}>About</a>
          <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
          <a
            href={`mailto:${SITE_CONFIG.contactEmail}`}
            className="site-header__cta"
            onClick={() => setNavOpen(false)}
          >
            Talk to us
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={navOpen}
          aria-controls="main-nav"
          onClick={() => setNavOpen((o) => !o)}
        >
          {navOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="11" x2="17" y2="11" />
              <line x1="3" y1="16" x2="17" y2="16" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
