import { motion } from "framer-motion";
import { ExternalLink, Shield, Tv } from "lucide-react";

interface MoreItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const MoreItem = ({ icon, title, description, link, index }: MoreItemProps) => {
  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex gap-4 p-6 bg-card hover:bg-secondary transition-colors cursor-pointer"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
    </motion.a>
  );
};

const MoreFromSection = () => {
  const items = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Submit a tip to 60 Minutes",
      description: "Here's how to securely send our journalists information.",
      link: "#",
    },
    {
      icon: <Tv className="w-5 h-5" />,
      title: "60 Minutes FAST channel",
      description: "60 Minutes has been the #1 News show in America for 50 straight years.",
      link: "#",
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      title: "Sign up for Paramount+",
      description: "Click here for more episodes of 60 Minutes. Plus, get access to classic stories.",
      link: "#",
    },
  ];

  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="cbs-section-title text-foreground mb-8"
        >
          More from 60 Minutes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <MoreItem key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreFromSection;
