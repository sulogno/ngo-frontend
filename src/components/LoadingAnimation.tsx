import React, { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [visible, setVisible] = useState(true);

  // Stage progression
  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 400);   // quick settle-in
    const t2 = setTimeout(() => setStage(2), 1100);  // reveal
    // Auto-hide after reveal if desired (uncomment next lines)
    // const t3 = setTimeout(() => setVisible(false), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      // clearTimeout(t3);
    };
  }, []);

  // Lock background scroll while loader visible
  useEffect(() => {
    if (visible) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading Achena Sukh"
    >
      {/* Backdrop layer */}
      <div className="pointer-events-none absolute inset-0 bg-black" />

      {/* Content wrapper */}
      <div
        className={[
          "relative z-10 transition-all duration-700 ease-out",
          stage === 0 ? "opacity-100 blur-[6px] scale-95 translate-y-3"
          : stage === 1 ? "opacity-100 blur-[2px] scale-98 translate-y-1"
          : "opacity-100 blur-0 scale-100 translate-y-0"
        ].join(" ")}
      >
        <div className="text-center select-none">
          <img
            src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218920/Logo_tioqdb.png"
            alt="Achena Sukh Logo"
            className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto mb-6"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            draggable={false}
          />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            Achena Sukh
          </h1>
          <p className="text-[#b0db9c] text-lg md:text-xl lg:text-2xl">
            Creating Impact, Changing Lives
          </p>
        </div>
      </div>

      {/* Optional subtle pulse underlay */}
      <div className="absolute -z-0 h-80 w-80 md:h-96 md:w-96 rounded-full bg-[#b0db9c]/10 blur-3xl" />

      {/* Reduced motion: tone down transforms */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [aria-label="Loading Achena Sukh"] .transition-all {
            transition: none !important;
          }
          [aria-label="Loading Achena Sukh"] * {
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
