"use client"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Home() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    fetchMembers()
  }, [])

  async function fetchMembers() {
    const { data } = await supabase
      .from("members")
      .select("*")
      .limit(20)

    setMembers(data || [])
  }

  return (
    <div style={{ padding:20 }}>
      <h2>Danh sách thành viên (mẫu)</h2>

      {members.map((m) => (
        <div key={m.id} style={{
          border:"1px solid #8B0000",
          padding:10,
          marginBottom:10,
          background:"#fff8dc"
        }}>
          <b>{m.full_name}</b><br/>
          Năm sinh: {m.birth_year || "Chưa rõ"}
        </div>
      ))}
    </div>
  )
}
