import authorPhoto from "@/assets/author-photo.jpg";
import { Shield, Anchor, Crosshair, Sword } from "lucide-react";

const credentials = [
  { icon: Anchor, label: "Naval Academy Graduate" },
  { icon: Shield, label: "Former Naval Aviator" },
  { icon: Sword, label: "8th Degree Black Belt" },
  { icon: Crosshair, label: "Instructor under Bruce Lee lineage" },
];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="py-20 md:py-32 bg-card divine-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-primary mb-4">Author · Martial Artist · Disciple</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Mark L. Fusco
            </h1>
            <div className="space-y-5 text-foreground/80 font-sans text-base leading-relaxed">
              <p>
                Mark L. Fusco is not your typical Christian author—and that's exactly the point. A graduate of the U.S. Naval Academy and a former Naval Aviator, Mark has spent his life navigating both the intensity of combat training and the quiet strength of faith. He holds an 8th-degree black belt in Castoldi Jujitsu, an 8th-degree black belt in Okinawan Karate, and is a certified instructor under Sifu Paul Vunak—part of a rare lineage that traces directly back to Bruce Lee himself.
              </p>
              <p>
                Mark's journey began on the mat. Training under his father from age six, he was immersed early in the discipline and clarity that only real martial arts can provide. But it was through bruises, pressure, and trust in his teachers that Mark first learned a deeper lesson: that faith—tested and applied—can overcome fear.
              </p>
              <p>
                But the deepest fights haven't always been physical.
              </p>
              <p>
                Mark's connection with God has had its own share of bumps, bruises, and long, silent seasons. He knows what it's like to wrestle with doubt, to be grabbed by God and shown his own shortcomings. These moments—raw, painful, and transformative—are part of the story he tells in his book Lion's Way – The Christian Walk of a Master Martial Artist. This isn't a faith built in isolation; it was forged through hardship.
              </p>
              <p>
                Mark is not writing from a pedestal. He's fallen short. He's been called out by the Enemy and had his failures rubbed in his face. But through spiritual discipline and the essential tools passed down in the martial arts, he's learned to return to Christ—again and again. And now, he wants to help others do the same.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-primary/5 blur-2xl" />
              <img
                src={authorPhoto}
                alt="Mark L. Fusco in the dojo"
                className="relative rounded-lg shadow-2xl max-w-sm w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Authority */}
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Authority & Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {credentials.map((c) => (
            <div key={c.label} className="flex items-center gap-4 p-6 rounded-lg border border-border/30 bg-card/50">
              <c.icon className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="font-sans text-sm text-foreground/90">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 md:py-28 bg-card divine-light">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          The Mission
        </h2>
        <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
          Whether you're a martial artist or someone trying to stand your ground spiritually in a fallen world, Mark's mission is clear: to point people toward salvation through Jesus, and the empowerment that relationship brings on earth. His writing, teaching, and training exist to awaken courage, conviction, and readiness in those who feel spiritually disengaged or out of step with a changing world.
        </p>
        <p className="font-serif text-lg text-primary italic">
          Mark invites you to rediscover strength – not as the world defines it, but as God refines it.
        </p>
      </div>
    </section>
  </main>
);

export default About;
