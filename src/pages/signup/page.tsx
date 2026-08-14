import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function SignupPage() {
  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated) {
    navigate("/", { replace: true });
    return null;
  }

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep1 = (): string | null => {
    if (!form.name.trim()) return "이름을 입력해주세요.";
    if (!form.email.trim()) return "이메일을 입력해주세요.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "올바른 이메일 형식이 아닙니다.";
    return null;
  };

  const validateStep2 = (): string | null => {
    if (!form.password.trim()) return "비밀번호를 입력해주세요.";
    if (form.password.length < 8) return "비밀번호는 8자 이상이어야 합니다.";
    if (form.password !== form.confirmPassword) return "비밀번호가 일치하지 않습니다.";
    if (!agreeTerms) return "이용약관에 동의해주세요.";
    if (!agreePrivacy) return "개인정보 처리방침에 동의해주세요.";
    return null;
  };

  const handleNext = () => {
    const err = validateStep1();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const err = validateStep2();
    if (err) {
      setError(err);
      return;
    }

    setLoading(true);
    try {
      await signup(form.name.trim(), form.email.trim(), form.password);
      navigate("/", { replace: true });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "회원가입에 실패했습니다. 다시 시도해주세요.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-50 text-foreground-950 font-body">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-28 pb-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-0">
          {/* Left: Brand & Visual */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left py-8 lg:py-16 lg:pr-16">
            <div className="mb-8">
              <div className="w-16 h-16 rounded-none bg-accent-100 flex items-center justify-center mb-6 border border-accent-200">
                <i className="ri-sparkling-2-line text-2xl text-accent-500" />
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground-950 mb-4 leading-tight">
                질문과 커뮤니티가<br />만나는 곳에 오신 것을<br />환영합니다
              </h1>
              <p className="text-foreground-600 text-base leading-relaxed max-w-md">
                회원가입하고 전국 150개 이상의 독서모임에서<br />
                당신만의 클럽을 찾아보세요.
              </p>
            </div>

            {/* Step indicators */}
            <div className="flex items-center gap-3 mb-8">
              <div className={`flex items-center gap-2 ${step === 1 ? "opacity-100" : "opacity-50"}`}>
                <div className={`w-8 h-8 rounded-none flex items-center justify-center text-sm font-bold transition-colors ${
                  step === 1
                    ? "bg-accent-500 text-background-50"
                    : step > 1
                    ? "bg-accent-200 text-accent-900"
                    : "bg-background-200 text-foreground-500"
                }`}>
                  {step > 1 ? <i className="ri-check-line text-sm" /> : "1"}
                </div>
                <span className="text-sm font-medium text-foreground-700">기본 정보</span>
              </div>
              <div className="w-8 h-px bg-background-300" />
              <div className={`flex items-center gap-2 ${step === 2 ? "opacity-100" : "opacity-50"}`}>
                <div className={`w-8 h-8 rounded-none flex items-center justify-center text-sm font-bold transition-colors ${
                  step === 2 ? "bg-accent-500 text-background-50" : "bg-background-200 text-foreground-500"
                }`}>
                  2
                </div>
                <span className="text-sm font-medium text-foreground-700">비밀번호 설정</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-background-100 border border-background-200 rounded-none p-6 max-w-sm">
                <p className="text-sm text-foreground-600 leading-relaxed italic">
                  &ldquo;혼자 읽는 책도 좋지만, 함께 읽고 이야기 나누는 독서는 삶을 더 풍요롭게 만듭니다. 퀘스처니티에서 당신의 독서 여정에 함께할 멋진 사람들을 만나보세요.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-8 rounded-none bg-secondary-100 border border-secondary-200 flex items-center justify-center shrink-0">
                    <i className="ri-double-quotes-l text-secondary-500 text-xs" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground-800">Questionity Team</p>
                    <p className="text-xs text-foreground-500">당신의 독서 파트너</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Signup Form */}
          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
            <div className="bg-background-50 border border-background-200 rounded-none p-8 md:p-10 shadow-md">
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground-950 mb-2">회원가입</h2>
                <p className="text-sm text-foreground-600">
                  이미 계정이 있으신가요?{" "}
                  <Link to="/login" className="text-accent-500 font-semibold hover:text-primary-500 transition-colors">
                    로그인
                  </Link>
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-none bg-accent-50 border border-accent-200 flex items-start gap-3">
                  <i className="ri-error-warning-line text-accent-500 text-lg shrink-0 mt-0.5" />
                  <p className="text-sm text-accent-900">{error}</p>
                </div>
              )}

              {/* Progress bar */}
              <div className="mb-8">
                <div className="w-full h-1.5 rounded-none bg-background-200 overflow-hidden">
                  <div
                    className={`h-full rounded-none bg-accent-500 transition-all duration-500 ${
                      step === 1 ? "w-1/2" : "w-full"
                    }`}
                  />
                </div>
              </div>

              {step === 1 ? (
                /* Step 1: Basic Info */
                <div className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="signup-name" className="block text-sm font-medium text-foreground-800 mb-1.5">
                      이름
                    </label>
                    <div className="relative">
                      <i className="ri-user-line absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground-400 text-sm" />
                      <input
                        id="signup-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="홍길동"
                        autoComplete="name"
                        className="w-full pl-10 pr-4 py-3 rounded-none border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium text-foreground-800 mb-1.5">
                      이메일
                    </label>
                    <div className="relative">
                      <i className="ri-mail-line absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground-400 text-sm" />
                      <input
                        id="signup-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="hello@example.com"
                        autoComplete="email"
                        className="w-full pl-10 pr-4 py-3 rounded-none border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-primary-500 text-background-50 font-semibold text-sm py-3 rounded-none hover:bg-accent-500 transition-colors whitespace-nowrap mt-1"
                  >
                    다음 단계
                  </button>

                  {/* Social signup */}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex-1 h-px bg-background-200" />
                    <span className="text-xs text-foreground-400 font-medium">간편 회원가입</span>
                    <div className="flex-1 h-px bg-background-200" />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 border border-background-200 rounded-none py-3 text-sm font-medium text-foreground-700 hover:bg-background-100 transition-colors whitespace-nowrap"
                    >
                      <i className="ri-google-line text-lg" />
                      Google
                    </button>
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 border border-background-200 rounded-none py-3 text-sm font-medium text-foreground-700 hover:bg-background-100 transition-colors whitespace-nowrap"
                    >
                      <i className="ri-kakao-talk-line text-lg" />
                      카카오
                    </button>
                  </div>
                </div>
              ) : (
                /* Step 2: Password & Terms */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="signup-password" className="block text-sm font-medium text-foreground-800 mb-1.5">
                      비밀번호
                    </label>
                    <div className="relative">
                      <i className="ri-lock-line absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground-400 text-sm" />
                      <input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={(e) => updateField("password", e.target.value)}
                        placeholder="8자 이상 입력해주세요"
                        autoComplete="new-password"
                        className="w-full pl-10 pr-12 py-3 rounded-none border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foreground-400 hover:text-foreground-600 transition-colors"
                        aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                      >
                        <i className={`ri-${showPassword ? "eye-off" : "eye"}-line text-sm`} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="signup-confirm" className="block text-sm font-medium text-foreground-800 mb-1.5">
                      비밀번호 확인
                    </label>
                    <div className="relative">
                      <i className="ri-lock-line absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground-400 text-sm" />
                      <input
                        id="signup-confirm"
                        type={showConfirm ? "text" : "password"}
                        value={form.confirmPassword}
                        onChange={(e) => updateField("confirmPassword", e.target.value)}
                        placeholder="비밀번호를 다시 입력해주세요"
                        autoComplete="new-password"
                        className="w-full pl-10 pr-12 py-3 rounded-none border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex flex-col gap-3 p-4 rounded-none bg-background-100 border border-background-200">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="w-4 h-4 rounded-none border-background-300 text-accent-500 focus:ring-accent-500 cursor-pointer shrink-0"
                      />
                      <span className="text-sm text-foreground-700">
                        <a href="#" className="text-accent-500 font-medium hover:underline">이용약관</a>에 동의합니다 (필수)
                      </span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreePrivacy}
                        onChange={(e) => setAgreePrivacy(e.target.checked)}
                        className="w-4 h-4 rounded-none border-background-300 text-accent-500 focus:ring-accent-500 cursor-pointer shrink-0"
                      />
                      <span className="text-sm text-foreground-700">
                        <a href="#" className="text-accent-500 font-medium hover:underline">개인정보 처리방침</a>에 동의합니다 (필수)
                      </span>
                    </label>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => { setStep(1); setError(""); }}
                      className="px-5 py-3 rounded-none border border-background-200 text-sm font-medium text-foreground-600 hover:bg-background-100 transition-colors whitespace-nowrap"
                    >
                      <i className="ri-arrow-left-line mr-1.5" />
                      이전
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-primary-500 text-background-50 font-semibold text-sm py-3 rounded-none hover:bg-accent-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <i className="ri-loader-4-line animate-spin" />
                          가입 중...
                        </span>
                      ) : (
                        "가입 완료"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}