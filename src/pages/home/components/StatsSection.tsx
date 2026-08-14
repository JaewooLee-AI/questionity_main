import { useEffect, useRef } from "react";
import { stats } from "@/mocks/home";

export default function StatsSection() {
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
    <section ref={sectionRef} className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-20 bg-primary-500">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out text-center"
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="font-heading font-bold text-3xl md:text-4xl text-background-50 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-background-50/80">
                {stat.label}
              </div>
            </div>
          ))}
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