import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, HeartHandshake, ShieldCheck, BookOpen, Stethoscope, Leaf, Scale, Shirt } from 'lucide-react';
import Header from '../components/Header';

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4">
    <div className="text-3xl font-extrabold text-[#b0db9c] tracking-tight">{value}</div>
    <div className="text-sm text-gray-300">{label}</div>
  </div>
);

const FieldCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-[#151515] border border-white/10 rounded-2xl p-6 hover:border-[#b0db9c]/50 transition">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-10 w-10 rounded-full bg-[#b0db9c]/15 flex items-center justify-center">
        <Icon className="h-5 w-5 text-[#b0db9c]" aria-hidden="true" />
      </div>
      <h4 className="text-xl font-semibold text-white">{title}</h4>
    </div>
    <p className="text-gray-300 leading-relaxed">{children}</p>
  </div>
);

const CTAButton = ({
  href,
  children,
  variant = 'primary',
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
}) => {
  const common = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-black';
  const styles =
    variant === 'primary'
      ? 'bg-[#b0db9c] text-black hover:bg-white shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.35)]'
      : 'border-2 border-[#b0db9c] text-[#b0db9c] hover:bg-[#b0db9c] hover:text-black';
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${common} ${styles}`}>
        {children}
        <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
      </a>
    );
  }
  return (
    <Link to={href} className={`${common} ${styles}`} aria-label={typeof children === 'string' ? children : undefined}>
      {children}
      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
    </Link>
  );
};

const Story = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-black to-black" />
        <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#b0db9c]/10 blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-center pt-32 pb-20">
            <div className="lg:col-span-7 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218997/Logo2_kuyzqh.png"
                  alt="Achena Sukh logo"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
                />
                <span className="text-sm uppercase tracking-widest text-gray-400">Achena Sukh</span>
              </div>
              <h1 id="hero-heading" className="text-4xl md:text-6xl font-extrabold leading-tight">
                Bringing unknown happiness to every community
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                Compassion in action—education, health, environment, human rights, and dignity in food and clothing—so no one feels forgotten. Join the movement to uplift lives with purpose. 
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <CTAButton href="/donation" external>
                  Donate now
                </CTAButton>
                <CTAButton href="/members" variant="secondary">
                  Meet our team
                </CTAButton>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                <Stat value="10k+" label="Meals & clothing delivered" />
                <Stat value="1.2k" label="Students supported" />
                <Stat value="250+" label="Health interventions" />
              </div>
            </div>

            <div className="lg:col-span-5 relative z-10">
              <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1756528629/generated-image_1_jitqnq.png"
                  alt="Volunteers supporting community programs"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-16" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="story-heading" className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Achena Sukh means unknown happiness—deeper fulfillment born from helping others and finding purpose together. Through programs that meet urgent needs and build lasting capacity, volunteers and communities experience shared dignity and hope.
          </p>
          <blockquote className="mt-8 bg-[#111]/70 border border-white/10 rounded-2xl p-6 text-left">
            <p className="text-xl text-gray-200 leading-relaxed">
              “We bring light where there was pause, uplift lives, and make dreams possible—because kindness and solidarity are the foundations of every resilient community.”
            </p>
          </blockquote>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 pb-8" aria-labelledby="mission-vision-heading">
        <h3 id="mission-vision-heading" className="sr-only">Mission and Vision</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#1f1f1f] border border-white/10 p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="w-8 h-8 text-[#b0db9c]" aria-hidden="true" />
              <h4 className="text-2xl font-bold">Our Mission</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Reach those struggling in silence with not just aid, but hope, empowerment, and belonging—through compassionate outreach and sustainable support.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a deeply committed team, we uplift lives, restore faith in humanity, and help build futures grounded in kindness and solidarity.
            </p>
          </div>

          <div className="bg-[#1f1f1f] border border-white/10 p-8 rounded-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-[#b0db9c]" aria-hidden="true" />
              <h4 className="text-2xl font-bold">Our Vision</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A world where no one feels forgotten, helpless, or alone—where every person has access to dignity, care, and opportunity, regardless of circumstance.
            </p>
          </div>
        </div>
      </section>

      {/* Fields of Work */}
      <section className="container mx-auto px-4 py-16" aria-labelledby="fields-heading">
        <h3 id="fields-heading" className="text-3xl md:text-4xl font-bold text-center mb-10">Our Field of Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <FieldCard icon={BookOpen} title="Education">
            Education is the foundation of a developed society. We enable access for children excluded by poverty and help youth prepare for competitive exams to grow employability.
          </FieldCard>
          <FieldCard icon={Stethoscope} title="Health">
            We expand access to basic healthcare, promote health education, and work to reduce communicable diseases through awareness and interventions in underserved areas.
          </FieldCard>
          <FieldCard icon={Leaf} title="Environment">
            We protect the environment by encouraging sustainable practices, lowering footprints, and conserving shared natural resources for future generations.
          </FieldCard>
          <FieldCard icon={Scale} title="Human Rights">
            We promote and protect rights for marginalized groups, standing against discrimination, exploitation, and violence in pursuit of equality and justice.
          </FieldCard>
          <FieldCard icon={Shirt} title="Food & Clothing">
            We deliver essential food support and clothing—especially in extreme weather—so every person can meet basic needs with dignity.
          </FieldCard>
          <FieldCard icon={HeartHandshake} title="Community Empowerment">
            We co-create local solutions with community partners and volunteers, prioritizing participation, accountability, and long-term resilience.
          </FieldCard>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="container mx-auto px-4 pb-24" aria-labelledby="cta-heading">
        <div className="text-center bg-[#101010] border border-white/10 p-12 rounded-2xl">
          <h3 id="cta-heading" className="text-3xl font-bold mb-4">Join Our Story</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Together, it’s possible to make a measurable difference—one act of unknown happiness at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/donation" external>Donate now</CTAButton>
            <CTAButton href="/members" variant="secondary">Meet our team</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
