'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import Hero from '../components/Hero';
import Image from 'next/image';

const filters = [
  "All",
  "Stress management",
  "Relationship",
  "Habits",
  "Worries",
  "Leadership",
  "Health",
  "Mindfulness",
  "Self-love",
  "Sleep",
];

const liveCourse = {
  title: "Inner Child Work",
  description:
    "Do you find yourself in an inner conflict over and over again? Understand what is it to become aware of your feelings and emotions, and become a more adult and res...",
  author: "Sophie Homeyer",
  imageAlt:
    "Black and white photo of a young woman sitting on a bench looking at a man passing by in a street setting",
};

const mediaList = [
  {
    duration: "1:40",
    title: "How to be mindful to your thoughts and analyse them better",
    author: "Jana Richelsagen",
    imageAlt:
      "Smiling woman sitting at a desk speaking into a microphone with a cozy home background and green plants",
  },
  {
    duration: "2:17",
    title: "How can I love myself more?",
    author: "Jana Richelsagen",
    imageAlt:
      "Black and white close-up photo of a smiling man in his 20s with bright hair and light background",
  },
  {
    duration: "10:02",
    title: "Become emotionally bulletproof",
    author: "Jana Richelsagen",
    imageAlt:
      "Young woman with blonde hair looking directly to the camera seated on a couch with a young man next to her and soft natural light",
  },
];

