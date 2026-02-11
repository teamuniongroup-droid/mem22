import { motion } from "framer-motion";

const HeroSection = () => {
  const tabs = [
    { label: "Full Episodes", active: true },
    { label: "Overtime", active: false },
    { label: "60 Minutes on Paramount+", active: false },
    { label: "Send News Tips", active: false },
  ];

  return (
    <section className="cbs-hero">
      {/* Background Clock Effect */}
      <div className="absolute right-0 top-0 w-full md:w-2/3 h-full opacity-30 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full object-cover"
          style={{ transform: "translateX(20%)" }}
        >
          {/* Clock face */}
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="white"
            strokeWidth="8"
          />
          {/* Clock marks */}
          {[...Array(60)].map((_, i) => {
            const angle = (i * 6 - 90) * (Math.PI / 180);
            const isHour = i % 5 === 0;
            const innerR = isHour ? 155 : 165;
            const outerR = 175;
            return (
              <line
                key={i}
                x1={200 + innerR * Math.cos(angle)}
                y1={200 + innerR * Math.sin(angle)}
                x2={200 + outerR * Math.cos(angle)}
                y2={200 + outerR * Math.sin(angle)}
                stroke="white"
                strokeWidth={isHour ? 4 : 2}
              />
            );
          })}
          {/* Hour numbers */}
          {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => {
            const angle = (i * 30 - 60) * (Math.PI / 180);
            return (
              <text
                key={num}
                x={200 + 130 * Math.cos(angle)}
                y={200 + 130 * Math.sin(angle) + 10}
                fill="white"
                fontSize="28"
                fontWeight="bold"
                textAnchor="middle"
                fontFamily="Oswald, sans-serif"
              >
                {num}
              </text>
            );
          })}
          {/* Clock hands - pointing to ~12 */}
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="60"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="100"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="200" cy="200" r="8" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-12 md:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight"
          >
            60 MINUTES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/90 text-xl md:text-2xl mt-4"
          >
            Sunday at 7 p.m. ET on CBS and Paramount+
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-t border-white/20 pt-4 pb-0 overflow-x-auto">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className={`cbs-tab whitespace-nowrap ${tab.active ? "cbs-tab-active" : ""}`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
