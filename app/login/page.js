"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
    });

    if (error) {
      alert("Lỗi: " + error.message);
    } else {
      alert("Kiểm tra email để đăng nhập!");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Đăng nhập quản trị</h1>

      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 10, width: 300 }}
      />

      <br /><br />

      <button onClick={handleLogin} style={{ padding: 10 }}>
        Gửi link đăng nhập
      </button>
    </div>
  );
}
