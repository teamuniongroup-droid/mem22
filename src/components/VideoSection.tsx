import { motion } from "framer-motion";
import { useEffect } from "react";
import newsLogos from "@/assets/news-logos-dark-final.png";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { id: string }, HTMLElement>;
    }
  }
}

const VideoSection = () => {
  useEffect(() => {
    // Load Vturb player script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/d0d64cb2-dca3-4be6-983c-3bc700b6a1d8/players/6985ff01e1b5a50edd14669a/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    // Add CSS for hidden elements
    const style = document.createElement("style");
    style.textContent = `.esconder { display: none; }`;
    document.head.appendChild(style);

    // Flag to disable fullscreen after scroll
    let fullscreenDisabled = false;

    // Setup player ready listener
    const setupPlayer = () => {
      const player = document.querySelector("vturb-smartplayer");
      if (player) {
        const delaySeconds = 5;
        
        player.addEventListener("player:ready", function() {
          // Display hidden elements after delay (synced with video time)
          (player as any).displayHiddenElements(delaySeconds, [".esconder"], {
            persist: true
          });

          // Fullscreen on play (only if not disabled)
          player.addEventListener("video:play", () => {
            if (!fullscreenDisabled) {
              (player as any).fullscreen("on");
              player.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          });

          player.addEventListener("video:pause", () => {
            if (!fullscreenDisabled) {
              (player as any).fullscreen("off");
            }
          });
          
          // Check every 500ms if .esconder elements are now visible
          const checkVisibility = setInterval(() => {
            const pricingSection = document.querySelector('.esconder') as HTMLElement;
            
            // If no elements with .esconder exist OR the element is visible
            if (!pricingSection || (pricingSection && getComputedStyle(pricingSection).display !== 'none')) {
              if (!fullscreenDisabled) {
                fullscreenDisabled = true;
                clearInterval(checkVisibility);
                
                // Exit fullscreen
                (player as any).fullscreen("off");
                if (document.fullscreenElement) {
                  document.exitFullscreen().catch(() => {});
                }
                
                // Start the pricing timer and bottle counter
                window.dispatchEvent(new CustomEvent("startPricingTimer"));
                
                // Scroll to pricing section after small delay
                setTimeout(() => {
                  const pricingSection = document.getElementById("pricing-section");
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }, 500);
              }
            }
          }, 500);
        });
      }
    };

    // Wait for script to load then setup player
    script.onload = setupPlayer;

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
      if (style.parentNode) {
        style.remove();
      }
    };
  }, []);

  return (
    <section className="bg-background py-4 sm:py-8 md:py-12 pb-0">
      <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg sm:text-2xl md:text-4xl font-bold text-center mb-4 sm:mb-8 leading-tight"
        >
          <span className="text-primary">URGENT:</span>{" "}
          <span className="text-foreground">
            Scientists uncover a natural cure for Memory Loss that can be made at home
          </span>
        </motion.h1>

        {/* Vturb Video Player Container */}
        <div className="max-w-[70%] sm:max-w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-lg overflow-hidden shadow-2xl"
          >
            <vturb-smartplayer 
              id="vid-6985ff01e1b5a50edd14669a" 
              style={{ display: "block", margin: "0 auto", width: "100%", maxWidth: "100%" }}
            />
          </motion.div>

          {/* Live indicators - aligned with video */}
          <div className="flex justify-between items-center gap-2 mt-2 sm:mt-4 text-[9px] sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 font-semibold">LIVE</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-semibold">RECORDING MAY BE REMOVED SOON</span>
            </div>
          </div>
        </div>

        {/* News logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-4"
        >
          <img 
            src={newsLogos} 
            alt="As seen on The New York Times, CBS, abc, FOX, CNN" 
            className="max-w-full h-auto md:max-w-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
