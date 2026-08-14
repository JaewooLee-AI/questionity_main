import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { heroContent } from "@/mocks/home";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    const animatedElements = section.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[600px] md:min-h-[720px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Cozy%20modern%20library%20with%20warm%20ambient%20lighting%2C%20tall%20wooden%20bookshelves%20filled%20with%20colorful%20books%2C%20comfortable%20reading%20nooks%20with%20soft%20armchairs%2C%20people%20reading%20in%20background%20silhouette%2C%20soft%20golden%20hour%20light%20streaming%20through%20large%20windows%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones%2C%20cream%20and%20amber%20color%20palette&width=1600&height=900&seq=hero-bg&orientation=landscape"
          alt="독서 공간"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{ transitionDelay: "0.1s" }}>
            <span className="inline-block bg-white/10 backdrop-blur-sm text-amber-200 border border-amber-200/40 text-xs font-bold px-4 py-1.5 rounded-none mb-6 tracking-widest uppercase font-heading">
              QUESTION + COMMUNITY
            </span>
          </div>

          <h1 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 tracking-tight" style={{ transitionDelay: "0.2s" }}>
            {heroContent.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out text-gray-200 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-sans" style={{ transitionDelay: "0.3s" }}>
            {heroContent.subheadline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col sm:flex-row items-center justify-center gap-3" style={{ transitionDelay: "0.4s" }}>
            <a
              href="#clubs"
              className="bg-[#8C2318] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-none hover:bg-[#721c13] transition-all duration-300 shadow-lg shadow-red-950/30 whitespace-nowrap tracking-wide uppercase border border-red-900/40"
            >
              {heroContent.ctaPrimary}
            </a>
            <a
              href="#how-it-works"
              className="bg-white/10 backdrop-blur-md text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-none hover:bg-white/20 border border-white/40 transition-all duration-300 whitespace-nowrap tracking-wide uppercase"
            >
              {heroContent.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background-50/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-background-50/60 rounded-full" />
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}