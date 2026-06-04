import type { ReactNode } from "react";
import { FaMobileAlt } from "react-icons/fa";
import PhotoDark from "~/assets/images/photo-me-dark.png";
import PhotoLight from "~/assets/images/photo-me-white.png";

const STARS = [
  { top: "8%", left: "18%", size: "2px", delay: "0s" },
  { top: "14%", left: "72%", size: "3px", delay: "0.8s" },
  { top: "22%", left: "88%", size: "2px", delay: "1.4s" },
  { top: "38%", left: "6%", size: "2px", delay: "0.3s" },
  { top: "52%", left: "92%", size: "2px", delay: "1.9s" },
  { top: "68%", left: "12%", size: "3px", delay: "1.1s" },
  { top: "76%", left: "78%", size: "2px", delay: "0.6s" },
  { top: "84%", left: "42%", size: "2px", delay: "2.2s" },
  { top: "30%", left: "48%", size: "1px", delay: "1.6s" },
  { top: "62%", left: "58%", size: "1px", delay: "0.4s" },
] as const;

const glassCardClass =
  "rounded-xl border border-border-light bg-background-lightElevated/80 shadow-cardLight backdrop-blur-md dark:border-border-dark dark:bg-background-darkElevated/75 dark:shadow-planetGlow";

const SpaceBackground = () => (
  <div
    className="pointer-events-none absolute inset-0 z-0"
    aria-hidden="true"
  >
    <div className="absolute inset-[-15%] bg-hero-galaxy-nebula opacity-50 dark:opacity-100" />
    <div className="absolute inset-[-8%] bg-hero-galaxy-core opacity-60 animate-pulseGlow motion-reduce:animate-none dark:opacity-100" />
    <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-blue opacity-40 blur-3xl dark:opacity-70" />
    <div className="absolute left-[28%] top-[38%] h-[35%] w-[35%] rounded-full bg-glow-violet opacity-30 blur-3xl animate-pulseGlow motion-reduce:animate-none dark:opacity-60 [animation-delay:1.5s]" />

    {STARS.map((star, index) => (
      <span
        key={index}
        className="absolute rounded-full bg-text-lightPrimary/25 animate-twinkle motion-reduce:animate-none dark:bg-text-darkPrimary/70"
        style={{
          top: star.top,
          left: star.left,
          width: star.size,
          height: star.size,
          animationDelay: star.delay,
        }}
      />
    ))}
  </div>
);

const OrbitRings = () => (
  <div
    className="pointer-events-none absolute inset-0 z-[1] [perspective:900px]"
    aria-hidden="true"
  >
    <div className="absolute inset-0 flex items-center justify-center animate-orbitTilt motion-reduce:animate-none">
      <div className="relative h-[112%] w-[112%] rounded-full border-2 border-transparent bg-gradient-accent p-[1px] opacity-30 shadow-glowBlue dark:opacity-55">
        <div className="h-full w-full rounded-full border border-accent-cyan/20 bg-transparent dark:border-accent-cyan/30" />
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan opacity-70 shadow-glowBlue dark:opacity-100" />
      </div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center animate-orbitSlow motion-reduce:animate-none [animation-direction:reverse]">
      <div className="h-[125%] w-[125%] rounded-full border border-dashed border-accent-violet/15 dark:border-accent-violet/30" />
    </div>

    <div className="absolute inset-0 hidden items-center justify-center md:flex animate-orbit motion-reduce:animate-none [animation-duration:26s]">
      <div className="h-[105%] w-[90%] rounded-full border border-accent-blue/10 dark:border-accent-blue/20" />
    </div>
  </div>
);

const FloatingCodeCard = () => (
  <div
    className={`absolute -left-2 top-[10%] z-30 hidden p-3 sm:block ${glassCardClass} animate-floatSlow motion-reduce:animate-none [animation-delay:0.4s]`}
    aria-hidden="true"
  >
    <div className="space-y-1.5">
      <div className="h-1 w-14 rounded-full bg-accent-blue/80 dark:bg-accent-blue/90" />
      <div className="h-1 w-10 rounded-full bg-accent-violet/70 dark:bg-accent-violet/80" />
      <div className="h-1 w-12 rounded-full bg-accent-cyan/60 dark:bg-accent-cyan/70" />
      <div className="h-1 w-8 rounded-full bg-accent-green/50 dark:bg-accent-green/60" />
    </div>
  </div>
);

const FloatingIconCard = ({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className: string;
  delay: string;
}) => (
  <div
    className={`absolute z-30 flex h-11 w-11 items-center justify-center text-base font-bold text-accent-blue dark:text-accent-violet sm:h-12 sm:w-12 sm:text-lg ${glassCardClass} animate-floatSlow motion-reduce:animate-none ${className}`}
    style={{ animationDelay: delay }}
    aria-hidden="true"
  >
    {children}
  </div>
);

const ThemeAvatar = () => (
  <div className="relative z-20 h-full w-full animate-floatSlow motion-reduce:animate-none">
    <img
      src={PhotoLight}
      alt="Juan Gabriel Benitez Rinas"
      className="block h-full w-full object-contain dark:hidden"
      width={520}
      height={520}
      draggable={false}
    />
    <img
      src={PhotoDark}
      alt="Juan Gabriel Benitez Rinas"
      className="hidden h-full w-full object-contain dark:block"
      width={520}
      height={520}
      draggable={false}
    />
  </div>
);

export const HeroPhoto = () => (
  <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center overflow-visible sm:h-[380px] sm:w-[380px] lg:h-[520px] lg:w-[520px]">
    <SpaceBackground />
    <OrbitRings />
    <ThemeAvatar />

    <FloatingCodeCard />
    <FloatingIconCard className="right-0 top-[8%] sm:-right-2" delay="1s">
      {"</>"}
    </FloatingIconCard>
    <FloatingIconCard
      className="right-0 bottom-[14%] sm:-right-1 sm:bottom-[16%]"
      delay="1.7s"
    >
      <FaMobileAlt size={16} aria-hidden="true" />
    </FloatingIconCard>
  </div>
);
