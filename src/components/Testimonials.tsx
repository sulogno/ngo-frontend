import React from 'react'; // Voice of our members
import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  position: string;
  Occupation: string;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        'We are not born with a specific race, religion, or language, what we are born with that is a hunger...',
      name: 'Kalyan Debnath',
      position: 'Chairperson',
      Occupation: 'Business',
    },
    {
      quote:
        'Achena Sukh has taught me so much happiness, peace, and satisfaction in standing by the side of helpless people.',
      name: 'Laxman Das',
      position: 'Vice-Chairperson',
      Occupation: 'Ration dealer',
    },
    {
      quote: 'Something greater than religion is kindness and service.',
      name: 'Soumen Purkait',
      position: 'Secretary',
      Occupation: 'Pvt Teacher',
    },
    {
      quote:
        'I dream of an India where no one will be illiterate. No young man will be unemployed. I cannot afford to change the country. I can try to change my own city a little. And that is why, believing in the mantra of service to life through knowledge of Shiva, I have joined Achena Sukh.',
      name: 'Saroj Dey',
      position: 'Assistant Secretary',
      Occupation: 'Govt Teacher',
    },
  ];

  // Choose a featured testimonial (first one here; can randomize)
  const [featured, ...rest] = testimonials;

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="bg-gradient-to-r from-white to-[#b0db9c] bg-clip-text text-transparent text-4xl md:text-5xl font-extrabold mb-4">
            Voices of our members
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Together, meaningful voices inspire action and trust in the mission.
          </p>
        </div>

        {/* Featured quote */}
        <FeaturedTestimonial t={featured} />

        {/* Grid of the rest */}
        <ul role="list" className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((t, idx) => (
            <li key={idx} role="listitem">
              <TestimonialCard t={t} index={idx + 1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

function FeaturedTestimonial({ t }: { t: Testimonial }) {
  const [expanded, setExpanded] = React.useState(false);
  const contentId = `featured-quote`;
  const buttonId = `featured-toggle`;
  const isLong = t.quote.length > 160;

  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#101010] to-[#0a0a0a] p-8 md:p-10">
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#b0db9c]/10 blur-3xl pointer-events-none" />
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#b0db9c]/15 ring-1 ring-[#b0db9c]/25">
            <Quote className="h-6 w-6 text-[#b0db9c]" aria-hidden="true" />
          </span>
        </div>
        <div>
          <blockquote
            id={contentId}
            className={`text-xl text-gray-200 leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}
            aria-describedby={buttonId}
          >
            “{t.quote}”
          </blockquote>

          {isLong && (
            <div className="mt-2">
              <button
                id={buttonId}
                type="button"
                className="text-sm font-semibold text-[#b0db9c] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                aria-expanded={expanded}
                aria-controls={contentId}
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? 'See less' : 'See more'}
              </button>
            </div>
          )}

          <footer className="mt-5 border-t border-white/10 pt-4">
            <cite className="not-italic text-white font-semibold">{t.name}</cite>
            <div className="text-gray-400 text-sm">
              <span>{t.position}</span> • <span className="text-gray-500">{t.Occupation}</span>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const [expanded, setExpanded] = React.useState(false);
  const contentId = `quote-${index}`;
  const buttonId = `toggle-${index}`;
  const isLong = t.quote.length > 140;

  return (
    <article className="h-full rounded-2xl bg-[#141414] border border-white/10 p-6 transition-all duration-300 hover:border-[#b0db9c]/40 hover:shadow-[0_10px_40px_rgba(176,219,156,0.12)] focus-within:border-[#b0db9c]/60">
      <Quote className="w-7 h-7 text-[#b0db9c] mb-3 opacity-70" aria-hidden="true" />
      <blockquote
        id={contentId}
        className={`text-gray-300 italic leading-relaxed ${expanded ? '' : 'line-clamp-4'}`}
        aria-describedby={buttonId}
      >
        “{t.quote}”
      </blockquote>

      {isLong && (
        <div className="mt-2">
          <button
            id={buttonId}
            type="button"
            className="text-sm font-semibold text-[#b0db9c] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            aria-expanded={expanded}
            aria-controls={contentId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        </div>
      )}

      <footer className="mt-5 pt-4 border-t border-white/10">
        <cite className="not-italic text-white font-semibold">{t.name}</cite>
        <div className="text-gray-400 text-sm">
          <span>{t.position}</span> • <span className="text-gray-500">{t.Occupation}</span>
        </div>
      </footer>
    </article>
  );
}

export default Testimonials;
