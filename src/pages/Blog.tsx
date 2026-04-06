import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

const Blog = () => (
  <main className="pt-20">
    <section className="py-20 md:py-28 bg-card divine-light">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-primary mb-4">Insights & Reflections</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-sm text-muted-foreground">Faith. Discipline. Truth.</p>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group p-6 rounded-lg border border-border/30 bg-card/50 hover:border-primary/30 transition-all duration-500"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-primary text-xs tracking-widest uppercase">
                <span>Read</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
              {!post.hasFullContent && (
                <span className="inline-block mt-3 text-[10px] tracking-widest uppercase text-muted-foreground border border-border/30 rounded px-2 py-0.5">
                  Coming Soon
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Blog;
