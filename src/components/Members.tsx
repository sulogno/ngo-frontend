import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import membersData from '../pages/members.json';
import coreMembers from '../pages/coremembers.json';

const SLIDE_WIDTH = 320; // px per card
const ANIMATION_DURATION = 65; // seconds for a full loop

const Members = () => {
  const [members, setMembers] = React.useState<any[]>([]);

  React.useEffect(() => {
    setMembers(membersData || []);
  }, []);

  const hasMembers = members?.length > 0;
  const track = hasMembers ? [...members, ...members] : [];

  return (
    <section className="relative py-20">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f12] via-[#0a0f0a] to-[#0b0b0e]" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-[#b0db9c]/30 via-[#78e0dc]/25 to-[#b0db9c]/20 blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="bg-gradient-to-r from-white to-[#b0db9c] bg-clip-text text-transparent text-4xl md:text-5xl font-extrabold mb-3">
            Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated individuals who make the mission possible
          </p>
        </div>

        {/* Animated marquee (desktop) */}
        {hasMembers ? (
          <div
            className="relative overflow-hidden"
            style={
              {
                '--slide-width': `${SLIDE_WIDTH}px`,
                '--duration': `${ANIMATION_DURATION}s`,
              } as React.CSSProperties
            }
          >
            {/* Edge gradients for depth */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d0f12] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0d0f12] to-transparent" />

            <div
              className="group flex will-change-transform"
              style={{
                width: `calc(${track.length} * var(--slide-width))`,
                animation: 'members-marquee var(--duration) linear infinite',
              }}
            >
              {track.map((m, idx) => (
                <div
                  key={`${m._id || m.id || idx}-${idx}`}
                  className="flex-shrink-0 w-[var(--slide-width)] px-3"
                >
                  <article className="h-full rounded-2xl p-6 text-center transition-all duration-300 group-hover:[animation-play-state:paused]">
                    {/* Glass card with gradient border */}
                    <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
                      <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-[#b0db9c]/10 via-[#78e0dc]/10 to-transparent" />
                      <div className="relative p-6">
                        {/* Avatar with gradient ring */}
                        <div className="mx-auto mb-4 h-20 w-20 rounded-full p-[2px] bg-gradient-to-tr from-[#b0db9c] via-[#78e0dc] to-[#b0db9c]">
                          <div className="h-full w-full rounded-full overflow-hidden ring-2 ring-white/20">
                            <img
                              src={m.imageUrl}
                              alt={m.name}
                              className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <h3 className="text-white text-lg font-semibold">{m.name}</h3>
                        <p className="text-[#b0db9c]">{m.position}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="sr-only" aria-live="polite">
              Team list scrolling
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 p-8 text-center text-gray-300 bg-white/5 backdrop-blur-sm">
            Team information will appear here.
          </div>
        )}

       <div className="flex justify-center gap-4 mt-10">
  <Link
    to="/members"
    className="inline-flex items-center gap-2 rounded-full bg-[#2b2b2b] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#b0db9c] hover:text-black hover:scale-[1.03] shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.45)]"
  >
    <span>View All Members</span>
    <ArrowRight className="w-5 h-5" />
  </Link>

  <Link
    to="/core-members"
    className="inline-flex items-center gap-2 rounded-full bg-[#2b2b2b] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#b0db9c] hover:text-black hover:scale-[1.03] shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.45)]"
  >
    <span>Core Members</span>
    <ArrowRight className="w-5 h-5" />
  </Link>
</div>


      </div>

      {/* Animations and motion fallback */}
      <style>{`
        @keyframes members-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--slide-width) * ${members.length})); }
        }
        .group:hover { animation-play-state: paused; }

        @media (prefers-reduced-motion: reduce) {
          .group { animation: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Members;
