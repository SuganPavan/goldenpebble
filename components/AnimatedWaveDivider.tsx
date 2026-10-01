"use client";

interface AnimatedWaveProps {
  topBgColor?: string;
  waveFillColor?: string;
  className?: string;
}

export default function AnimatedWaveDivider({
  topBgColor = "#F8F6EF",
  waveFillColor = "#063F3C",
  className = ""
}: AnimatedWaveProps) {
  return (
    <div
      className={`hidden sm:block relative w-full overflow-hidden leading-none z-10 -mb-1 ${className}`}
      style={{ backgroundColor: topBgColor }}
    >
      {/* Multi-layered Animated SVG Waves matching section theme */}
      <div className="relative h-20 sm:h-28 md:h-36 w-[200%] overflow-hidden">
        {/* Layer 1 - Soft Back Wave */}
        <svg
          className="absolute bottom-0 w-[200%] h-full opacity-40 wave-animate-slow pointer-events-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
            fill={waveFillColor}
          />
        </svg>

        {/* Layer 2 - Mid Wave */}
        <svg
          className="absolute bottom-0 w-[200%] h-full opacity-75 wave-animate-medium pointer-events-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C200,80 400,-10 600,60 C800,110 1000,20 1200,40 L1200,120 L0,120 Z"
            fill={waveFillColor}
          />
        </svg>

        {/* Layer 3 - Solid Front Wave */}
        <svg
          className="absolute bottom-0 w-[200%] h-full opacity-100 wave-animate-fast pointer-events-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C180,95 380,5 580,70 C780,115 980,30 1200,60 L1200,120 L0,120 Z"
            fill={waveFillColor}
          />
        </svg>
      </div>
    </div>
  );
}
