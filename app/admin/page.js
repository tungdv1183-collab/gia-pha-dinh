"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("roles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error || !data || data.role !== "admin") {
        router.push("/login");
        return;
      }

      setIsAdmin(true);
      setLoading(false);
    };

    checkAdmin();
  }, [router]);

  if (loading) return <p>Đang kiểm tra quyền...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Trang Quản Trị</h1>
      <p>Xin chào Admin 👑</p>
    </div>
  );
}
