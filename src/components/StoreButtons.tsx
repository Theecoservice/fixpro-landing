import Image from "next/image";

interface StoreButtonsProps {
  className?: string;
  theme?: "dark" | "light";
}

export default function StoreButtons({ className = "", theme = "dark" }: StoreButtonsProps) {
  const bg = theme === "dark" ? "bg-black" : "bg-white";
  const text = theme === "dark" ? "text-white" : "text-black";
  const subtext = theme === "dark" ? "text-gray-400" : "text-gray-500";
  const border = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const hover = theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* App Store — uncomment when iOS app passes review */}
      {/* <a
        href="#"
        className={`inline-flex items-center gap-2.5 rounded-xl border ${border} ${bg} px-5 py-3 transition-colors ${hover}`}
      >
        <svg className={`h-7 w-7 ${text}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="flex flex-col">
          <span className={`text-[10px] leading-none ${subtext}`}>Завантажити в</span>
          <span className={`text-sm font-semibold leading-tight ${text}`}>App Store</span>
        </div>
      </a> */}

      {/* Google Play */}
      <a
        href="https://play.google.com/store/apps/details?id=com.fixpro.app"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 rounded-xl border ${border} ${bg} px-5 py-3 transition-colors ${hover}`}
      >
        <Image
          src="/google-play-icon.png"
          alt="Google Play"
          width={28}
          height={28}
          className={`h-7 w-7 ${theme === "dark" ? "invert" : ""}`}
        />
        <div className="flex flex-col">
          <span className={`text-[10px] leading-none ${subtext}`}>Завантажити в</span>
          <span className={`text-sm font-semibold leading-tight ${text}`}>Google Play</span>
        </div>
      </a>
    </div>
  );
}
