interface CreativeLoaderProps {
  fullScreen?: boolean
  message?: string
}

export function CreativeLoader({ fullScreen = false, message = "Loading..." }: CreativeLoaderProps) {
  return (
    <div
      className={`${
        fullScreen ? "fixed inset-0 z-50 bg-background/80 backdrop-blur-md" : "min-h-[60vh] w-full bg-transparent"
      } flex flex-col items-center justify-center p-6 select-none`}
    >
      <div className="flex flex-col items-center justify-center text-center">
        {/* Minimal Loader Ring & Cross Icon */}
        <div className="relative flex items-center justify-center w-14 h-14 mb-3">
          {/* Minimal Spinner Ring around Cross */}
          <div className="absolute inset-0 rounded-full border-2 border-[#8B0000]/20 border-t-[#8B0000] animate-spin" />

          {/* Minimal Cross SVG */}
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-[#8B0000] drop-shadow-sm"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cross Vertical Shaft */}
            <rect x="10.5" y="3" width="3" height="18" rx="1" />
            {/* Cross Horizontal Beam */}
            <rect x="5" y="8" width="14" height="3" rx="1" />
          </svg>
        </div>

        {/* Minimal Loading Text */}
        <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{message}</p>
      </div>
    </div>
  )
}
