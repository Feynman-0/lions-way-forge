import { Play } from "lucide-react";

const VideoSection = () => (
  <section className="py-20 md:py-32 bg-background">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
        Watch the Message
      </h2>
      <div className="relative aspect-video bg-card rounded-lg border border-border/30 overflow-hidden group cursor-pointer gold-glow">
        <div className="absolute inset-0 divine-light" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
            <Play className="w-8 h-8 text-primary ml-1" />
          </div>
        </div>
        <p className="absolute bottom-6 left-0 right-0 text-xs text-muted-foreground tracking-widest uppercase">
          Video Coming Soon
        </p>
      </div>
    </div>
  </section>
);

export default VideoSection;
