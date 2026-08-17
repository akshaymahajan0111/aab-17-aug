import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Welcome' },
  { href: '#notes', label: 'Notes' },
];

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3 text-foreground" aria-label="Hello World home">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary text-[11px] font-semibold text-primary">HW</span>
          <span className="font-heading text-2xl font-semibold leading-none">Hello World</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`editorial-link text-sm ${location.pathname === item.href ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              {item.label}
            </Link>
          ))}
          <span className="text-xs text-muted-foreground">Issue 01</span>
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="border-t border-border px-6 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="editorial-link w-fit text-sm text-muted-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
