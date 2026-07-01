// components/Footer.tsx

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "#connect-form" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Process", href: "#step-process" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-main">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-white">
            Master<span className="text-accent-blue"> X </span>Traders
          </h2>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  text-text-secondary
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-px w-full bg-white/10" />

          {/* Copyright */}
          <p className="text-center text-sm text-text-muted">
            © {new Date().getFullYear()} Market X Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
