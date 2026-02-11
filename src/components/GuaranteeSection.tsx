import { motion } from "framer-motion";
import badgeSupport from "@/assets/badge-support.png";
import badgeGmp from "@/assets/badge-gmp.png";
import badgeFda from "@/assets/badge-fda.png";
import badgeNatural from "@/assets/badge-natural.png";
import badgeUsa from "@/assets/badge-usa.png";
import badgeGmo from "@/assets/badge-gmo.png";

const GuaranteeSection = () => {
  const certificationBadges = [
    { src: badgeGmp, alt: "GMP Certified" },
    { src: badgeFda, alt: "FDA Approved" },
    { src: badgeNatural, alt: "100% Natural Ingredients" },
    { src: badgeUsa, alt: "Made in USA" },
    { src: badgeGmo, alt: "GMO Free" },
  ];

  return (
    <section className="esconder pt-4 pb-8 bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] border border-[#333] rounded-2xl p-8 md:p-12 text-center"
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <img 
              src={badgeSupport} 
              alt="100% Support Guaranteed" 
              className="w-28 h-28 md:w-32 md:h-32 object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            100% Follow-up and Full Support
          </h2>
          
          <h3 className="font-display text-xl md:text-2xl italic text-[#22c55e] mb-6 underline decoration-[#22c55e]">
            60-Day Satisfaction Guarantee – We Stand Behind Our Product
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl mx-auto text-sm md:text-base">
            Our supplements are backed by a <span className="font-semibold">60-day money-back guarantee</span> from the date of purchase. 
            If, after at least 30 days of use, you are not completely satisfied with your results, 
            the product, or your overall experience, simply contact us at{" "}
            <span className="text-[#22c55e] font-semibold">contact@customercs.com</span>.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl mx-auto text-sm md:text-base">
            We'll be ready to offer you all the guidance and support you need.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto text-sm md:text-base">
            This is how confident we are in the quality and effectiveness of our products. 
            Order your kit today, completely risk-free. We'll be by your side every step of your wellness journey!
          </p>

          {/* Certification Badges */}
          <div className="flex justify-center gap-2 md:gap-6">
            {certificationBadges.map((badge, index) => (
              <motion.img
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-12 h-12 md:w-20 md:h-20 object-contain"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
