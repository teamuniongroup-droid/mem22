import { useState, useEffect, useRef } from "react";
import { Package } from "lucide-react";

export const PricingBanner = () => {
  // Load cached values from localStorage
  const getInitialState = () => {
    const cached = localStorage.getItem('pricingBannerState');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        const savedTime = parsed.savedAt;
        const now = Date.now();
        const elapsedSeconds = Math.floor((now - savedTime) / 1000);
        
        // Calculate remaining time
        const totalSecondsLeft = parsed.minutes * 60 + parsed.seconds - elapsedSeconds;
        
        if (totalSecondsLeft > 0) {
          return {
            minutes: Math.floor(totalSecondsLeft / 60),
            seconds: totalSecondsLeft % 60,
            bottles: parsed.bottles,
            expired: false
          };
        } else {
          return {
            minutes: 0,
            seconds: 0,
            bottles: parsed.bottles,
            expired: true
          };
        }
      } catch (e) {
        console.error('Error parsing cached state:', e);
      }
    }
    return null;
  };

  const initialState = getInitialState();
  
  const [timeLeft, setTimeLeft] = useState({ 
    minutes: initialState?.minutes ?? 10, 
    seconds: initialState?.seconds ?? 0 
  });
  const [timerExpired, setTimerExpired] = useState(initialState?.expired ?? false);
  const [bottlesRemaining, setBottlesRemaining] = useState(initialState?.bottles ?? 173);

  // Timer only starts when the event is fired, not from cache
  const [isActive, setIsActive] = useState(false);
  const secondsElapsedRef = useRef(0);
  const nextDecreaseAtRef = useRef(0);

  // Listen for the custom event to start the timer
  useEffect(() => {
    const handleStartTimer = () => {
      console.log("Starting pricing timer and bottle counter");
      setIsActive(true);
    };

    window.addEventListener("startPricingTimer", handleStartTimer);
    return () => window.removeEventListener("startPricingTimer", handleStartTimer);
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (isActive) {
      localStorage.setItem('pricingBannerState', JSON.stringify({
        minutes: timeLeft.minutes,
        seconds: timeLeft.seconds,
        bottles: bottlesRemaining,
        expired: timerExpired,
        wasActive: isActive,
        savedAt: Date.now()
      }));
    }
  }, [timeLeft, bottlesRemaining, timerExpired, isActive]);

  useEffect(() => {
    if (!isActive) return;

    const getNextDecreaseDelay = () => {
      const progress = secondsElapsedRef.current / 600;
      const minDelay = 3 + progress * 17;
      const maxDelay = 6 + progress * 29;
      return Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay;
    };

    nextDecreaseAtRef.current = getNextDecreaseDelay();

    const timer = setInterval(() => {
      if (timerExpired) {
        clearInterval(timer);
        return;
      }

      secondsElapsedRef.current += 1;

      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        setTimerExpired(true);
        return { minutes: 0, seconds: 0 };
      });

      nextDecreaseAtRef.current -= 1;
      if (nextDecreaseAtRef.current <= 0) {
        const decrements = [2, 3, 6];
        const randomDecrement = decrements[Math.floor(Math.random() * decrements.length)];
        setBottlesRemaining((prev) => {
          const newValue = prev - randomDecrement;
          return newValue >= 8 ? newValue : prev;
        });
        nextDecreaseAtRef.current = getNextDecreaseDelay();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timerExpired]);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div id="pricing-banner" className="bg-black rounded-lg md:rounded-xl py-4 px-3 md:py-8 md:px-6 mb-6 md:mb-10 text-center border border-border">
      <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
        You are among the first 20 people
        <br />
        <span className="text-[#FCD34D]">and will receive a one-on-one online consultation with Dr. Peter Attia, a signed physical book, and a masterclass if you purchase one of the packages below</span>
      </h2>
      <p className="text-xs md:text-base text-white mb-2 md:mb-3">
        Valid only until <span className="font-bold text-[#FCD34D]">{formattedDate}</span>
      </p>

      {timerExpired ? (
        <p className="text-base md:text-xl lg:text-2xl font-bold text-[#FCD34D] animate-pulse">
          This is your last chance – only a few units left
        </p>
      ) : (
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
          <span className="text-sm md:text-lg text-white font-semibold">in the next</span>
          <div className="text-white text-3xl md:text-5xl font-bold">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <span className="text-white text-2xl md:text-4xl font-bold">:</span>
          <div className="text-white text-3xl md:text-5xl font-bold">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>
      )}

      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-sm flex-wrap">
        <span className="flex items-center gap-1.5 sm:gap-2 text-white">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#4ADE80] shadow-[0_0_8px_3px_rgba(74,222,128,0.6)]"></span>
          </span>
          Sales Status: <span className="font-bold text-[#4ADE80]">Active</span>
        </span>
        <span className="flex items-center gap-1.5 sm:gap-2 text-white">
          <Package className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#FCD34D]" />
          Bottles Remaining: <span className="font-bold text-[#FCD34D] animate-pulse text-[13px] sm:text-[17px]">{bottlesRemaining}</span>
        </span>
      </div>
    </div>
  );
};

export default PricingBanner;
