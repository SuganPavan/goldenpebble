import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#073F3B] flex flex-col items-center justify-center p-4 text-white overflow-hidden">
      {/* Luxury Ambient Radial Background Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(circle at 50% 45%, rgba(197, 164, 109, 0.35) 0%, transparent 65%)"
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xs mx-auto">
        {/* Golden Pebble Official Logo Image */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 rounded-3xl border border-[#C5A46D]/40 animate-ping opacity-50 pointer-events-none" />

          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#042422] border-2 border-[#C5A46D] flex items-center justify-center p-3 shadow-[0_0_50px_rgba(197,164,109,0.45)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A46D]/20 via-transparent to-white/15 pointer-events-none" />
            
            <Image
              src="https://res.cloudinary.com/dj3hvn4ja/image/upload/v1790838796/golden-pebble/logo.png"
              alt="Hotel Golden Pebble Havelock Logo"
              width={120}
              height={120}
              priority
              className="object-contain w-full h-full drop-shadow-md"
            />
          </div>
        </div>

        {/* Brand Subtitle Typography */}
        <div className="flex flex-col items-center gap-1 mb-6">
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#C5A46D] uppercase">
            HAVELOCK ISLAND • SWARAJ DWEEP
          </span>
          <span className="text-xs font-serif italic text-white/80">
            Boutique Luxury Hospitality
          </span>
        </div>

        {/* Circular Gold Progress Spinner */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-full border-2 border-white/20" />
            <div className="absolute inset-0 rounded-full border-2 border-[#C5A46D] border-t-transparent animate-spin" />
          </div>

          <span className="text-xs font-sans text-[#E8DCC5] font-light tracking-wider animate-pulse">
            Loading Golden Pebble...
          </span>
        </div>
      </div>
    </div>
  );
}
