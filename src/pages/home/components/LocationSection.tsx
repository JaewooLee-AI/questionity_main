import { useState, useEffect, useRef } from "react";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const addressText = "서울특별시 종로구 창경궁로 270";
  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(addressText)}`;

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

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="location"
      ref={sectionRef}
      className="w-full px-4 md:px-8 lg:px-12 py-20 md:py-28 bg-[#F6F5F1] border-t border-[#D8D4CA] font-sans"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out inline-block px-3.5 py-1 bg-[#111111] text-white text-xs font-bold tracking-widest uppercase rounded-none font-heading">
            📍 OFFLINE LOUNGE
          </span>
          <h2
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out font-heading font-black text-3xl md:text-4xl text-[#111111] uppercase tracking-tight leading-tight"
            style={{ transitionDelay: "0.1s" }}
          >
            오시는 길
          </h2>
          <p
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out text-gray-700 text-base md:text-lg max-w-2xl mx-auto font-sans break-keep"
            style={{ transitionDelay: "0.2s" }}
          >
            퀘스처니티 오프라인 독서 아지트에서 깊이 있는 독서 토론과 대화를 경험해 보세요.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Naver Map Preview & Interactive Card (7 Cols) */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out lg:col-span-7 bg-gray-900 rounded-none overflow-hidden shadow-xl border border-gray-800 flex flex-col justify-between relative min-h-[380px]"
            style={{ transitionDelay: "0.3s" }}
          >
            {/* Map Header Bar */}
            <div className="bg-gray-800/90 backdrop-blur px-5 py-3.5 flex items-center justify-between z-10 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 inline-block" />
                <span className="w-3 h-3 bg-yellow-500 inline-block" />
                <span className="w-3 h-3 bg-green-500 inline-block" />
                <span className="text-xs font-bold text-gray-200 ml-2">네이버 지도 (Naver Map)</span>
              </div>
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-none transition-all shadow-sm"
              >
                🟢 네이버 지도에서 보기 ↗
              </a>
            </div>

            {/* Map Graphic Preview Box */}
            <div className="relative flex-1 bg-[#e5e3df] p-6 flex flex-col items-center justify-center text-center overflow-hidden min-h-[260px]">
              {/* Map grid lines background styling */}
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Road illustration lines */}
              <div className="absolute w-full h-12 bg-gray-300/80 top-1/2 -translate-y-1/2 rotate-12" />
              <div className="absolute h-full w-14 bg-gray-300/80 left-1/3 -translate-x-1/2 -rotate-6" />

              {/* Pin Marker Callout */}
              <div className="relative z-10 bg-white p-4 rounded-none shadow-2xl border-2 border-emerald-500 space-y-2 max-w-xs animate-bounce-subtle">
                <div className="w-10 h-10 rounded-none bg-emerald-500 text-white flex items-center justify-center text-xl mx-auto shadow-md">
                  📍
                </div>
                <strong className="text-sm font-extrabold text-gray-950 block">
                  퀘스처니티 독서 아지트
                </strong>
                <span className="text-xs text-gray-600 font-medium block">
                  {addressText}
                </span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-none inline-block">
                  혜화역 4번 출구 도보 3분
                </span>
              </div>

              {/* Bottom Quick Bar inside map */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur p-2.5 rounded-none border border-gray-200/80 flex items-center justify-between text-xs z-10 shadow-sm">
                <span className="font-semibold text-gray-700 truncate">
                  📍 {addressText}
                </span>
                <a
                  href={naverMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-emerald-700 hover:text-emerald-900 font-bold underline ml-2"
                >
                  길찾기 ↗
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Information Card (5 Cols) */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out lg:col-span-5 bg-gray-50 p-6 md:p-8 rounded-none border border-gray-200/80 flex flex-col justify-between space-y-6"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="space-y-6">
              <div className="space-y-2 pb-4 border-b border-gray-200">
                <span className="text-xs font-bold text-emerald-700 block uppercase">ADDRESS</span>
                <h3 className="font-heading font-bold text-xl text-gray-950">{addressText}</h3>
                <p className="text-xs text-gray-500">서울특별시 종로구 혜화동 (창경궁로 270)</p>
              </div>

              {/* Transportation Details */}
              <div className="space-y-4 text-xs text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-blue-100 text-blue-700 flex items-center justify-center text-sm shrink-0 font-bold">
                    🚇
                  </div>
                  <div>
                    <strong className="text-gray-950 block font-bold text-xs mb-0.5">지하철 이용 시</strong>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>4호선 혜화역 4번 출구</strong>에서 창경궁로 방향으로 도보 3분 (약 220m)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-amber-100 text-amber-800 flex items-center justify-center text-sm shrink-0 font-bold">
                    🚌
                  </div>
                  <div>
                    <strong className="text-gray-950 block font-bold text-xs mb-0.5">버스 이용 시</strong>
                    <p className="text-gray-600 leading-relaxed">
                      <strong>혜화동 로터리 / 성대입구 정류장</strong> 하차 (간선 100, 102, 104, 106, 107번)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm shrink-0 font-bold">
                    🅿️
                  </div>
                  <div>
                    <strong className="text-gray-950 block font-bold text-xs mb-0.5">주차 안내</strong>
                    <p className="text-gray-600 leading-relaxed">
                      건물 지하 주차장 이용 가능 (독서모임 참여 멤버 <strong>최대 2시간 무료 주차</strong> 지원)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-gray-200">
              <button
                onClick={handleCopyAddress}
                className="w-full py-3 bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs rounded-none border border-gray-300 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                {copied ? "✅ 주소가 복사되었습니다!" : "📋 도로명 주소 복사하기"}
              </button>
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-none transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20"
              >
                🟢 네이버 지도로 길찾기 열기 ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
