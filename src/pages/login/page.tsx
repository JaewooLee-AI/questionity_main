import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated) {
    navigate("/", { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("이메일을 입력해주세요.");
      return;
    }
    if (!password.trim()) {
      setError("비밀번호를 입력해주세요.");
      return;
    }

    setLoading(true);
    try {
      await login(email.trim(), password);
      navigate("/", { replace: true });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "로그인에 실패했습니다. 다시 시도해주세요.";
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
                <i className="ri-book-open-line text-2xl text-accent-500" />
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground-950 mb-4 leading-tight">
                다시 만나는<br />당신의 독서 모임
              </h1>
              <p className="text-foreground-600 text-base leading-relaxed max-w-md">
                책을 읽고 질문을 나누는 순간,<br />
                새로운 인연이 시작됩니다.<br />
                지금 바로 퀘스처니티에서 당신의 클럽을 찾아보세요.
              </p>
            </div>

            <div className="hidden lg:flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-accent-100 flex items-center justify-center shrink-0 border border-accent-200">
                  <i className="ri-user-star-line text-accent-500 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground-900">150+ 활성 클럽</p>
                  <p className="text-xs text-foreground-500">전국 각지에서 모임 중</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-secondary-100 flex items-center justify-center shrink-0 border border-secondary-200">
                  <i className="ri-chat-smile-2-line text-secondary-500 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground-900">5,000+ 회원</p>
                  <p className="text-xs text-foreground-500">함께 읽고 대화하는 사람들</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-primary-100 flex items-center justify-center shrink-0 border border-primary-200">
                  <i className="ri-heart-line text-accent-500 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground-900">98% 재참여율</p>
                  <p className="text-xs text-foreground-500">한 번 시작하면 멈출 수 없는 경험</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Login Form */}
          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
            <div className="bg-background-50 border border-background-200 rounded-none p-8 md:p-10 shadow-md">
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground-950 mb-2">로그인</h2>
                <p className="text-sm text-foreground-600">
                  아직 계정이 없으신가요?{" "}
                  <Link to="/signup" className="text-accent-500 font-semibold hover:text-primary-500 transition-colors">
                    회원가입
                  </Link>
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-none bg-accent-50 border border-accent-200 flex items-start gap-3">
                  <i className="ri-error-warning-line text-accent-500 text-lg shrink-0 mt-0.5" />
                  <p className="text-sm text-accent-900">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Email */}
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-foreground-800 mb-1.5">
                    이메일
                  </label>
                  <div className="relative">
                    <i className="ri-mail-line absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground-400 text-sm" />
                    <input
                      id="login-email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hello@example.com"
                      autoComplete="email"
                      className="w-full pl-10 pr-4 py-3 rounded-none border border-background-200 bg-background-50 text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="login-password" className="block text-sm font-medium text-foreground-800">
                      비밀번호
                    </label>
                    <a href="#" className="text-xs text-accent-500 hover:text-primary-500 transition-colors font-medium">
                      비밀번호 찾기
                    </a>
                  </div>
                  <div className="relative">
                    <i className="ri-lock-line absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground-400 text-sm" />
                    <input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호를 입력하세요"
                      autoComplete="current-password"
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

                {/* Remember me */}
                <div className="flex items-center gap-2">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="w-4 h-4 rounded-none border-background-300 text-accent-500 focus:ring-accent-500 cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="text-sm text-foreground-600 cursor-pointer select-none">
                    로그인 상태 유지
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-500 text-background-50 font-semibold text-sm py-3 rounded-none hover:bg-accent-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap mt-1"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-loader-4-line animate-spin" />
                      로그인 중...
                    </span>
                  ) : (
                    "로그인"
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-background-200" />
                <span className="text-xs text-foreground-400 font-medium">또는</span>
                <div className="flex-1 h-px bg-background-200" />
              </div>

              {/* Social Login */}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 border border-background-200 rounded-none py-3 text-sm font-medium text-foreground-700 hover:bg-background-100 transition-colors whitespace-nowrap"
                >
                  <i className="ri-google-line text-lg" />
                  Google로 계속하기
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 border border-background-200 rounded-none py-3 text-sm font-medium text-foreground-700 hover:bg-background-100 transition-colors whitespace-nowrap"
                >
                  <i className="ri-kakao-talk-line text-lg" />
                  카카오로 계속하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}