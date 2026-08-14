import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const MOCK_USERS_KEY = "questiunity_mock_users";
const SESSION_KEY = "questiunity_session";

interface StoredUser extends User {
  password: string;
}

function getMockUsers(): Record<string, StoredUser> {
  try {
    const raw = localStorage.getItem(MOCK_USERS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveMockUsers(users: Record<string, StoredUser>) {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
}

function generateId(): string {
  return "user_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On mount, restore session from localStorage
  useEffect(() => {
    try {
      const sessionRaw = localStorage.getItem(SESSION_KEY);
      if (sessionRaw) {
        const sessionUser: User = JSON.parse(sessionRaw);
        // Verify user still exists in mock DB
        const users = getMockUsers();
        if (users[sessionUser.email]) {
          setUser(sessionUser);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const users = getMockUsers();
    const found = users[email.toLowerCase()];

    if (!found) {
      throw new Error("등록되지 않은 이메일입니다. 회원가입을 먼저 진행해주세요.");
    }

    if (found.password !== password) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const sessionUser: User = {
      id: found.id,
      name: found.name,
      email: found.email,
      avatarUrl: found.avatarUrl,
      createdAt: found.createdAt,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const users = getMockUsers();
    const normalizedEmail = email.toLowerCase();

    if (users[normalizedEmail]) {
      throw new Error("이미 등록된 이메일입니다. 로그인을 진행해주세요.");
    }

    const newUser: StoredUser = {
      id: generateId(),
      name,
      email: normalizedEmail,
      password,
      avatarUrl: "",
      createdAt: new Date().toISOString(),
    };

    users[normalizedEmail] = newUser;
    saveMockUsers(users);

    const sessionUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      avatarUrl: newUser.avatarUrl,
      createdAt: newUser.createdAt,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: user !== null,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}