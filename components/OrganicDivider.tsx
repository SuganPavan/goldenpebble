interface OrganicDividerProps {
  fillColor?: string;
  position?: "top" | "bottom";
  className?: string;
  useWaterColor?: boolean;
}

export default function OrganicDivider({
  fillColor = "#063F3C",
  position = "top",
  className = "",
  useWaterColor = false
}: OrganicDividerProps) {
  const layer1Color = useWaterColor ? "#B2EBF2" : fillColor;
  const layer2Color = useWaterColor ? "#00ACC1" : fillColor;

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none relative z-10 ${
        position === "top" ? "-mb-1" : "-mt-1"
      } ${className}`}
    >
      <div className="relative h-16 sm:h-24 md:h-32 w-[200%] overflow-hidden">
        {/* Layer 1 - Back Wave */}
        <svg
          className={`absolute bottom-0 w-[200%] h-full opacity-40 wave-animate-medium ${
            position === "top" ? "" : "rotate-180"
          }`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
            fill={layer1Color}
          />
        </svg>

        {/* Layer 2 - Front Wave */}
        <svg
          className={`absolute bottom-0 w-[200%] h-full opacity-90 wave-animate-fast ${
            position === "top" ? "" : "rotate-180"
          }`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 C180,85 380,-15 580,55 C780,105 980,25 1200,45 L1200,120 L0,120 Z"
            fill={layer2Color}
          />
        </svg>
      </div>
    </div>
  );
}
