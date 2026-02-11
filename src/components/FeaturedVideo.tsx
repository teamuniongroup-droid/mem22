import { Play } from "lucide-react";
import { motion } from "framer-motion";

interface FeaturedVideoProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  image: string;
}

const FeaturedVideo = ({ title, description, date, duration, image }: FeaturedVideoProps) => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="text-white/80 mt-4 text-lg">
              {description}
            </p>
            <div className="flex items-center gap-4 mt-4 text-white/70 text-sm uppercase tracking-wider">
              <span>{date}</span>
              <span className="flex items-center gap-1">
                <Play className="w-3 h-3" /> {duration}
              </span>
            </div>
          </motion.div>

          {/* Right - Video Thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={image}
                alt={title}
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="cbs-video-overlay" />
              <div className="cbs-play-button">
                <div className="cbs-play-icon">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="cbs-video-title">
                {title}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;
