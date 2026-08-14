import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F1] font-sans">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-10">
          
          {/* Header Banner */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 bg-[#111111] text-white text-xs font-bold rounded-none uppercase tracking-widest font-heading">
              LEGAL AGREEMENT
            </span>
            <h1 className="font-heading font-black text-3xl md:text-5xl text-[#111111] uppercase tracking-tight">
              이용약관
            </h1>
            <p className="text-gray-600 text-xs md:text-sm font-sans">
              최종 수정일: 2026년 8월 14일 | 시행일: 2026년 8월 14일
            </p>
          </div>

          {/* Document Content Card */}
          <div className="bg-white p-6 md:p-10 rounded-none border border-[#D0CBC0] shadow-xs space-y-8 text-xs md:text-sm text-gray-700 leading-relaxed break-keep font-sans">
            
            {/* Section 1 */}
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <h2 className="font-heading font-bold text-base md:text-lg text-[#111111] uppercase">
                제 1 조 (목적)
              </h2>
              <p>
                본 약관은 퀘스처니티(Questionity, 이하 "회사")가 제공하는 온라인 독서모임 커뮤니티 서비스 및 오프라인 아지트 관련 제반 서비스(이하 "서비스")의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <h2 className="font-heading font-bold text-base md:text-lg text-[#111111] uppercase">
                제 2 조 (용어의 정의)
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>"서비스"</strong>라 함은 회사가 회원에게 제공하는 온라인 독서방 개설, 모임 참가 신청, 쿠폰 결제, 오프라인 아지트 공간 이용 등 제반 서비스를 의미합니다.</li>
                <li><strong>"회원"</strong>이라 함은 회사의 서비스에 접속하여 본 약관에 동의하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
                <li><strong>"쿠폰"</strong>이라 함은 회원이 독서모임 참가 신청 시 대금 결제 수단으로 사용할 수 있도록 회사가 발행한 포인트를 말합니다.</li>
                <li><strong>"클럽장"</strong>이라 함은 독서모임을 기획하고 주선하며 모임 진행을 리드하는 사람을 말합니다.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <h2 className="font-heading font-bold text-base md:text-lg text-[#111111] uppercase">
                제 3 조 (약관의 게시와 개정)
              </h2>
              <p>
                회사는 본 약관의 내용을 회원이 용이하게 알 수 있도록 서비스 초기 화면 또는 연결 화면에 게시합니다. 회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 약관 개정 시 적용일자 7일 전부터 사전 공지합니다.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <h2 className="font-heading font-bold text-base md:text-lg text-[#111111] uppercase">
                제 4 조 (쿠폰 구매 및 사용)
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>회원은 회사가 제공하는 결제 수단(계좌이체, 신용/체크카드, 네이버페이, 카카오페이 등)을 통해 2개, 6개, 10개 패키지 쿠폰을 구매할 수 있습니다.</li>
                <li>구매한 쿠폰은 구매일로부터 6개월(2개 패키지) 또는 1년(6개/10개 패키지)간 유효합니다.</li>
                <li>독서모임 신청 시 쿠폰 1장이 차감되며, 모임 개설 최소 인원이 미달되어 모임이 취소될 경우 차감된 쿠폰은 전액 자동 복구됩니다.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <h2 className="font-heading font-bold text-base md:text-lg text-[#111111] uppercase">
                제 5 조 (환불 및 취소 규정)
              </h2>
              <p>
                회원은 독서모임 첫 회차 시작 3일 전까지 취소 요청을 할 수 있으며, 이 경우 사용된 쿠폰 또는 결제 금액 전액(100%)을 환불받을 수 있습니다. 모임 시작 2일 전 이후 또는 모임 진행 중에는 회사의 환불 세부 규정에 따라 일정 비율 공제 후 환불됩니다.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-base md:text-lg text-[#111111] uppercase">
                제 6 조 (분쟁 해결 및 관할 법원)
              </h2>
              <p>
                본 서비스 이용과 관련하여 회사와 회원 간에 발생한 분쟁에 대해서는 상호 협의하여 해결하는 것을 원칙으로 하며, 협의가 이루어지지 않을 경우 관할 법원은 회사의 본사 소재지 관할 법원으로 합니다.
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
