import { motion } from "framer-motion";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  index?: number;
}

const ArticleCard = ({ title, excerpt, date, image, index = 0 }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cbs-article-card group"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="cbs-article-image"
        />
      </div>
      <h3 className="cbs-article-title">{title}</h3>
      <p className="cbs-article-excerpt">{excerpt}</p>
      <time className="cbs-article-date">{date}</time>
    </motion.article>
  );
};

export default ArticleCard;
