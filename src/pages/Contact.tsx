import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — no backend yet
    alert("Thank you for reaching out. We'll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="py-20 md:py-28 bg-card divine-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-primary mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Contact</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border/30 rounded text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border/30 rounded text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border/30 rounded text-foreground font-sans text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded hover:bg-primary/90 transition-all duration-300 gold-glow"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          {/* Free Chapter CTA */}
          <div className="flex flex-col justify-center">
            <div className="p-8 rounded-lg border border-primary/20 bg-card/50">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Start Your Journey
              </h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed mb-6">
                Download a free chapter of Lion's Way and begin exploring the essential principles where martial wisdom and Christian faith converge.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2.5 border border-primary/40 text-primary font-sans text-xs tracking-widest uppercase rounded hover:bg-primary/10 transition-all duration-300"
              >
                Download Free Chapter
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
