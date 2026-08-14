import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    {
      title: "서비스",
      links: [
        { label: "독서모임", href: "/#clubs" },
        { label: "결제방법", href: "/#how-it-works" },
        { label: "오시는길", href: "/#location" },
      ],
    },
    {
      title: "회사",
      links: [
        { label: "퀘스처니티 소개", href: "/" },
        { label: "채용", href: "/" },
      ],
    },
    {
      title: "지원",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "1:1 문의하기", href: "/faq#contact" },
        { label: "이용약관", href: "/" },
        { label: "개인정보처리방침", href: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-background-100 border-t border-background-200/70">
      <div className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading font-bold text-xl text-primary-500 tracking-tight">
                Questionity
              </span>
            </Link>
            <p className="text-sm text-foreground-600 leading-relaxed mb-6">
              독서를 통해 사람들을 연결하는
              <br />
              온라인 독서클럽 플랫폼
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-9 h-9 flex items-center justify-center rounded-none bg-background-200/70 text-foreground-600 hover:bg-primary-500 hover:text-background-50 transition-colors"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-base" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-9 h-9 flex items-center justify-center rounded-none bg-background-200/70 text-foreground-600 hover:bg-primary-500 hover:text-background-50 transition-colors"
                aria-label="YouTube"
              >
                <i className="ri-youtube-line text-base" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-9 h-9 flex items-center justify-center rounded-none bg-background-200/70 text-foreground-600 hover:bg-primary-500 hover:text-background-50 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-line text-base" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm text-foreground-900 mb-4">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground-600 hover:text-primary-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-background-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-500">
            퀘스처니티 (Questionity) | 대표: [이름]
          </p>
          <p className="text-xs text-foreground-500">
            &copy; 2025 Questionity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}