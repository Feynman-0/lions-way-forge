import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background layers */}
    <div className="absolute inset-0 bg-card" />
    <div className="absolute inset-0 divine-light" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

    {/* Subtle gold atmospheric glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
      style={{ background: "radial-gradient(circle, hsl(41 50% 57%) 0%, transparent 70%)" }}
    />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      {/* Lion logo placeholder */}
      <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="w-20 h-20 mx-auto rounded-full border border-primary/30 flex items-center justify-center">
          <span className="font-serif text-3xl text-primary">L</span>
        </div>
      </div>

      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up tracking-tight"
        style={{ animationDelay: "0.4s" }}>
        Lion's Way
      </h1>

      <p className="font-serif text-lg md:text-xl text-primary italic mb-4 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}>
        The Christian Walk of a Master Martial Artist
      </p>

      <p className="font-sans text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-in-up leading-relaxed"
        style={{ animationDelay: "0.8s" }}>
        A path forged through discipline, faith, and real-world experience.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "1s" }}>
        <Link
          to="/book"
          className="px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded hover:bg-primary/90 transition-all duration-300 gold-glow"
        >
          Read the Book
        </Link>
        <Link
          to="/about"
          className="px-8 py-3 border border-primary/40 text-primary font-sans text-sm tracking-widest uppercase rounded hover:bg-primary/10 transition-all duration-300"
        >
          Begin the Journey
        </Link>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
