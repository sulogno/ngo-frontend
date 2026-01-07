import React, { useEffect, useState } from 'react'; //Manaranjan Sukh Niketan
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  MapPin,
  Calendar,
  Download,
  MessageCircle,
  ChevronLeft,
  Users,
  Phone,
  Mail,
  TrendingUp as TrendingUpIcon,
} from 'lucide-react';
import ProgressBar from '../components/ProgressBar';

interface ProjectDetailsProps {
  onNavigateToDonate?: () => void;
}

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    title: 'Monoranjan-Sukh Niketan',
    subtitle: 'Standing with the disadvantaged, building for the future',
    aboutHeading: 'About the project',
    aboutPara1:
      'Our trust has initiated a humane project to build a home for the elderly who have no shelter. This project will provide a safe haven for the destitute and abandoned senior citizens.',
    aboutPara2: 'We believe every person deserves dignity and care. Your help will make this project possible.',
    locationLabel: 'Location',
    locationValue: 'Korbarhi Stoppage Ashokpur, Purba Moyna Para',
    finishLabel: 'Estimated completion',
    finishValue: 'February 2026',
    planHeading: 'Project Plan (Design)',
    downloadBtn: 'Download Plan (PDF)',
    whatsappBtn: 'Join group (WhatsApp)',
    progressHeading: 'Project Progress',
    needHelpHeading: 'We need your help',
    needHelpPara:
      'This project requires your contribution. Every amount helps save lives and build a better future.',
    donateNow: 'Donate Now',
    learnMore: 'Learn more',
    galleryHeading: 'Project Photo Gallery',
    mapHeading: 'Map',
    ctaHeading: 'Join us',
    ctaPara: 'Every contribution changes a life — please donate today based on your ability.',
    joinGroup: 'Join group',
    footerCopy: 'All rights reserved.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    orgName: 'Achenna Sukh',
    clickMap: '— click map for details',
    backLabel: 'Back',
    gallery1: 'Project Start',
    gallery2: 'Construction',
    gallery3: 'Progress',
    gallery4: 'Current State',
    gallery5: 'Foundation Work',
    gallery6: 'Roofing Work',
    gallery7: 'Interior Work',
    gallery8: 'Finishing Stage',
  },
  bn: {
    title: 'মনোরঞ্জন-সুখ নিকেতন',
    subtitle: 'পিছিয়ে পড়াদের পাশে, ভবিষ্যতের পথে',
    aboutHeading: 'আমাদের প্রকল্প সম্পর্কে',
    aboutPara1:
      'সম্প্রতি আমাদের একটি নতুন মানবিক প্রকল্প হিসেবে একটি বৃদ্ধাশ্রম (আশ্রয়হীনদের জন্য আশ্রয়স্থল) নির্মাণের পরিকল্পনা গ্রহণ করা হয়েছে। এই প্রকল্পটি দুঃস্থ, অসহায় এবং পরিত্যক্ত বয়স্ক মানুষদের জন্য একটি নিরাপদ আশ্রয়স্থল প্রদান করবে।',
    aboutPara2: 'আমরা বিশ্বাস করি প্রতিটি মানুষ সম্মান ও যত্নের যোগ্য। আপনার সাহায্যই প্রকল্পকে বাস্তবে রূপ দেবে।',
    locationLabel: 'অবস্থান',
    locationValue: 'করবাড়ি স্টপেজ অশোকপুর, পূর্বময়না পাড়া',
    finishLabel: 'সম্ভাব্য সমাপ্তি',
    finishValue: 'ফেব্রুয়ারি ২০২৬',
    planHeading: 'প্রকল্প পরিকল্পনা (নকশা)',
    downloadBtn: 'পরিকল্পনা ডাউনলোড করুন (PDF)',
    // whatsappBtn: 'গ্রুপে যোগ দিন (WhatsApp)',
    progressHeading: 'প্রকল্পের ধার্য্য অর্থ',
    needHelpHeading: 'আমরা আপনার সাহায্য খুঁজছি',
    needHelpPara:
      'আমরা সবাই মিলে যদি একসাথে দাঁড়াই, তবে অসহায় মানুষের জন্য একটি সুন্দর ভবিষ্যৎ গড়ে তোলা সম্ভব। আচেনা সুখ বর্তমানে আশ্রম মনোরঞ্জন-সুখ নিকেতন নির্মাণের কাজ চালিয়ে যাচ্ছে, যেখানে গৃহহীন ও অসহায় প্রবীণ নাগরিকদের জন্য স্নেহ, যত্ন ও মর্যাদার পরিবেশ তৈরি করা হবে। যাতে দীর্ঘমেয়াদে প্রবীণদের পাশে দাঁড়ানো যায়। আপনার সহযোগিতা ও অবদান আমাদের জন্য অমূল্য| প্রতিটি অবদান অসহায় প্রবীণদের জীবনে নতুন আশার আলো জ্বালাতে পারে।',
    donateNow: 'যোগদান করুন',
    learnMore: 'আরও জানুন',
    galleryHeading: 'প্রকল্পের বর্তমান পরিস্থিতি',
    mapHeading: 'মানচিত্র',
    ctaHeading: 'আমাদের সাথে যুক্ত হন',
    ctaPara: 'আমরা আপনাকে আন্তরিকভাবে আহ্বান জানাই—আপনার সহযোগিতা ও সমর্থন আমাদের জন্য অমূল্য। আসুন, একসাথে হাত মেলাই এবং প্রবীণ ও অসহায় মানুষের জীবনে নতুন আশার আলো জ্বালাই।।',
    joinGroup: 'গ্রুপে যোগ দিন',
    footerCopy: '',
    phoneLabel: 'ফোন',
    emailLabel: 'ইমেইল',
    orgName: 'অচেনা সুখ',
    clickMap: '— মানচিত্রে ক্লিক করে বিস্তারিত দেখুন',
    backLabel: 'ফিরে যান',
    gallery1: 'প্রকল্প শুরু',
    gallery2: 'নির্মাণ কাজ',
    gallery3: 'অগ্রগতি',
    gallery4: 'বর্তমান অবস্থা',
    gallery5: 'দেওয়াল নির্মাণ',
    gallery6: 'ছাদের কাজ',
    gallery7: 'অভ্যন্তরীণ কাজ',
    gallery8: 'চূড়ান্ত পর্যায়',
  },
};

