interface BotanicalProps {
  className?: string;
  variant?: "leaf-left" | "leaf-right" | "seashell";
}

export default function BotanicalDecoration({
  className = "",
  variant = "leaf-left"
}: BotanicalProps) {
  if (variant === "seashell") {
    return (
      <svg
        className={`w-16 h-16 opacity-30 fill-current text-[#C9A66B] ${className}`}
        viewBox="0 0 100 100"
      >
        <path d="M50 10 C30 10 10 30 10 55 C10 75 30 90 50 90 C70 90 90 75 90 55 C90 30 70 10 50 10 Z M50 20 C65 20 78 35 78 55 C78 70 65 80 50 80 C35 80 22 70 22 55 C22 35 35 20 50 20 Z" />
        <path d="M50 20 L50 80 M35 25 L45 78 M65 25 L55 78 M25 40 L40 75 M75 40 L60 75" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  return (
    <svg
      className={`w-24 h-48 opacity-25 stroke-current text-[#063F3C] fill-none ${className}`}
      viewBox="0 0 100 200"
    >
      <path
        d="M50 10 Q60 50 50 190 M50 30 Q80 20 90 40 Q50 60 50 60 M50 60 Q20 50 10 70 Q50 90 50 90 M50 90 Q85 80 95 100 Q50 120 50 120 M50 120 Q15 110 5 130 Q50 150 50 150"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
