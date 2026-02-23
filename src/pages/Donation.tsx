import { Heart, Users, Utensils, Home, BookOpen, Zap, MessageCircle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useRef } from "react";

const WHATSAPP_NUMBER = "917029992422"; // Replace with actual number
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const BANK_DETAILS_PDF = "https://drive.google.com/file/d/1_ufhGECEZWDkcYc31IFyIaVUbbUbRI5p/view?usp=sharing";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
}

const StickyCard = ({ cards }: { cards: CardData[] }) => {
  const container = useRef(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const imageElements = imageRefs.current;
      const totalCards = imageElements.length;

      if (!imageElements[0]) return;

      gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        if (!imageElements[i]) continue;
        gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentImage = imageElements[i];
        const nextImage = imageElements[i + 1];
        const position = i;
        if (!currentImage || !nextImage) continue;

        scrollTimeline.to(
          currentImage,
          {
            scale: 0.7,
            rotation: 5,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextImage,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    <div className="relative h-full w-full" ref={container}>
      <div className="sticky-cards relative flex h-screen sm:h-[80vh] md:h-screen lg:h-screen w-full items-center justify-center overflow-hidden p-2 sm:p-3 lg:p-8">
        <div className="relative h-[85%] sm:h-[80%] md:h-[85%] lg:h-[90%] w-[95%] sm:w-[90%] md:w-[85%] lg:w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl">
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={card.image}
              alt={card.alt || ""}
              className="rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl absolute h-full w-full object-cover"
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Donation = () => {
  const achievements = [
    {
      icon: Utensils,
      number: "10k+",
      title: "Meals & Food Delivered",
      description: "Nourishing communities with nutritious meals",
    },
    {
      icon: Home,
      number: "13+",
      title: "Supporting Home Building",
      description: "Providing shelter to those in need",
    },
    {
      icon: Users,
      number: "75k+",
      title: "People Served",
      description: "Lives touched and transformed",
    },
    {
      icon: Zap,
      number: "4000+",
      title: "Hours of Work",
      description: "Dedicated service and commitment",
    },
    {
      icon: BookOpen,
      number: "1.2k",
      title: "Students Supported",
      description: "Empowering education and future",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Section - Logo, Heading, Description, Photo */}
      <section className="pt-32 pb-16 px-6 md:px-12 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Logo, Heading and Description */}
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218997/Logo2_kuyzqh.png"
                alt="Achena Sukh logo"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
              />
              <span className="text-sm uppercase tracking-widest text-gray-400">
                Achena Sukh
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              A Step Toward Brighter Lives
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              This isn’t about giving, it’s about moving forward.
              Each step you take with Achena Sukh brings food, shelter, and education to someone in need.
              Together we’ve already brightened 75k+ lives — and with your support, even more futures can shine.
            </p>
          </div>

          {/* Right Column - Photo */}
          <div className="lg:col-span-5">
            <img
              src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1771806276/WhatsApp_Image_2026-02-23_at_05.52.59_cp2ev6.jpg"
              alt="Achena Sukh community work"
              className="w-full h-90 object-cover rounded-xl shadow-lg border border-[#b0db9c]/20"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 md:px-12 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#b0db9c]">Achena Sukh Impact</h2>
          <p className="text-gray-400 text-lg">Witness the transformation being created together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="bg-[#1f1f1f] p-8 rounded-xl border border-[#b0db9c]/20 hover:border-[#b0db9c]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#b0db9c]/10 group"
              >
                <div className="mb-4 inline-block p-3 bg-[#b0db9c]/10 rounded-lg group-hover:bg-[#b0db9c]/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-[#b0db9c]" />
                </div>
                <h3 className="text-3xl font-bold text-[#b0db9c] mb-2">{achievement.number}</h3>
                <h4 className="text-xl font-semibold mb-2 text-white">{achievement.title}</h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sticky Card Gallery */}
      <ReactLenis root>
        <section className="relative w-full min-h-screen md:min-h-[120vh] lg:min-h-[150vh] max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="mb-12 md:mb-16 lg:mb-20 text-center pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#b0db9c]">Our Community & Work</h2>
            <p className="text-base sm:text-lg md:text-lg text-gray-400">Scroll through our impactful moments</p>
          </div>
          <StickyCard
            cards={[
              {
                id: 1,
                image: "https://res.cloudinary.com/dtbgkad9m/image/upload/v1771808849/WhatsApp_Image_2026-02-21_at_14.56.17_dekwxp.jpg",
                alt: "Community event 1",
              },
              {
                id: 2,
                image: "https://res.cloudinary.com/dtbgkad9m/image/upload/v1771808866/WhatsApp_Image_2026-02-23_at_06.34.32_erprxc.jpg",
                alt: "Community event 2",
              },
              {
                id: 3,
                image: "https://res.cloudinary.com/dtbgkad9m/image/upload/v1771808858/WhatsApp_Image_2026-02-23_at_06.34.31_cpc0cm.jpg",
                alt: "Community event 3",
              },
              {
                id: 4,
                image: "https://res.cloudinary.com/dtbgkad9m/image/upload/v1766005539/WhatsApp_Image_2025-10-12_at_13.53.06_d159e69b_gsja5e.jpg",
                alt: "Community event 4",
              },
            ]}
          />
        </section>
      </ReactLenis>

      {/* Action Buttons Section */}
      <section className="py-16 px-6 md:px-12 container mx-auto">
        <div className="bg-gradient-to-r from-[#b0db9c]/10 to-transparent p-12 rounded-xl border border-[#b0db9c]/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
            Achena Sukh is Here to Help
          </h2>
          <p className="text-center text-gray-300 mb-10 text-lg">
            If you face any issues while making a donation, don’t worry — we’re always here for you.
            Reach out to us directly on WhatsApp for quick assistance, or download our bank details to complete your support safely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-[#b0db9c] px-8 py-4 text-black font-semibold shadow-lg transition
                         hover:bg-white hover:shadow-[0_0_30px_rgba(176,219,156,0.6)]
                         active:scale-[0.99]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Contact with Achena Sukh
            </a>

            {/* Bank Details Button */}
            <a
              href={BANK_DETAILS_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-[#b0db9c] px-8 py-4 text-black font-semibold shadow-lg transition
                         hover:bg-white hover:shadow-[0_0_30px_rgba(176,219,156,0.6)]
                         active:scale-[0.99]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Bank Details
            </a>
          </div>

          {/* Google Form Link */}
          {/* <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Or donate through our secure form</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScmmGDN_28BP1x8R71x97zigdW94Q9FOyUq3R6n1uD4CfSUnA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2e2e2e] hover:bg-[#b0db9c] hover:text-black text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 border border-[#b0db9c]/30 hover:border-[#b0db9c]"
            >
              Open Donation Form
            </a>
          </div> */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16 px-6 md:px-12 border-t border-[#b0db9c]/20">
        <div className="container mx-auto text-center">
          <img
            src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218997/Logo2_kuyzqh.png"
            alt="Achena Sukh footer logo"
            className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-lg"
          />
          <h3 className="text-2xl font-bold text-[#b0db9c] mb-2">Achena Sukh</h3>
          <p className="text-gray-400 mb-6">A non profitable charitable trust </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Achena Sukh.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Donation;
