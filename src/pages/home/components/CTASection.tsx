import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
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
      { threshold: 0.2 }
    );
    const elements = section.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20artistic%20illustration%20of%20stacked%20books%20forming%20staircase%20leading%20to%20bright%20light%2C%20warm%20golden%20and%20amber%20tones%2C%20dreamy%20atmosphere%2C%20soft%20gradient%20background%20from%20deep%20warm%20brown%20to%20bright%20gold%2C%20editorial%20illustration%20style%2C%20abstract%20and%20inspiring&width=1600&height=700&seq=cta-bg&orientation=landscape"
          alt="독서 성장"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/80 via-foreground-950/70 to-foreground-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out font-heading font-bold text-2xl md:text-4xl lg:text-5xl text-background-50 leading-tight mb-5" style={{ transitionDelay: "0.1s" }}>
            지금 바로 독서모임에 참여하세요
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out text-background-100/90 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ transitionDelay: "0.2s" }}>
            책 한 권으로 시작하는 새로운 인연과 성장.
            퀘스처니티와 함께 매월 새로운 책, 새로운 사람들을 만나보세요.
          </p>

          <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col sm:flex-row items-center justify-center gap-3" style={{ transitionDelay: "0.3s" }}>
            <a
              href="#clubs"
              className="bg-primary-500 text-background-50 font-semibold text-sm md:text-base px-8 py-3.5 rounded-md hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/30 whitespace-nowrap"
            >
              모임 둘러보기
            </a>
            <Link
              to="/signup"
              className="bg-background-50 text-foreground-950 font-semibold text-sm md:text-base px-8 py-3.5 rounded-md hover:bg-background-100 transition-all duration-300 whitespace-nowrap"
            >
              무료 회원가입
            </Link>
          </div>

          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out mt-6 text-background-50/60 text-xs" style={{ transitionDelay: "0.4s" }}>
            회원가입 시 첫 모임 참여 10% 할인 적용
          </p>
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