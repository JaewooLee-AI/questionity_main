import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close user menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userMenuOpen]);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate("/");
  };

  const navLinks = [
    { label: "모임 둘러보기", href: "/#clubs" },
    { label: "후기", href: "/#reviews" },
    { label: "결제방법", href: "/#how-it-works" },
    { label: "오시는길", href: "/#location" },
    { label: "FAQ / 문의하기", href: "/faq" },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.pushState(null, "", "/");
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (window.location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background-50/95 backdrop-blur-md border-b border-background-300/80 shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 shrink-0">
            <span
              className={`font-heading font-extrabold text-xl md:text-2xl tracking-wider uppercase transition-colors ${
                scrolled ? "text-foreground-950" : "text-background-50"
              }`}
            >
              QUESTIONITY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs md:text-sm font-bold tracking-tight transition-colors hover:opacity-80 whitespace-nowrap ${
                  scrolled ? "text-foreground-900 hover:text-primary-500" : "text-background-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA / User Menu */}
          <div className="hidden md:flex items-center gap-3">
            {isLoading ? null : isAuthenticated && user ? (
              /* Logged in */
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className={`flex items-center gap-2 transition-colors whitespace-nowrap ${
                    scrolled
                      ? "text-foreground-800 hover:text-primary-500"
                      : "text-background-50 hover:text-background-50/80"
                  }`}
                >
                  <div className="w-8 h-8 rounded-none bg-primary-100 flex items-center justify-center shrink-0">
                    {user.avatarUrl ? (
                      <img src={user.avatarUrl} alt={user.name} className="w-8 h-8 rounded-none object-cover" />
                    ) : (
                      <span className={`text-sm font-bold ${scrolled ? "text-primary-500" : "text-primary-600"}`}>
                        {user.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium">{user.name}</span>
                  <i className={`ri-arrow-down-s-line text-sm transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-background-50 border border-background-200/70 rounded-none shadow-lg py-2 z-50">
                    <div className="px-4 py-2.5 border-b border-background-200/70">
                      <p className="text-sm font-semibold text-foreground-900 truncate">{user.name}</p>
                      <p className="text-xs text-foreground-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/mypage"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground-700 hover:bg-background-100 transition-colors"
                    >
                      <i className="ri-user-line text-base" />
                      마이페이지
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <i className="ri-logout-box-line text-base" />
                      로그아웃
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Not logged in */
              <>
                <Link
                  to="/login"
                  className={`text-sm font-medium transition-colors hover:opacity-80 whitespace-nowrap ${
                    scrolled ? "text-foreground-800" : "text-background-50"
                  }`}
                >
                  로그인
                </Link>
                <Link
                  to="/signup"
                  className="bg-primary-500 text-background-50 text-sm font-semibold px-5 py-2.5 rounded-none hover:bg-primary-600 transition-colors whitespace-nowrap"
                >
                  시작하기
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-foreground-800" : "text-background-50"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <i className={`ri-${mobileMenuOpen ? "close" : "menu"}-line text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-50 border-t border-background-200/70 px-4 py-6 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground-800 text-base font-medium py-2 hover:text-primary-500 transition-colors"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-background-200/70 pt-4 flex flex-col gap-3">
              {isAuthenticated && user ? (
                <>
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-10 h-10 rounded-none bg-primary-100 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary-500">{user.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground-900">{user.name}</p>
                      <p className="text-xs text-foreground-500">{user.email}</p>
                    </div>
                  </div>
                  <Link
                    to="/mypage"
                    className="text-foreground-800 text-base font-medium py-2 flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <i className="ri-user-line" />
                    마이페이지
                  </Link>
                  <button
                    onClick={() => { logout(); navigate("/"); setMobileMenuOpen(false); }}
                    className="text-red-600 text-base font-medium py-2 flex items-center gap-2 text-left"
                  >
                    <i className="ri-logout-box-line" />
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-foreground-800 text-base font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    로그인
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-primary-500 text-background-50 text-center text-base font-semibold px-5 py-3 rounded-none hover:bg-primary-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    시작하기
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}