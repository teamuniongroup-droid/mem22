import { motion } from "framer-motion";
import { Lock, Truck } from "lucide-react";
import PricingBanner from "./PricingBanner";
import bottles2 from "@/assets/brainxcell-2-bottles.png";
import bottles6 from "@/assets/brainxcell-6-bottles.png";
import bottles3 from "@/assets/brainxcell-3-bottles.png";
import bottles2Mobile from "@/assets/brainxcell-2-bottles-mobile.png";
import bottles3Mobile from "@/assets/brainxcell-3-bottles-mobile.png";
import bottles6Mobile from "@/assets/brainxcell-6-bottles-mobile.png";
import paymentCards from "@/assets/payment-cards.png";
import guaranteeBadge from "@/assets/guarantee-badge.png";
import truckIcon from "@/assets/truck-icon.png";

interface PackageProps {
  title: string;
  bottles: number;
  supply: string;
  originalPrice: number;
  salePrice: number;
  perBottle: number;
  originalPerBottle: number;
  savings: string;
  discount: string;
  features: string[];
  isBestValue?: boolean;
  isGoodValue?: boolean;
  hasShipping?: boolean;
  shippingCost?: string;
  image: string;
  mobileImage: string;
  hasSurprise?: boolean;
  checkoutUrl: string;
  mobileOrder?: string;
}

