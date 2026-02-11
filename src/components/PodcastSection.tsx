import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface PodcastEpisode {
  id: number;
  title: string;
  image: string;
}

const PodcastSection = () => {
  const episodes: PodcastEpisode[] = [
    {
      id: 1,
      title: "Minneapolis, Inside CECOT, Salties",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=225&fit=crop",
    },
    {
      id: 2,
      title: "Marjorie Taylor Greene, Character AI, Watch Valley",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=225&fit=crop",
    },
    {
      id: 3,
      title: "Polymarket, CRISPR Kids, Lamine Yamal",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=225&fit=crop",
    },
    {
      id: 4,
      title: "Maduro, Here Come the Humanoids, Alysa Liu",
      image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&h=225&fit=crop",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cbs-section-title text-foreground mb-8"
        >
          "60 Minutes" Podcasts
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer relative"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>
              <p className="text-foreground text-sm font-medium mt-2 line-clamp-2 group-hover:text-primary transition-colors">
                {episode.title}
              </p>
              <p className="text-muted-foreground text-xs mt-1">60 Minutes</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
