import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i} className="font-serif text-2xl font-bold text-foreground mt-10 mb-4">{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter(l => l.startsWith("- "));
        return (
          <ul key={i} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-foreground/80 text-base leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item.replace("- ", "")}</span>
              </li>
            ))}
          </ul>
        );
      }
      if (block.startsWith(""") || block.startsWith('"') || block.startsWith("—")) {
        return <blockquote key={i} className="font-serif text-lg text-primary/90 italic border-l-2 border-primary/30 pl-6 my-6">{block}</blockquote>;
      }
      return <p key={i} className="font-sans text-base text-foreground/80 leading-relaxed mb-4">{block}</p>;
    });
  };

  return (
    <main className="pt-20">
      <section className="py-16 md:py-24 bg-card divine-light">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary text-xs tracking-widest uppercase mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-3 h-3" />
            <span>Back to Blog</span>
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          <p className="text-xs text-muted-foreground tracking-widest uppercase">By Mark Fusco</p>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-background">
        <article className="max-w-3xl mx-auto px-6">
          {renderContent(post.content)}
        </article>
      </section>
    </main>
  );
};

export default BlogPost;
