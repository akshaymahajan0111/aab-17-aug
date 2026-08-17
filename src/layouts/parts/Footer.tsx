import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="mb-8 flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-16 bg-primary" />
          <span className="h-2 w-2 rounded-full bg-accent" />
        </div>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-sm font-heading text-2xl leading-tight text-foreground">
            Made for the simple pleasure of saying hello.
          </p>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground md:items-end">
            <nav className="flex gap-5" aria-label="Footer navigation">
              <Link className="editorial-link" to="/">Welcome</Link>
              <a className="editorial-link" href="#notes">Notes</a>
            </nav>
            <p>© 2026 Hello World</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
