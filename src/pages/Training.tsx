import { Link } from "react-router-dom";
import { Target, BookOpen } from "lucide-react";

const Training = () => (
  <main className="pt-20">
    <section className="py-20 md:py-32 bg-card divine-light">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-primary mb-4">Platforms</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-8">
          Train With Purpose
        </h1>
        <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
          Martial arts is not just physical training—it becomes spiritual preparation when aligned with Christ.
          The mat becomes a place of discipline, growth, and mission.
        </p>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg border border-border/30 bg-card/50 hover:border-primary/30 transition-all duration-500 text-center">
            <Target className="w-10 h-10 text-primary mx-auto mb-6" />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Physical Training</h3>
            <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-6">
              Rooted in five decades of martial arts mastery—from Castoldi Jujitsu to Bruce Lee's Jeet Kune Do.
              Discipline that builds the body and sharpens the mind.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 bg-primary text-primary-foreground font-sans text-xs tracking-widest uppercase rounded hover:bg-primary/90 transition-all duration-300"
            >
              Join Training
            </Link>
          </div>
          <div className="p-8 rounded-lg border border-border/30 bg-card/50 hover:border-primary/30 transition-all duration-500 text-center">
            <BookOpen className="w-10 h-10 text-primary mx-auto mb-6" />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Spiritual Preparation</h3>
            <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-6">
              Equipping believers to fight spiritual battles with clarity and conviction.
              Where the Word of God and warrior discipline converge.
            </p>
            <Link
              to="/book"
              className="inline-block px-6 py-2.5 border border-primary/40 text-primary font-sans text-xs tracking-widest uppercase rounded hover:bg-primary/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Quote */}
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <blockquote className="font-serif text-xl md:text-2xl text-primary italic leading-relaxed">
          "I felt called to bring my favorite endeavor, martial arts, into the light of Christian faith to embolden and empower readers."
        </blockquote>
        <p className="mt-6 text-xs text-muted-foreground tracking-widest uppercase">— Mark L. Fusco</p>
      </div>
    </section>
  </main>
);

export default Training;
