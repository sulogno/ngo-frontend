import React, { useMemo } from 'react';

// Impact images
const photos = [
  'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218448/Impact1_zokxno.jpg',
  'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218473/Impact2_u3hmdr.jpg',
  'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218494/Impact3_srrvrk.jpg',
  'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218535/Impact4_bd2gwi.jpg',
  'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218598/Impact5_wizxxf.jpg',
  'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218636/Impact6_erx400.jpg',
];

// Fisher–Yates shuffle (non-mutating)
function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Build track by duplication for seamless scroll (A + A)
function buildTrack(items: string[]): string[] {
  return [...items, ...items];
}

const CARD_W = 320; // px
const CARD_H = 200; // px

const PhotoScroll = () => {
  // Three distinct tracks (each shuffled once, then duplicated)
  const row1 = useMemo(() => buildTrack(shuffle(photos)), []);
  const row2 = useMemo(() => buildTrack(shuffle(photos)), []);
  const row3 = useMemo(() => buildTrack(shuffle(photos)), []);

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f12] via-[#0b1110] to-[#0b0b0e]" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-[#b0db9c]/30 via-[#78e0dc]/25 to-[#b0db9c]/20 blur-3xl -z-10" />

      <div className="mb-12 px-4">
        <h2 className="bg-gradient-to-r from-white to-[#b0db9c] bg-clip-text text-transparent text-4xl md:text-5xl font-extrabold text-center mb-3">
          Achena Sukh Impact
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto">
          Witness the transformation being created together
        </p>
      </div>

      {/* Row 1: Right -> Left */}
      <Scroller direction="rtl" speed="fast" items={row1} />

      {/* Row 2: Left -> Right */}
      <Scroller direction="ltr" speed="medium" items={row2} className="mt-8" />

      {/* Row 3: Right -> Left (slower) */}
      <Scroller direction="rtl" speed="slow" items={row3} className="mt-8" />
    </section>
  );
};

function Scroller({
  items,
  direction = 'rtl',
  speed = 'medium',
  className = '',
}: {
  items: string[];
  direction?: 'rtl' | 'ltr';
  speed?: 'fast' | 'medium' | 'slow';
  className?: string;
}) {
  const animName = direction === 'rtl' ? 'impact-marquee-left' : 'impact-marquee-right';
  const duration = speed === 'fast' ? '40s' : speed === 'slow' ? '100s' : '70s';

  return (
    <div className={`relative ${className}`}>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d0f12] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0d0f12] to-transparent" />

      {/* Track (duplicated set) */}
      <div
        className="flex will-change-transform"
        style={{
          width: 'max-content',
          animation: `${animName} ${duration} linear infinite`,
        }}
      >
        {items.map((src, idx) => (
          <figure
            key={`${idx}-${src}`}
            className="relative mr-6 last:mr-0 rounded-xl overflow-hidden"
            style={{ width: CARD_W, height: CARD_H }}
          >
            <img
              src={src}
              alt={`Impact ${idx + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {/* Hover overlay */}
            <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
          </figure>
        ))}
      </div>

      {/* Pause on hover for the row */}
      <style>{`
        /* Pause the marquee when hovering over this row's track container */
        .relative:hover > div[style] { 
          animation-play-state: paused; 
        }

        /* Move by exactly 50% of the duplicated track (one full set) */
        @keyframes impact-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes impact-marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Reduced-motion: stop animations */
        @media (prefers-reduced-motion: reduce) {
          div[style*="impact-marquee"] {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </div>
  );
}

export default PhotoScroll;
