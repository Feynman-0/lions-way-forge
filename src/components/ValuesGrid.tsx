import { Cross, Flame, Shield, Sword, HeartHandshake } from "lucide-react";

const values = [
  { icon: Cross, title: "Faith-driven living", description: "Living with purpose anchored in the truth of Christ." },
  { icon: Flame, title: "Courage and tenacity", description: "Standing firm when the world pushes back." },
  { icon: Shield, title: "Discipline with integrity", description: "Martial discipline tempered by moral strength." },
  { icon: Sword, title: "Purposeful action", description: "Not just belief—but belief in motion." },
  { icon: HeartHandshake, title: "Transformation through Jesus", description: "The ultimate change comes through salvation." },
];

const ValuesGrid = () => (
  <section className="py-20 md:py-32 bg-card">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          What We Stand For
        </h2>
        <div className="w-16 h-px bg-primary/50 mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {values.map((v) => (
          <div
            key={v.title}
            className="group p-6 rounded-lg border border-border/30 bg-background/50 hover:border-primary/30 transition-all duration-500 text-center"
          >
            <v.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="font-serif text-base font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesGrid;
