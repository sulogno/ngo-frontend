import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Projects1 = () => {
  const projects = [
    {
      id: 1,
      name: 'মনোরঞ্জন সুখ',
      date: 'Ongoing',
      image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756484364/Plantation_2_ahp6vj.png',
      description:
        'সম্প্রতি আমাদের ট্রাস্টের একটি নতুন মানবিক প্রকল্প হিসেবে একটি বৃদ্ধাশ্রম নির্মাণের পরিকল্পনা গ্রহণ করা হয়েছে ।',
      location: 'করবাড়ি স্টপেজ অশোকপুর , পূর্বময়না পাড়া',
      ongoing: true,
    },
    {
      id: 2,
      name: 'মনোরঞ্জন শিশু উদ্যান',
      date: 'Ongoing',
      image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756484337/Winter_mibozl.png',
      description:
        'মনোরঞ্জন শিশু উদ্যান শুধু আনন্দের স্থান নয়, ভবিষ্যৎ গড়ার প্রথম পাঠশালা.. ।',
      location: 'করবাড়ি স্টপেজ অশোকপুর , পূর্বময়নাপাড়া',
      ongoing: false,
    },
    // {
    //   id: 3,
    //   name: 'কম্বল বিতরণ',
    //   date: 'December',
    //   image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1756484365/Dress_fvc3b8.png',
    //   description:
    //     'শীতকালে রাস্তার ভবঘুরে এবং শীতার্ত মানুষদের নতুন কম্বল বিতরণ করা হয়।',
    //   location: 'Homeless & Needy',
    //   ongoing: false,
    // },
  ];

  return (
    <section className="py-16 bg-[#0e0e0e]">
      {/* Heading and Description */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b0db9c] mb-4">
          Ongoing Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          অচেনা সুখ স্বপ্ন দেখে এমন এক আশ্রয়ের,
যেখানে ভাগ্যের উপহাসে জর্জরিত অসহায় দরিদ্র বৃদ্ধ-বৃদ্ধা এবং শিশুরা পাবে নিরাপদ একটু ঠাঁই —
নিঃশর্ত, নিঃস্বার্থ, আর নিঃশঙ্ক...

আর কিছুদিনের অপেক্ষা...

        </p>
      </div>

      <div className="flex justify-center gap-8 max-w-5xl mx-auto px-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="w-[300px] rounded-2xl overflow-hidden bg-[#141414] ring-1 ring-white/10 hover:shadow-lg hover:ring-[#b0db9c] transition-shadow"
          >
            <div className="relative aspect-[16/10] bg-gradient-to-b from-[#1b1b1b] to-[#121212]">
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {project.ongoing && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black bg-opacity-70 rounded-full px-3 py-1 shadow">
                  <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs text-white font-semibold select-none">LIVE</span>
                </div>
              )}
              <div className="absolute left-4 bottom-4">
                <span className="inline-flex items-center rounded-full bg-[#b0db9c] text-black px-2.5 py-1 text-xs font-semibold shadow">
                  {project.date}
                </span>
              </div>
              <div className="absolute right-4 bottom-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-xs text-white ring-1 ring-white/10">
                  <MapPin className="h-3.5 w-3.5 text-[#b0db9c]" aria-hidden="true" />
                  {project.location}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 tracking-tight text-[#b0db9c]">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed line-clamp-3">{project.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span aria-label={`Scheduled month ${project.date}`}>{project.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span aria-label={`Project location`}>{project.location}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects1;
