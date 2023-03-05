import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

import Spiner from "@/components/elements/spiner/spiner";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, signIn } = useAuth();

  /** onSubmit 시 회원 가입을 요청합니다. */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    signIn({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">클릭!</button>

      <div>{isLoading && <Spiner />}</div>
      <div className="temp-text">{error && error}</div>
    </form>
  );
}
