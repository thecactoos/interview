import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center bg-[#f6f8fb] px-4 md:px-0 font-now-thin">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-0 h-full">
        {/* Left: Hero Text */}
        <div className="flex-1 flex flex-col justify-center items-start text-left h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-[#03295e] leading-tight mb-6">
            BRAVE, my już się znamy.<br />
            <span className="font-normal">Teraz czas, żebyśmy zaczęli działać razem.</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-normal text-[#03295e] opacity-90 mb-8">
            Sprzedaż to mój żywioł, technologia – druga natura. Wiem, jak rozmawiać z klientem, jak go słuchać i jak dowozić wynik.
          </h2>
          <a
            href="#co-wnosze"
            className="inline-block px-8 py-3 bg-[#03295e] text-white rounded-full font-semibold text-lg shadow hover:bg-blue-900 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Zobacz, co mogę wnieść jako Account Executive w BRAVE
          </a>
        </div>
        {/* Right: Hero Image - transparent background, no rotated square */}
        <div className="flex-1 flex items-center justify-center relative w-full max-w-xs md:max-w-sm lg:max-w-md h-full">
          <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 flex items-end">
            <Image
              src="/herobeztla.png"
              alt="Portret kandydata do BRAVE"
              fill
              style={{objectFit: 'contain', objectPosition: 'bottom'}}
              className="rounded-2xl shadow-lg select-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 