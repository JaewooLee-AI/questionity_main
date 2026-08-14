import { useEffect, useRef } from "react";

export default function AboutSection() {
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
      { threshold: 0.15 }
    );
    const elements = section.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="w-full px-4 md:px-8 lg:px-12 py-20 md:py-28 bg-background-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out order-2 lg:order-1">
            <div className="relative rounded-none overflow-hidden aspect-[4/3]">
              <img
                src="https://readdy.ai/api/search-image?query=Warm%20and%20cozy%20group%20of%20diverse%20young%20Korean%20people%20sitting%20around%20a%20wooden%20table%20in%20a%20modern%20cafe%20discussing%20books%2C%20coffee%20cups%20and%20open%20books%20on%20table%2C%20warm%20natural%20lighting%20from%20window%2C%20laughing%20and%20engaged%20conversation%2C%20editorial%20lifestyle%20photography%2C%20warm%20earthy%20tones&width=800&height=600&seq=about-img&orientation=landscape"
                alt="독서모임 토론 장면"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out" style={{ transitionDelay: "0.1s" }}>
              <span className="inline-block text-primary-500 text-xs font-semibold tracking-wide uppercase mb-4">
                About Questionity
              </span>
            </div>

            <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground-950 leading-tight mb-6" style={{ transitionDelay: "0.2s" }}>
              질문을 던지고
              <br />
              <span className="text-primary-500">커뮤니티를 만드는</span>
              <br />
              독서 플랫폼
            </h2>

            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-foreground-600 leading-relaxed text-base md:text-lg mb-6" style={{ transitionDelay: "0.3s" }}>
              퀘스처니티는 독서를 통해 사람들을 연결하는 온라인 독서클럽 플랫폼입니다.
              혼자 읽기 어려운 책, 함께 읽으면 더 깊어지는 책을 전문 클럽장과 함께
              4주 프로그램으로 체계적으로 읽고 대화합니다.
            </p>

            <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out text-foreground-600 leading-relaxed text-base md:text-lg mb-8" style={{ transitionDelay: "0.4s" }}>
              매주 만나는 사람들과 책에 대한 질문을 던지고,
              각자의 해석을 나누며 자연스럽게 친해지는 경험을 제공합니다.
            </p>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-wrap gap-3" style={{ transitionDelay: "0.5s" }}>
              <div className="flex items-center gap-2 bg-accent-100 text-accent-900 text-sm font-medium px-4 py-2 rounded-none">
                <i className="ri-book-line" />
                <span>매월 새로운 책</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary-100 text-secondary-900 text-sm font-medium px-4 py-2 rounded-none">
                <i className="ri-user-star-line" />
                <span>전문 클럽장</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-100 text-primary-900 text-sm font-medium px-4 py-2 rounded-none">
                <i className="ri-group-line" />
                <span>소규모 그룹</span>
              </div>
            </div>
          </div>
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