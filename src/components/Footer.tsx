import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border/30 py-12 md:py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-serif text-xl font-bold text-primary mb-3">Lion's Way</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Train · Believe · Transform
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-4">Navigate</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About" },
              { to: "/book", label: "The Book" },
              { to: "/blog", label: "Blog" },
              { to: "/training", label: "Training" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-foreground/60 hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-4">Connect</h4>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Visit <a href="https://markfuscowrites.com" className="text-primary hover:underline">markfuscowrites.com</a> to begin your journey.
          </p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border/20 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mark L. Fusco. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