const expert = {
  name: "Kristina Melzer",
  role: "Therapist",
  languages: "German, English",
  description:
    "Kristina helps you with an integrative approach in coping with depressive moods, (social) anxieties, exhaustion syndromes and stress management as well as in working out resources and strengthening your self-esteem. Kristina is also the right contact person for you in case of partnership or family problems. If you are currently in a crisis, Kristina is ther...",
  tags: ["Stress management", "Relationship", "Habits"],
  imageAlt:
    "Portrait photo of Kristina Melzer, professional female therapist with curly shoulder-length brown hair and warm smile, in a studio with soft lighting",
};

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <main className="bg-white text-black font-now-thin">
      {/* Hero Section */}
      <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 md:py-24 min-h-[90vh] gap-8">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BRAVE, my już się znamy.</h1>
          <h2 className="text-2xl md:text-3xl font-normal mb-4">Sprzedaż to mój żywioł, technologia – druga natura.</h2>
          <p className="text-lg md:text-xl mb-8">Zobacz, co mogę wnieść jako Account Executive.</p>
          <a href="#video" className="inline-block px-8 py-3 bg-[#03295e] text-white rounded-full font-semibold text-lg shadow hover:bg-blue-900 transition focus:outline-none focus:ring-2 focus:ring-blue-400">Zobacz mnie w akcji</a>
        </div>
        <div className="flex-1 flex items-center justify-center relative w-full max-w-xs md:max-w-sm lg:max-w-md mb-8 md:mb-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-[#03295e] rotate-[18deg] rounded-xl shadow-xl z-0" style={{filter: 'blur(0.5px)'}} />
          <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 flex items-end">
            <Image
              src="/herobeztla.png"
              alt="Portret Arkadiusza z uśmiechem"
              fill
              style={{objectFit: 'contain', objectPosition: 'bottom'}}
              className="rounded-2xl shadow-lg select-none"
              priority
            />
          </div>
        </div>
      </section>

      {/* 👋 Cześć, jestem Arkadiusz */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-2 text-center md:text-left justify-center md:justify-start">👋 Cześć, jestem Arkadiusz</h2>
        {/* Infographic row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-center justify-center mb-12">
          {/* Stat 1 */}
          <div className="relative flex flex-col items-center w-full md:w-1/4">
            <div className="bg-gradient-to-br from-[#6C63FF] to-[#A084E8] rounded-2xl shadow-lg px-6 py-6 md:py-8 flex flex-col items-center w-full">
              <span className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">13&nbsp;mln&nbsp;zł</span>
              <span className="text-sm md:text-base text-white/80 mt-2 font-medium text-center">przychodu<br/>B2B/B2C</span>
            </div>
          </div>
          {/* Stat 2 */}
          <div className="relative flex flex-col items-center w-full md:w-1/4">
            <div className="bg-gradient-to-br from-[#FFB86C] to-[#F59E42] rounded-2xl shadow-lg px-6 py-6 md:py-8 flex flex-col items-center w-full">
              <span className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">7&nbsp;mln&nbsp;zł</span>
              <span className="text-sm md:text-base text-white/80 mt-2 font-medium text-center">wypracowane<br/>jako lider</span>
            </div>
          </div>
          {/* Stat 3 */}
          <div className="relative flex flex-col items-center w-full md:w-1/4">
            <div className="bg-gradient-to-br from-[#22C55E] to-[#3B82F6] rounded-2xl shadow-lg px-6 py-6 md:py-8 flex flex-col items-center w-full">
              <span className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">85%</span>
              <span className="text-sm md:text-base text-white/80 mt-2 font-medium text-center">skuteczność<br/>na 500 leadach</span>
            </div>
          </div>
          {/* Stat 4 */}
          <div className="relative flex flex-col items-center w-full md:w-1/4">
            <div className="bg-gradient-to-br from-[#F59E42] to-[#6C63FF] rounded-2xl shadow-lg px-6 py-6 md:py-8 flex flex-col items-center w-full">
              <span className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">4 lata</span>
              <span className="text-sm md:text-base text-white/80 mt-2 font-medium text-center">doświadczenia<br/>w sprzedaży</span>
            </div>
          </div>
        </div>
        {/* Opis pod infografiką */}
        <div className="max-w-3xl mx-auto text-lg md:text-xl bg-white/80 rounded-2xl shadow p-6 md:p-8">
          <p className="mb-4">
            Negocjowałem z menedżerami firm takich jak <b>VOX</b>, <b>BEL-POL</b> czy <b>Noho One</b>.<br/>
            Działam strategicznie i relacyjnie – potrafię słuchać, zadawać trafne pytania i przełożyć potrzeby klienta na konkretną propozycję.
          </p>
        </div>
      </section>

      {/* 🚀 Dlaczego BRAVE? */}
      <section id="whybrave" className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">🚀 Dlaczego BRAVE?</h2>
        <p className="text-lg md:text-xl">
          Bo wiem, że tu sprzedaje się coś więcej niż produkt – sprzedaje się realny rozwój. Wasze podejście do edukacji online robi różnicę: praktyka, społeczność, AI – to wartości, z którymi się identyfikuję.<br/>
          Zanim trafiłem na Wasze ogłoszenie, planowałem zapisać się na 3. edycję AI_devs – wygląda na to, że ta współpraca miała się wydarzyć wcześniej czy później. Pytanie tylko: czy jako student, czy jako Account Executive?
        </p>
      </section>

      {/* 💡 Technologia to mój żywioł */}
      <section id="tech" className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">💡 Technologia to mój żywioł</h2>
        <p className="text-lg md:text-xl">
          Zanim pochłonęła mnie sprzedaż, programowałem – TypeScript, React, Node.js. W moim zespole wdrożyłem AI do ofertowania i automatyzacji obsługi klienta. Interesuję się rozwojem sztucznej inteligencji i jej wpływem na pracę handlowca.<br/>
          Uwielbiam łączyć technologię z komunikacją. To daje przewagę.
        </p>
      </section>

      {/* 🎥 Zobacz mnie w akcji */}
      <section id="video" className="max-w-3xl mx-auto px-4 py-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">🎥 Zobacz mnie w akcji</h2>
        <p className="text-lg md:text-xl mb-6">⬇️ Mój film wideo (autoplay po wejściu w sekcję)</p>
        <VideoPlayer />
      </section>

      {/* 🎯 Co wnoszę jako Account Executive */}
      <section id="co-wnosze" className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">🎯 Co wnoszę jako Account Executive:</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl">
          <li>Doświadczenie w prowadzeniu procesu sprzedaży end-to-end</li>
          <li>Skuteczność w pracy na leadach i zamykaniu wysokobudżetowych kontraktów</li>
          <li>Umiejętność rozmowy z C-level i HR – językiem korzyści, nie funkcji</li>
          <li>Techniczne zrozumienie produktu – i zdolność do jego prostego wyjaśniania</li>
          <li>Gotowość do współpracy z zespołem produktowym przy customizacji oferty</li>
          <li>Energia, intuicja, drive – czyli to, czego nie da się wpisać w Excela</li>
        </ul>
      </section>

      {/* 📩 Gotowy do działania */}
      <section id="contact" className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">📩 Gotowy do działania</h2>
        <p className="text-lg md:text-xl mb-4">
          Jestem gotów, by realnie wpłynąć na rozwój BRAVE – jako Account Executive, który wie, jak rozmawiać, słuchać i dowozić.<br/>
          Zróbmy razem coś naprawdę wartościowego.
        </p>
        <div className="bg-gray-50 rounded-xl p-6 shadow max-w-xl">
          <div className="mb-2"><span className="font-semibold">Imię i nazwisko:</span> Arkadiusz Orłowski</div>
          <div className="mb-2"><span className="font-semibold">Lokalizacja:</span> Warszawa</div>
          <div className="mb-2"><span className="font-semibold">Email:</span> <a href="mailto:arkad.orlowski@gmail.com" className="text-[#03295e] underline">arkad.orlowski@gmail.com</a></div>
          <div><span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/arkadiusz-orlowski-661b0116a" target="_blank" rel="noopener" className="text-[#03295e] underline">linkedin.com/in/arkadiusz-orlowski-661b0116a</a></div>
        </div>
      </section>
    </main>
  );
}

// --- VideoPlayer component ---
function VideoPlayer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div ref={ref} className="w-full flex flex-col items-center">
      <div className="relative w-full" style={{height: '80vh', maxHeight: 600}}>
        {visible ? (
          <video
            src="/newvideo.mp4"
            controls
            autoPlay
            playsInline
            className="custom-video-player rounded-2xl w-full h-full border-2 border-white bg-white object-contain"
            style={{minHeight: 320, maxHeight: '80vh', background: '#fff'}}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-2xl shadow-lg border-2 border-[#03295e] text-6xl text-gray-400">
            <span>🎬</span>
          </div>
        )}
      </div>
    </div>
  );
} 