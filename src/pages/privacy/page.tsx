import { useEffect } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function PrivacyPage() {
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
              PRIVACY POLICY
            </span>
            <h1 className="font-heading font-black text-3xl md:text-5xl text-[#111111] uppercase tracking-tight">
              개인정보처리방침
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
                제 1 조 (개인정보의 처리 목적)
              </h2>
              <p>
                퀘스처니티(Questionity, 이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>회원 가입 및 관리 (본인 확인, 서비스 부정 이용 방지, 각종 고지사항 전달)</li>
                <li>독서모임 서비스 제공 및 쿠폰 결제/환불 처리</li>
                <li>1:1 고객 문의 처리 및 서비스 개선</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <h2 className="font-heading font-bold text-base md:text-lg text-[#111111] uppercase">
                제 2 조 (처리하는 개인정보 항목)
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>필수 수집 항목:</strong> 성함, 이메일 주소, 비밀번호, 서비스 이용 기록, 접속 로그, 쿠폰 구매 및 차감 내역</li>
                <li><strong>선택 수집 항목:</strong> 휴대전화번호, 프로필 이미지, 독후감 및 후기 작성 내역</li>
                <li><strong>1:1 문의 시 수집 항목:</strong> 성함, 이메일 주소, 연락처, 문의 내용</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <h2 className="font-heading font-bold text-base md:text-lg text-[#111111] uppercase">
                제 3 조 (개인정보의 보유 및 이용 기간)
              </h2>
              <p>
                회사는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>회원 탈퇴 시: 즉시 파기 (단, 관계 법령에 따른 보존 의무가 있는 경우 해당 기간 동안 보관)</li>
                <li>전자상거래에서의 계약·청약철회 및 대금결제 기록: 5년 보관 (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 보관</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <h2 className="font-heading font-bold text-base md:text-lg text-[#111111] uppercase">
                제 4 조 (개인정보의 파기 절차 및 방법)
              </h2>
              <p>
                회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-base md:text-lg text-[#111111] uppercase">
                제 5 조 (개인정보 보호책임자 및 담당 부서)
              </h2>
              <p>
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="p-4 bg-[#F6F5F1] border border-[#D0CBC0] rounded-none mt-2 space-y-1 text-xs">
                <p><strong>개인정보 보호책임자:</strong> 퀘스처니티 개인정보 보호팀</p>
                <p><strong>이메일:</strong> privacy@questionity.kr</p>
                <p><strong>고객센터:</strong> 02-1234-5678</p>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
