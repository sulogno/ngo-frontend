import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import Header from "../components/Header";

const toYMD = (d = new Date()) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

const current_date = toYMD();

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      name: "সুখের আহার",
      date: "2020-03-22",
      location: "Kakdwip, Nischintapur, Namkhana",
      image:
        "https://res.cloudinary.com/dtbgkad9m/image/upload/v1768227482/WhatsApp_Image_2026-01-12_at_19.39.50_2_gltthn.jpg",
      description: "রাস্তার ভবঘুরেদের দুপুরের আহার দেওয়া হয়।",
      beneficiaries: 30,
      photos: [],
    },
    {
      id: 2,
      name: "রেশনিং প্রকল্প",
      date: "Every Month, Starting 2024-04-20",
      location: "Kakdwip, Namkhana, Sagar, Pathar pratima, Nischintapur",
      image:
        "https://res.cloudinary.com/dtbgkad9m/image/upload/v1768227483/WhatsApp_Image_2026-01-12_at_19.39.51_1_xkipls.jpg",
      description:
        "দুস্থ ও অসহায় পরিবারের কাছে প্রতি মাসের শুরুতে সারা মাসের রেশন পৌঁছে দেওয়া হয়।",
      beneficiaries: 50,
      photos: [],
    },
    {
      id: 3,
      name: "সুখের পোশাক",
      date: "September - October (DurgaPuja)",
      location: "Kakdwip",
      image:
        "https://res.cloudinary.com/dtbgkad9m/image/upload/v1768227483/WhatsApp_Image_2026-01-12_at_19.39.51_am7rdn.jpg",
      description:
        "প্রতিবছর ছোট ছোট শিশু ও বয়স্ক বৃদ্ধ বৃদ্ধাদের পূজার নতুন পোশাক দেওয়া হয় ।",
      beneficiaries: 900,
      photos: [],
    },
    {
      id: 4,
      name: "কম্বলই সম্বল ",
      date: "December - January (EveryWinter)",
      location: "Kakdwip, Namkhana, Sagar, Nischintapur",
      image:
        "https://res.cloudinary.com/dtbgkad9m/image/upload/v1768230373/WhatsApp_Image_2026-01-12_at_19.39.49_xnkqqi.jpg",
      description:
        "শীতকালে রাস্তার ভবঘুরে এবং শীতার্ত মানুষদের নতুন কম্বল বিতরণ করা হয়।",
      beneficiaries: 700,
      photos: [],
    },
    {
      id: 5,
      name: "বৃক্ষরোপণ",
      date: "August (Every Monsoon)",
      location: "Kakdwip, Namkhana, Sagar",
      image:
        "https://res.cloudinary.com/dtbgkad9m/image/upload/v1768227483/WhatsApp_Image_2026-01-12_at_19.39.50_1_dcuajo.jpg",
      description:
        "প্রতিবছর বর্ষাকালে সমুদ্র উপকূলবর্তী এলাকা এবং বিভিন্ন বিদ্যালয় প্রাঙ্গণে নতুন চারা গাছ লাগানো হয়।",
      beneficiaries: 5000, // not shown
      photos: [],
    },
    {
      id: 6,
      name: "রক্তদান শিবির ",
      date: "Summar (Once a Year)",
      location: "Kakdwip",
      image:
        "https://res.cloudinary.com/dtbgkad9m/image/upload/v1768227482/WhatsApp_Image_2026-01-12_at_19.39.49_dacygv.jpg",
      description: "বছরে একবার  রক্তদান শিবিরের আয়োজন করা হয়।",
      beneficiaries: 100,
      photos: [],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-black to-black" />
        <div className="absolute -top-32 -right-40 h-[28rem] w-[28rem] rounded-full bg-[#b0db9c]/10 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="py-28">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">All Projects</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Discover the impact we&apos;re making worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Projects list */}
      <section className="container mx-auto px-4 pb-20">
        <ul role="list" className="space-y-8">
          {projects.map((project) => {
            const showBeneficiaries = project.name !== "বৃক্ষরোপণ";
            const resolvedDate =
              project.id === 1 ? `${project.date} - ${current_date}` : project.date;

            return (
              <li key={project.id} role="listitem">
                <article className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#b0db9c]/40 hover:shadow-[0_10px_40px_rgba(176,219,156,0.12)] focus-within:border-[#b0db9c]/60">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Media column */}
                    <div className="lg:col-span-5 relative bg-[#161616]">
                      <div className="relative aspect-[16/10] lg:aspect-[4/3]">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="absolute inset-0 w-full h-full object-cover p-6 md:p-8 lg:p-10"
                          loading="lazy"
                        />
                        {/* Badges over media on mobile */}
                        <div className="absolute left-4 top-4 flex flex-wrap gap-2 lg:hidden">
                          <span className="inline-flex items-center rounded-full bg-[#b0db9c] text-black px-2.5 py-1 text-xs font-semibold shadow">
                            {resolvedDate}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-xs text-white ring-1 ring-white/10">
                            {project.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="lg:col-span-7 p-6 md:p-8">
                      <header className="mb-3">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                          {project.name}
                        </h2>
                      </header>
                      <p className="text-gray-300 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Meta row */}
                      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-[#b0db9c]">
                          <Calendar className="w-5 h-5" aria-hidden="true" />
                          <dd aria-label={`Date ${resolvedDate}`}>{resolvedDate}</dd>
                        </div>
                        <div className="flex items-center gap-2 text-[#b0db9c]">
                          <MapPin className="w-5 h-5" aria-hidden="true" />
                          <dd aria-label={`Location ${project.location}`}>
                            {project.location}
                          </dd>
                        </div>
                        {showBeneficiaries && (
                          <div className="flex items-center gap-2 text-[#b0db9c]">
                            <Users className="w-5 h-5" aria-hidden="true" />
                            <dd aria-label={`Beneficiaries ${project.beneficiaries}`}>
                              {project.beneficiaries.toLocaleString()} people
                            </dd>
                          </div>
                        )}
                      </dl>

                      {/* Desktop badges under meta for consistent layout */}
                      <div className="hidden lg:flex gap-2 mt-6">
                        <span className="inline-flex items-center rounded-full bg-[#b0db9c] text-black px-3 py-1 text-xs font-semibold">
                          {resolvedDate}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-white/5 text-white px-3 py-1 text-xs ring-1 ring-white/10">
                          {project.location}
                        </span>
                        {showBeneficiaries && (
                          <span className="inline-flex items-center rounded-full bg-white/5 text-white px-3 py-1 text-xs ring-1 ring-white/10">
                            {project.beneficiaries.toLocaleString()} people
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* subtle underline accent */}
                  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#b0db9c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </article>
              </li>
            );
          })}
        </ul>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
           <Link
            to="/donation"
            className="inline-flex items-center gap-2 rounded-full bg-[#2b2b2b] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#b0db9c] hover:text-black hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.45)]"
            aria-label="View projects overview"
          >
            <span>Donate now</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link> 
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
