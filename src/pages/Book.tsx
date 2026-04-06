import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Book = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="py-20 md:py-32 bg-card divine-light">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-primary mb-4">The Book</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
          About Lion's Way
        </h1>
        <p className="font-sans text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto">
          The Christian Walk of a Master Martial Artist
        </p>
      </div>
    </section>

    {/* What Sets It Apart */}
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">What Sets It Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Fusion</h3>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                Most Christian living books do not speak to the martial artist. Most martial arts books do not speak about faith. Lion's Way blends both with clarity and respect while still being able to reach the non-martial artist or the non-believer.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Practical Spirituality</h3>
              <ul className="space-y-2">
                {[
                  "Applicable martial principles to give unique perspectives on faith.",
                  "Biblical truths to clarify and sharpen the mindset.",
                  "Real-world examples to tie it all together.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Authority & Authenticity</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• 8th Degree Black Belt in Jujitsu under Professor Dave Castoldi</li>
                <li>• Full Instructor in Jeet Kune Do under Sifu Paul Vunak (taught SEAL Team 6)</li>
                <li>• 8th Degree Black Belt in Okinawan Karate</li>
                <li>• Naval Academy graduate and former Naval Aviator</li>
                <li>• Most importantly a sinner that fully accepts Jesus as his Lord and Savior</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Strong & Focused</h3>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                Lion's Way speaks directly to those who crave strength, focus, and purpose without ego.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 md:py-28 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">What You'll Gain</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Reignited purpose", desc: "Walk away re-centered in faith and reminded that value-based decisions are essential for a God-centered life." },
            { title: "Tools to fight back", desc: "Whether it's fear, tough times or spiritual complacency, the book offers a paradigm shift and actionable spiritual discipline." },
            { title: "Worshipper and warrior", desc: "No compartmentalization that changes based on whether you're training, praying, or living." },
            { title: "Connected at the roots", desc: "Common ground for those of faith and strength and those that want to renew both. It's more than a message. It's a movement." },
          ].map((b) => (
            <div key={b.title} className="p-6 rounded-lg border border-border/30 bg-background/50 hover:border-primary/30 transition-all duration-500">
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">{b.title}</h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Audience & Pain Points */}
    <section className="py-20 md:py-28 bg-background divine-light">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Audience Needs</h2>
            <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
              <p><strong className="text-primary">Spiritual Growth</strong> — Spiritual growth that is actionable – they want to apply their faith and not just study it. This is a lifestyle, like King David – faith in action. They are looking for a path to develop spiritual resilience.</p>
              <p><strong className="text-primary">Purpose and Identity</strong> — Many are feeling the weight of their choices. There is regret. There are feelings of irrelevance. They are seeking to tap into the strength and confidence that comes from martial arts and faith.</p>
              <p><strong className="text-primary">Content Needs</strong> — Content that meets believers and seekers where they are. Straight forward and actionable. Respectful. Rooted in the Bible and genuine martial principles.</p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Pain Points Addressed</h2>
            <ul className="space-y-3">
              {[
                "Feeling spiritually passive or even defeated.",
                "Dealing with past failures or shame.",
                "Fear of the world's message.",
                "Lack of mentorship or guidance.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Back Cover CTA */}
    <section className="relative py-20 md:py-28 bg-card overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 50%, hsl(41 50% 57% / 0.06) 0%, transparent 60%)"
      }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <blockquote className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed mb-8">
          The bumps, bruises and blood a martial artist endures is a unique backdrop to practice Christian values when tired, hurt and under pressure to compromise. This book provides insights and lessons to help transform your norms through martial principles and the timeless elements of faith. It is rooted in the Word and carried by experience.
        </blockquote>
        <blockquote className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed mb-10">
          This book is not just for martial artists looking to put their faith on a new trajectory. It's a resource that you can turn to in order to address tough times, face periods of fear and target important goals with a positive, uplifting outlook.
        </blockquote>
        <blockquote className="font-serif text-xl text-primary italic mb-10">
          "Lion's Way is a key resource to fuel your life with an emboldened faith!"
        </blockquote>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded hover:bg-primary/90 transition-all duration-300 gold-glow">
            Buy Now
          </a>
          <Link to="/contact" className="px-8 py-3 border border-primary/40 text-primary font-sans text-sm tracking-widest uppercase rounded hover:bg-primary/10 transition-all duration-300">
            Read a Free Chapter
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Book;
