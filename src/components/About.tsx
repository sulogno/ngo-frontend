import React from 'react';
import { Heart, Target, Users, Award } from 'lucide-react';

const Stat = ({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-3 rounded-xl bg-[#101010] border border-white/10 p-4 hover:border-[#b0db9c]/40 transition">
    <div className="h-10 w-10 rounded-full bg-[#b0db9c]/15 flex items-center justify-center ring-1 ring-[#b0db9c]/25">
      <Icon className="h-5 w-5 text-[#b0db9c]" aria-hidden="true" />
    </div>
    <div>
      <div className="text-xl font-semibold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-black" aria-labelledby="about-heading">
      {/* layered background accents */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-black to-black" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#b0db9c]/10 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Media: flex-basis by content, no forced aspect, full image visible */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#0f0f0f] p-3">
              <div
                className="flex items-center justify-center md:shrink-0" // prevent unexpected shrink on md+
                style={{ contain: 'content' }}
              >
                <img
                  src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1756875840/White_Yellow_Simple_Humanity_Starts_With_Charity_Instagram_Post_20250831_143938_0000_evlia5.jpg"
                  alt="Achena Sukh volunteers bringing happiness through community programs"
                  className="object-contain object-center max-w-full max-h-[70vh] md:max-h-[60vh] w-auto h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#b0db9c]/8 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <h1
              id="about-heading"
              className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-white to-[#b0db9c] bg-clip-text text-transparent"
            >
              About Achena Sukh
            </h1>

            {/* Estd line */}
            <div className="mb-6 text-xs md:text-sm font-semibold tracking-widest uppercase text-gray-300">
              <time dateTime="2020-03-22">Estd - 22/03/2020</time>
            </div>

            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-gray-300">
                Welcome to <span className="font-semibold text-white">ACHENA SUKH</span>, where “Achena” means unknown and “Sukh” means happiness. We believe in deeper fulfillment—the happiness born from helping others and making a positive impact. Through our activities, both recipients and volunteers experience meaningful well‑being.
              </p>
              <p className="text-gray-300">
                We are Achena Sukh with a noble cause. Our mission is to bring light where there was pause, to uplift lives and make dreams come true. We believe in making a difference—how about you?
              </p>
              <p className="text-gray-400">
                Through our programs and initiatives, we strive to bring unknown happiness, alleviate pain, and create lasting impact. Join the journey toward a brighter tomorrow. Together, we can spread joy and banish sorrow.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Stat icon={Heart} value="75,000+" label="People served" />
              <Stat icon={Target} value="5+" label="Years of experience" />
              <Stat icon={Users} value="75+" label="Villages covered" />
              <Stat icon={Award} value="4,000+" label="Hours of work" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
