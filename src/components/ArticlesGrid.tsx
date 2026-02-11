import ArticleCard from "./ArticleCard";
import { motion } from "framer-motion";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

interface ArticlesGridProps {
  title: string;
  articles: Article[];
  showMoreLink?: boolean;
}

const ArticlesGrid = ({ title, articles, showMoreLink = true }: ArticlesGridProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cbs-section-title text-foreground"
          >
            {title}
          </motion.h2>
          {showMoreLink && (
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              href="#"
              className="text-primary text-sm font-semibold hover:underline"
            >
              More
            </motion.a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} {...article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesGrid;