function ProjectDetails({ onNavigateToDonate }: ProjectDetailsProps) {
  const navigate = useNavigate();

  const PDF_URL = 'https://drive.google.com/file/d/1f4Dlx9m7KmKt_PDySxuy0xhC01nPrFvr/view?usp=sharing';
  // const WHATSAPP_GROUP_URL = 'https://wa.me/917029992422?text=Hello%20I%20want%20to%20know%20more%20about%20Monoranjan-Sukh%20Niketan%20and%20I%20want%20to%20join%20the%20WhatsApp%20group%20of%20Achena%20Sukh';
  const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/FbsCTa7wgruG4ujKz3ZwID';

  const totalAmount = 1200000;
  const collected = 800000;

  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  useEffect(() => {
    const stored = localStorage.getItem('siteLang') as 'bn' | 'en' | null;
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('siteLang', lang);
  }, [lang]);

  const t = (key: string) => TRANSLATIONS[lang][key] ?? key;

  const [galleryImages] = useState([
    { id: 1, title: 'প্রকল্প শুরু', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766005539/WhatsApp_Image_2025-10-12_at_13.53.06_d159e69b_gsja5e.jpg' },
    { id: 2, title: 'নির্মাণ কাজ', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766005553/WhatsApp_Image_2025-12-16_at_12.01.15_e2d957ce_fmcfvn.jpg' },
    { id: 3, title: 'অগ্রগতি', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766008053/WhatsApp_Image_2025-12-15_at_10.32.37_9a38078e_wxmosk.jpg' },
    { id: 4, title: 'বর্তমান অবস্থা', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766005547/WhatsApp_Image_2025-12-16_at_12.01.15_2d37953b_r5iqzh.jpg' },
    { id: 5, title: 'দেওয়াল নির্মাণ', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766005553/WhatsApp_Image_2025-12-16_at_12.01.15_e2d957ce_fmcfvn.jpg' },
    { id: 6, title: 'ছাদের কাজ', image: 'https://res.cloudinary.com/dtbgkad9m/image/upload/v1766008324/WhatsApp_Image_2025-12-16_at_12.01.11_94653d33_xx7oso.jpg' },
    
  ]);

  const handleDonateClick = () => {
    if (onNavigateToDonate) return onNavigateToDonate();
    navigate('/donate');
  };

  const handleDownloadPDF = () => {
    const a = document.createElement('a');
    a.href = PDF_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.download = PDF_URL.split('/').pop() || 'project-plan.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleWhatsAppClick = () => {
    window.location.href = WHATSAPP_GROUP_URL;
  };

  const galleryTitle = (id: number) => {
    const key = `gallery${id}`;
    return t(key);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gradient-to-r from-[#b0db9c] to-[#78e0dc] text-black py-16 px-4 shadow-xl relative">
        <div className="absolute top-6 left-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-black/10 backdrop-blur text-black px-3 py-1.5 rounded-full hover:bg-black/20 transition"
            aria-label={t('backLabel')}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* language selector */}
        {/* <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
          <button
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
            className={`px-3 py-1 rounded-full font-semibold ${lang === 'en' ? 'bg-black/20' : 'bg-black/10'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('bn')}
            aria-pressed={lang === 'bn'}
            className={`px-3 py-1 rounded-full font-semibold ${lang === 'bn' ? 'bg-black/20' : 'bg-black/10'}`}
          >
            বাংলা
          </button>
        </div> */}

        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218997/Logo2_kuyzqh.png" alt="Achena Sukh logo" className="w-18 h-16" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide text-white">{t('title')}</h1>
          <p className="text-xl md:text-2xl font-medium text-white">{t('subtitle')}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="bg-[#121212] rounded-2xl shadow p-8 md:p-12 mb-8 border border-white/10">
          <div className="flex items-start gap-4 mb-6">
            <Users className="w-10 h-10 text-[#b0db9c]" />
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">{t('aboutHeading')}</h2>
              <p className="text-gray-300 leading-relaxed mb-2">{t('aboutPara1')}</p>
              <p className="text-gray-300 leading-relaxed">{t('aboutPara2')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <MapPin className="w-6 h-6 text-[#b0db9c]" />
              <div>
                <p className="text-sm text-gray-400">{t('locationLabel')}</p>
                <p className="text-lg font-medium text-white">{t('locationValue')}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
              <Calendar className="w-6 h-6 text-[#b0db9c]" />
              <div>
                <p className="text-sm text-gray-400">{t('finishLabel')}</p>
                <p className="text-lg font-medium text-white">{t('finishValue')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#121212] rounded-2xl shadow p-8 md:p-12 mb-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
            <TrendingUpIcon className="w-7 h-7 text-[#b0db9c]" /> {t('planHeading')}
          </h3>

          <div className="rounded-xl overflow-hidden shadow-lg h-96 mb-6">
            <img
              src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1766004868/WhatsApp_Image_2025-12-11_at_12.28.01_77d0db92_mjdg65.jpg"
              alt={t('planHeading')}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-6 mb-6">
             <video
              src="https://res.cloudinary.com/dtbgkad9m/video/upload/WhatsApp_Video_2026-01-07_at_20.32.27_myly5w.mp4"
              controls
              autoPlay
              loop
              className="w-full rounded-xl"
            ></video>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <Download className="w-5 h-5" /> {t('downloadBtn')}
            </button>

            {/* <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <MessageCircle className="w-5 h-5" /> {t('whatsappBtn')}
            </button> */}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-[#121212] rounded-2xl shadow p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white">{t('progressHeading')}</h3>
            <ProgressBar current={collected} total={totalAmount} lang={lang} />

            <div className="mt-6 p-6 bg-white/5 rounded-lg border border-white/10">
              <p className="text-lg text-gray-300 mb-4">
                
              </p>
              <p className="text-gray-300 mb-6">{t('needHelpPara')}</p>

              <div className="flex gap-4">
                <button
                  onClick={handleDonateClick}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b0db9c] to-[#78e0dc] text-black px-6 py-3 rounded-full font-semibold"
                >
                 {t('donateNow')}
                </button>
                <button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 border border-[#b0db9c] text-[#b0db9c] px-6 py-3 rounded-full font-semibold hover:bg-[#b0db9c]/10 transition"
                >
                  {t('learnMore')}
                </button>
              </div>
            </div>
          </div>

          <aside className="bg-[#121212] rounded-2xl shadow p-6 sticky top-6 h-fit border border-white/10">
            <h4 className="text-xl font-bold mb-4 text-white">{t('locationLabel')} & info</h4>

            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b0db9c] mt-1" />
                <div>
                  <p className="text-sm text-gray-400">{t('locationLabel')}</p>
                  <p className="text-sm font-medium text-white">{t('locationValue')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#b0db9c] mt-1" />
                <div>
                  <p className="text-sm text-gray-400">{t('phoneLabel')}</p>
                  <p className="text-sm font-medium text-white">+91 7029992422</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#b0db9c] mt-1" />
                <div>
                  <p className="text-sm text-gray-400">{t('emailLabel')}</p>
                  <p className="text-sm font-medium text-white">achenasukh@gmail.com</p>
                </div>
              </div>
            </div>

            <button onClick={handleWhatsAppClick} className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold">
              <MessageCircle className="w-5 h-5" /> {t('joinGroup')}
            </button>
          </aside>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <section className="lg:col-span-2 bg-[#121212] rounded-2xl shadow p-6 border border-white/10">
            <h4 className="text-xl font-bold mb-4 text-white">{t('galleryHeading')}</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.slice(0, 8).map((img) => (
                <div key={img.id} className="rounded-lg overflow-hidden aspect-square shadow-sm border border-white/10">
                  <img src={img.image} alt={galleryTitle(img.id)} className="w-full h-full object-cover" loading="lazy" />
                  <div className="p-2 text-sm text-center text-white bg-black/50">{galleryTitle(img.id)}</div>
                </div>
              ))}
            </div>
          </section>

          {/* <section className="bg-[#121212] rounded-2xl shadow p-6 border border-white/10">
            <h4 className="text-xl font-bold mb-4 text-white">{t('mapHeading')}</h4>
            <div className="rounded-lg overflow-hidden h-72 shadow">
              <iframe
                title="Project Location"
                src="https://www.google.com/maps/place/Kakdwip+karbari+akshaynagar/@21.86384,88.2063201,14z/data=!4m10!1m2!2m1!1sKakdwip+karbari+akshaynagar+Achena+Sukh!3m6!1s0x3a0255bc86f31ab3:0x236764573579291f!8m2!3d21.8516858!4d88.2108952!15sCidLYWtkd2lwIGthcmJhcmkgYWtzaGF5bmFnYXIgQWNoZW5hIFN1a2iSAQRwYXJr4AEA!16s%2Fg%2F11shxv5kt2?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-gray-400 mt-3">{t('locationValue')} {t('clickMap')}</p>
          </section> */}
        </div>

        <section className="bg-gradient-to-r from-[#b0db9c] to-[#78e0dc] rounded-2xl shadow p-8 text-black text-center">
          <h4 className="text-2xl font-bold mb-3">{t('ctaHeading')}</h4>
          <p className="mb-6">{t('ctaPara')}</p>
          <div className="flex gap-4 justify-center">
            <button onClick={handleDonateClick} className="bg-black text-[#b0db9c] px-6 py-3 rounded-full font-semibold">{t('donateNow')}</button>
            <button onClick={handleWhatsAppClick} className="border border-black text-black px-6 py-3 rounded-full">{t('joinGroup')}</button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-300">
          © {new Date().getFullYear()} {t('orgName')} — {t('footerCopy')}
        </div>
      </footer>
    </div>
  );
}

export default ProjectDetails;