const PackageCard = ({
  title,
  bottles,
  supply,
  originalPrice,
  salePrice,
  perBottle,
  originalPerBottle,
  savings,
  discount,
  features,
  isBestValue,
  isGoodValue,
  hasShipping,
  shippingCost,
  image,
  mobileImage,
  hasSurprise,
  checkoutUrl,
  mobileOrder,
}: PackageProps) => {
  
  const getCardBackground = () => {
    if (isBestValue) return "bg-gradient-to-b from-[#1e3a5f] to-[#0f1f33]";
    if (isGoodValue) return "bg-white";
    return "bg-white";
  };

  const getHeaderStyle = () => {
    return "bg-black text-white";
  };

  const isLight = !isBestValue;
  const textColor = isLight ? "text-gray-900" : "text-white";
  const subTextColor = isLight ? "text-gray-600" : "text-gray-200";

  const getDeliveryDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <motion.a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`relative block cursor-pointer ${getCardBackground()} rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_40px_rgba(255,255,255,0.15)] transition-all border-2 sm:border-4 border-black ${mobileOrder || ''}`}
    >
      {/* Header Badge - Only for Best Value */}
      {isBestValue && (
        <div 
          className={`${getHeaderStyle()} text-center py-1.5 sm:py-2 font-bold uppercase tracking-wider text-sm sm:text-base !text-[#22c55e]`}
          style={{ WebkitTextStroke: '1px #000', paintOrder: 'stroke fill' }}
        >
          COMPLETE MEMORY REPAIR KIT
        </div>
      )}

      <div className="p-4 sm:p-5">
        {/* Mobile: Two Column Layout */}
        <div className="flex sm:hidden gap-2">
          {/* Left Column: Title + Image */}
          <div className="flex flex-col items-center w-2/5 flex-shrink-0">
            <p 
              className={`font-display text-2xl font-black tracking-tight text-center ${isBestValue ? "text-[#22c55e]" : textColor}`}
              style={isBestValue ? { 
                WebkitTextStroke: '1.5px #000', 
                paintOrder: 'stroke fill'
              } : { 
                WebkitTextStroke: '0.5px #000', 
                paintOrder: 'stroke fill'
              }}
            >
              {`${bottles} BOTTLES`}
            </p>
            <p className={`text-xs font-normal text-center ${subTextColor}`}>{supply} Supply</p>
            <img 
              src={mobileImage} 
              alt={`${bottles} bottles`} 
              className={`h-auto mt-2 ${isBestValue ? "w-[120%] -ml-[10%]" : "w-full"}`}
            />
          </div>

          {/* Right Column: Price + Features */}
          <div className="flex flex-col flex-1 items-center">
            {/* Price */}
            <div className="text-center mb-2 w-full">
              <div className="flex items-center justify-center gap-1.5">
                <span 
                  className={`font-display text-6xl font-black inline-block ${isBestValue ? "text-[#00BF63]" : "text-[#facc15]"}`}
                  style={{ 
                    WebkitTextStroke: `3px ${isBestValue ? '#fff' : '#000'}`,
                    paintOrder: 'stroke fill',
                    ...(isBestValue ? { textShadow: '3px 3px 0 rgba(0,0,0,0.3)' } : {})
                  }}
                >
                  ${perBottle}
                </span>
                <span className={`text-sm font-extrabold ${isBestValue ? "text-white" : "text-gray-900"}`}>
                  PER<br/>BOTTLE
                </span>
              </div>
              <div className="relative inline-flex items-center justify-center py-1 px-3 mt-1">
                <span 
                  className={`font-extrabold text-base relative z-10 ${isBestValue ? "text-[#facc15]" : "text-[#1E3A5F]"}`}
                  style={isBestValue ? { textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' } : {}}
                >
                  YOU SAVE {savings}!
                </span>
                <svg 
                  className="absolute pointer-events-none" 
                  style={{ 
                    width: 'calc(100% + 12px)', 
                    height: 'calc(100% + 8px)',
                    left: '-6px',
                    top: '-4px'
                  }}
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  <ellipse 
                    cx="50" 
                    cy="20" 
                    rx="48" 
                    ry="18" 
                    fill="none" 
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeDasharray="300"
                    strokeLinecap="round"
                    className="animate-pencil-circle"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2 mt-2 justify-center w-full">
                <div className={`flex-1 h-[1px] ${isBestValue ? "bg-gray-400" : "bg-gray-300"}`} />
                <img src={guaranteeBadge} alt="100% Money Back Guarantee" className="w-11 h-11 flex-shrink-0" />
                <span className={`text-sm font-extrabold ${textColor} whitespace-nowrap`}>MONEY-BACK<br/>GUARANTEE</span>
                <div className={`flex-1 h-[1px] ${isBestValue ? "bg-gray-400" : "bg-gray-300"}`} />
              </div>
              <div className="text-center mt-1">
                <p className={`text-sm font-medium ${textColor}`}>
                  Total: <span className="text-gray-400 text-sm" style={{ textDecoration: 'line-through', textDecorationColor: '#ef4444' }}>${originalPrice}</span> <span className={`text-sm font-semibold ${textColor}`}>${salePrice}</span>
                </p>
                {hasShipping ? (
                  <p className="text-sm font-extrabold text-gray-900">+ ${shippingCost} SHIPPING</p>
                ) : (
                  <p className="text-sm font-extrabold text-[#facc15]">+ FREE SHIPPING</p>
                )}
              </div>
            </div>
              {hasSurprise && (
                <p className="text-sm font-bold text-white text-center mt-1">+SURPRISE 🎁</p>
              )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block">
          {/* Title */}
          <div className="text-center mb-2">
            <p 
              className={`font-display text-2xl md:text-3xl font-black tracking-tight ${isBestValue ? "text-[#22c55e]" : textColor}`}
              style={isBestValue ? { 
                WebkitTextStroke: '1.5px #000', 
                paintOrder: 'stroke fill'
              } : {}}
            >
              {`${bottles} BOTTLES`}
            </p>
            <p className={`text-sm font-normal ${subTextColor}`}>{supply} Supply</p>
          </div>

          {/* Product Image */}
          <div className="flex justify-center mb-3 overflow-hidden">
            <img 
              src={image} 
              alt={`${bottles} bottles`} 
              className="w-[240px] md:w-[280px] h-auto scale-125"
            />
          </div>

          {/* Main Price */}
          <div className="text-center mb-2 overflow-visible">
            <div className="flex items-center justify-center gap-1.5 pt-2 pb-1">
              <span 
                className={`font-display text-5xl md:text-6xl font-black inline-block ${isBestValue ? "text-[#00BF63]" : "text-[#facc15]"}`}
                style={{ 
                  WebkitTextStroke: `3px ${isBestValue ? '#fff' : '#000'}`,
                  paintOrder: 'stroke fill',
                  ...(isBestValue ? { textShadow: '3px 3px 0 rgba(0,0,0,0.3)' } : {})
                }}
              >
                ${perBottle}
              </span>
              <span className={`text-sm font-extrabold ${isBestValue ? "text-white" : "text-gray-900"}`}>
                PER<br/>BOTTLE
              </span>
            </div>
            <div className="relative inline-flex items-center justify-center py-3 px-2">
              <span 
                className={`font-extrabold text-sm relative z-10 ${isBestValue ? "text-[#facc15]" : "text-[#1E3A5F]"}`}
                style={isBestValue ? { textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' } : {}}
              >
                YOU SAVE {savings}!
              </span>
              <svg 
                className="absolute pointer-events-none" 
                style={{ 
                  width: 'calc(100% + 16px)', 
                  height: 'calc(100% + 12px)',
                  left: '-8px',
                  top: '-6px'
                }}
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <ellipse 
                  cx="50" 
                  cy="20" 
                  rx="48" 
                  ry="18" 
                  fill="none" 
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeDasharray="300"
                  strokeLinecap="round"
                  className="animate-pencil-circle"
                />
              </svg>
              <style>{`
                @keyframes pencilCircle {
                  0% {
                    stroke-dashoffset: 300;
                    opacity: 1;
                  }
                  25% {
                    stroke-dashoffset: 0;
                    opacity: 1;
                  }
                  75% {
                    stroke-dashoffset: 0;
                    opacity: 1;
                  }
                  90% {
                    stroke-dashoffset: 0;
                    opacity: 0;
                  }
                  100% {
                    stroke-dashoffset: 300;
                    opacity: 0;
                  }
                }
                .animate-pencil-circle {
                  animation: pencilCircle 5s ease-in-out infinite;
                }
              `}</style>
            </div>
            <div className="flex items-center gap-2 mt-2 justify-center w-full">
              <div className={`flex-1 h-[1px] ${isBestValue ? "bg-gray-400" : "bg-gray-300"}`} />
              <img src={guaranteeBadge} alt="100% Money Back Guarantee" className="w-11 h-11 flex-shrink-0" />
              <span className={`text-sm font-extrabold ${textColor} whitespace-nowrap`}>MONEY-BACK<br/>GUARANTEE</span>
              <div className={`flex-1 h-[1px] ${isBestValue ? "bg-gray-400" : "bg-gray-300"}`} />
            </div>
            <div className="text-center mt-1">
              <p className={`text-sm font-medium ${textColor}`}>
                Total: <span className="text-gray-400 text-sm" style={{ textDecoration: 'line-through', textDecorationColor: '#ef4444' }}>${originalPrice}</span> <span className={`text-sm font-semibold ${textColor}`}>${salePrice}</span>
              </p>
              {hasShipping ? (
                <p className="text-sm font-extrabold text-gray-900">+ ${shippingCost} SHIPPING</p>
              ) : (
                <p className="text-sm font-extrabold text-[#facc15]">+ FREE SHIPPING</p>
              )}
            </div>
          </div>

          {hasSurprise && (
            <p className="text-sm font-bold text-white text-center mb-2">+SURPRISE 🎁</p>
          )}
        </div>

        {/* Order now */}
        <div className="text-center mt-2 sm:mt-1 mb-3 sm:mb-3 font-bold" style={{ fontSize: '13px' }}>
          <p className={`${textColor} flex items-center justify-center gap-1`}>
            <img src={truckIcon} alt="truck" className="w-5 h-5" style={isBestValue ? { filter: 'brightness(0) invert(1)' } : { filter: 'brightness(0)' }} /> Order now & receive by <span className="text-primary">{getDeliveryDate()}</span>!
          </p>
        </div>

        {/* CTA Button */}
        <span 
          className={`relative w-full font-black py-2.5 sm:py-3 rounded-lg text-base sm:text-lg md:text-xl uppercase tracking-wide text-white text-center block transition-all hover:brightness-110 active:translate-y-[2px] ${isBestValue ? 'animate-[pulse-shadow-green_2s_ease-in-out_infinite]' : 'animate-[pulse-shadow-blue_2s_ease-in-out_infinite]'}`}
          style={isBestValue 
            ? { background: 'linear-gradient(to bottom, #2edf80 0%, #00BF63 40%, #00a555 60%, #008a44 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.3)' } 
            : { background: 'linear-gradient(to bottom, #2a5080 0%, #1e3a5f 40%, #152a45 60%, #0e1f33 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.3)' }}
        >
          BUY NOW
        </span>

        {/* Secure Checkout */}
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <Lock className={`w-3.5 h-3.5 ${isBestValue ? "text-white" : "text-gray-900"}`} />
          <span className={`text-xs font-semibold ${textColor}`}>Secure Checkout</span>
        </div>

        {/* Payment Icons */}
        <div className="flex justify-center mt-2 sm:mt-3">
          <img src={paymentCards} alt="Visa, Mastercard, Discover, American Express" className="h-5 sm:h-6 w-auto" />
        </div>
      </div>
    </motion.a>
  );
};

const PricingSection = () => {
  const packages: PackageProps[] = [
    {
      title: "Basic",
      bottles: 2,
      supply: "2-Month",
      originalPrice: 198,
      salePrice: 158,
      perBottle: 79,
      originalPerBottle: 217,
      savings: "$40",
      discount: "20%",
      features: [],
      hasShipping: true,
      shippingCost: "9.99",
      image: bottles2,
      mobileImage: bottles2Mobile,
      checkoutUrl: "https://shopxelite.mycartpanda.com/checkout/197776361:1?afid=RuSaUZ4RKO",
      mobileOrder: "order-3 md:order-1",
    },
    {
      title: "Best Value",
      bottles: 6,
      supply: "6-Month",
      originalPrice: 588,
      salePrice: 294,
      perBottle: 49,
      originalPerBottle: 588,
      savings: "$294",
      discount: "50%",
      features: ["3 FREE BOTTLES"],
      isBestValue: true,
      hasSurprise: true,
      image: bottles6,
      mobileImage: bottles6Mobile,
      checkoutUrl: "https://shopxelite.mycartpanda.com/checkout/197777036:1?afid=RuSaUZ4RKO",
      mobileOrder: "order-1 md:order-2",
    },
    {
      title: "Good value!",
      bottles: 3,
      supply: "3-Month",
      originalPrice: 297,
      salePrice: 207,
      perBottle: 69,
      originalPerBottle: 392,
      savings: "$90",
      discount: "30%",
      features: ["1 FREE BOTTLE"],
      isGoodValue: true,
      image: bottles3,
      mobileImage: bottles3Mobile,
      checkoutUrl: "https://shopxelite.mycartpanda.com/checkout/197776654:1?afid=RuSaUZ4RKO",
      mobileOrder: "order-2 md:order-3",
    },
  ];

  return (
    <section id="pricing-section" className="esconder pt-4 sm:pt-6 pb-2 sm:pb-4 bg-[#1a1a1a]">
      <div className="container mx-auto px-3 sm:px-4">

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-4 max-w-5xl mx-auto items-start">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
