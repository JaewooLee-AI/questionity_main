import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { allClubs, clubCategories, clubRegions, clubStatuses } from "@/mocks/clubs";
import type { Club } from "@/mocks/clubs";

function formatPrice(price: number) {
  return new Intl.NumberFormat("ko-KR").format(price);
}

function ClubCard({ club, index }: { club: Club; index: number }) {
  const isClosed = club.status === "closed";
  const isOngoing = club.status === "ongoing";
  const isFull = club.currentMembers >= club.capacity && club.status === "open";
  const isAlmostFull = club.currentMembers >= club.capacity - 2 && club.status === "open";

  return (
    <Link
      to={`/clubs/${club.id}`}
      className="group bg-background-50 rounded-none overflow-hidden border border-background-200/70 hover:shadow-lg hover:shadow-primary-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden shrink-0">
        <img
          src={club.imageUrl}
          alt={club.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-background-50/90 backdrop-blur-sm text-foreground-800 text-xs font-semibold px-2.5 py-1 rounded-none">
            {club.category}
          </span>
        </div>

        {/* Status Overlay & Badges */}
        {isClosed && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-foreground-700 text-background-50 text-xs font-bold px-3 py-1.5 rounded-none uppercase tracking-wide">
              종료된 모임
            </span>
          </div>
        )}
        {isOngoing && !isClosed && (
          <div className="absolute bottom-3 right-3">
            <span className="inline-block bg-primary-600 text-background-50 text-xs font-bold px-2.5 py-1 rounded-none">
              진행 중
            </span>
          </div>
        )}
        {isFull && !isClosed && !isOngoing && (
          <div className="absolute bottom-3 right-3">
            <span className="inline-block bg-foreground-800 text-background-50 text-xs font-bold px-2.5 py-1 rounded-none">
              마감
            </span>
          </div>
        )}
        {isAlmostFull && !isFull && !isClosed && !isOngoing && (
          <div className="absolute bottom-3 right-3">
            <span className="inline-block bg-accent-500 text-background-50 text-xs font-bold px-2.5 py-1 rounded-none">
              마감 임박 {club.currentMembers}/{club.capacity}
            </span>
          </div>
        )}
        {!isAlmostFull && !isFull && !isClosed && !isOngoing && (
          <div className="absolute bottom-3 right-3">
            <span className="inline-block bg-primary-500 text-background-50 text-xs font-bold px-2.5 py-1 rounded-none">
              모집 중 {club.currentMembers}/{club.capacity}명
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-base md:text-lg text-foreground-900 mb-2 line-clamp-1 group-hover:text-primary-500 transition-colors">
          {club.name}
        </h3>
        <p className="text-sm text-foreground-500 leading-relaxed mb-4 line-clamp-2 flex-1">
          {club.description}
        </p>

        {/* Leader */}
        <div className="flex items-center gap-2.5 mb-4">
          <img
            src={club.leaderImageUrl}
            alt={club.leaderName}
            className="w-7 h-7 rounded-none object-cover"
          />
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-foreground-800">{club.leaderName}</span>
            <span className="text-xs text-foreground-500">{club.leaderTitle}</span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between pt-3 border-t border-background-200/70">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-foreground-500">
              <i className="ri-map-pin-line mr-1" />
              {club.location}
            </span>
            <span className="text-xs text-foreground-500">
              <i className="ri-calendar-line mr-1" />
              {club.schedule}
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-primary-500">
              {formatPrice(club.price)}원
            </span>
            <span className="text-xs text-foreground-400 block">/{club.sessions}주</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Clubs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredClubs = useMemo(() => {
    return allClubs.filter((club) => {
      const matchesSearch =
        !searchQuery ||
        club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        club.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        club.leaderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        club.bookTitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || club.category === selectedCategory;
      const matchesRegion = selectedRegion === "all" || club.region === selectedRegion;
      const matchesStatus =
        selectedStatus === "all" || club.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesRegion && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedRegion, selectedStatus]);

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
      { threshold: 0.05 }
    );
    const elements = section.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredClubs]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <div className="relative pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Wide%20angle%20cozy%20library%20bookshelves%20with%20warm%20ambient%20lighting%2C%20rows%20of%20colorful%20books%20creating%20depth%2C%20soft%20golden%20light%2C%20abstract%20and%20artistic%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones%2C%20cream%20and%20amber%20palette&width=1600&height=500&seq=clubs-hero&orientation=landscape"
            alt="독서모임 배너"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
        </div>

        <div className="relative z-10 w-full px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-accent-500 text-xs font-semibold tracking-wide uppercase mb-4">
              Reading Clubs
            </span>
            <h1 className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl text-background-50 leading-tight mb-4">
              모임 둘러보기
            </h1>
            <p className="text-background-100/80 text-base md:text-lg max-w-xl mx-auto">
              모집 중, 진행 중, 종료된 모임을 확인하고 관심 있는 주제의 독서클럽을 찾아보세요
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Status Tabs */}
      <div className="w-full px-4 md:px-8 lg:px-12 py-6 md:py-8 bg-background-100 border-b border-background-200/70">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Status Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-background-200/70">
            {clubStatuses.map((st) => (
              <button
                key={st.value}
                onClick={() => setSelectedStatus(st.value)}
                className={`px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap border-b-2 -mb-[5px] ${
                  selectedStatus === st.value
                    ? "border-accent-500 text-accent-500 font-bold"
                    : "border-transparent text-foreground-600 hover:text-foreground-900"
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          {/* Search & Category/Region filters */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <i className="ri-search-2-line absolute left-3 top-1/2 -translate-y-1/2 text-foreground-400" />
              <input
                type="text"
                placeholder="모임 이름, 책 제목, 클럽장 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-background-50 border border-background-200/70 rounded-none text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
              />
            </div>

            {/* Category */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 bg-background-50 border border-background-200/70 rounded-none text-sm text-foreground-900 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent cursor-pointer"
            >
              {clubCategories.map((cat) => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>

            {/* Region */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2.5 bg-background-50 border border-background-200/70 rounded-none text-sm text-foreground-900 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent cursor-pointer"
            >
              {clubRegions.map((reg) => (
                <option key={reg.value} value={reg.value}>{reg.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div ref={sectionRef} className="flex-1 w-full px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-background-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm md:text-base font-semibold text-foreground-800">
              전체 <span className="text-primary-500">{filteredClubs.length}</span>개의 모임
            </h2>
          </div>

          {filteredClubs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-none bg-background-100 flex items-center justify-center">
                <i className="ri-search-line text-2xl text-foreground-400" />
              </div>
              <p className="text-foreground-600 text-base font-medium mb-2">검색 결과가 없습니다</p>
              <p className="text-foreground-400 text-sm">다른 검색어나 필터로 다시 시도해보세요</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filteredClubs.map((club, index) => (
                <div key={club.id} className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 ease-out">
                  <ClubCard club={club} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}