import { Link } from "react-router-dom";

const BookCTA = () => (
  <section className="relative py-20 md:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-card" />
    <div className="absolute inset-0" style={{
      background: "radial-gradient(ellipse at 50% 50%, hsl(41 50% 57% / 0.06) 0%, transparent 60%)"
    }} />

    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
        Not Just a Book. A Path.
      </h2>
      <blockquote className="font-serif text-lg md:text-xl text-primary italic mb-10 leading-relaxed">
        "Lion's Way is a key resource to fuel your life with an emboldened faith!"
      </blockquote>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/book"
          className="px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded hover:bg-primary/90 transition-all duration-300 gold-glow"
        >
          Buy Now
        </Link>
        <Link
          to="/contact"
          className="px-8 py-3 border border-primary/40 text-primary font-sans text-sm tracking-widest uppercase rounded hover:bg-primary/10 transition-all duration-300"
        >
          Read a Free Chapter
        </Link>
      </div>
    </div>
  </section>
);

export default BookCTA;
