import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ValuesGrid from "@/components/ValuesGrid";
import BookCTA from "@/components/BookCTA";

const Home = () => (
  <main>
    <HeroSection />

    <VideoSection />

    {/* Where Strength Meets Faith */}
    <section className="py-20 md:py-32 bg-background divine-light">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Where Strength Meets Faith
        </h2>
        <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
          Lion's Way bridges two worlds often thought to be at odds: the way of the warrior and the way of Christ.
          Through his book, blog, and training, Mark equips individuals to face both physical and spiritual battles
          with clarity and conviction.
        </p>
      </div>
    </section>

    {/* Why This Matters */}
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          Why This Matters
        </h2>
        <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
          This platform exists to empower believers and those seeking clarity, courage, and conviction.
          Mark's work offers more than inspiration—it's a call to prepare, to fight spiritual battles with
          discipline, and to live with purpose anchored in truth.
        </p>
      </div>
    </section>

    <ValuesGrid />

    <BookCTA />
  </main>
);

export default Home;
