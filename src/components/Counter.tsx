import React from 'react';
import { Users, Heart, Award } from 'lucide-react';

type Counts = { projects: number; lives: number; members: number };

const TARGET: Counts = { projects: 10, lives: 75000, members: 50 };

function useCountUp(isActive: boolean, target: number, duration = 1400) {
  const [value, setValue] = React.useState(0);
  const startRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!isActive) return;
    let raf = 0;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const p = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(p);
      setValue(Math.round(eased * target));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isActive, target, duration]);

  return value;
}

const StatCard = ({
  icon: Icon,
  label,
  value,
  suffix = '',
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  suffix?: string;
}) => (
  <div className="group relative isolate">
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="rounded-2xl bg-[#1a1a1a] border border-white/10 p-8 text-center shadow-sm transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(176,219,156,0.12)] focus-within:ring-2 focus-within:ring-[#b0db9c]">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#b0db9c]/15 ring-1 ring-[#b0db9c]/25">
        <Icon className="h-7 w-7 text-[#b0db9c]" aria-hidden="true" />
      </div>
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#b0db9c]" aria-live="polite">
        {value.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-1 text-lg text-gray-300">{label}</p>
    </div>
  </div>
);

const Counter = () => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(false);
  const [announced, setAnnounced] = React.useState(false);

  // Observe once at 50% visibility
  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !active) {
          setActive(true);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [active]);

  const projects = useCountUp(active, TARGET.projects, 900);
  const lives = useCountUp(active, TARGET.lives, 1400);
  const members = useCountUp(active, TARGET.members, 1100);

  // Live region for final announcement (screen readers)
  const liveRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (!active || announced) return;
    const done = projects === TARGET.projects && lives === TARGET.lives && members === TARGET.members;
    if (done && liveRef.current) {
      liveRef.current.textContent = `Stats updated: ${TARGET.projects} projects, ${TARGET.lives} lives impacted, ${TARGET.members} team members`;
      setAnnounced(true);
    }
  }, [active, announced, projects, lives, members]);

  return (
    <section ref={sectionRef} className="py-20 bg-[#111]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard icon={Award} label="Projects" value={projects} suffix="+" />
          <StatCard icon={Heart} label="Lives Impacted" value={lives} suffix="+" />
          <StatCard icon={Users} label="Team Members" value={members} />
        </div>
        {/* aria-live region for assistive tech */}
        <div ref={liveRef} className="sr-only" aria-live="polite" />
      </div>
    </section>
  );
};

export default Counter;
