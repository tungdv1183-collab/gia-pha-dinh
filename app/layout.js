export const metadata = {
  title: "Gia Phả Họ Đinh - Chi Nhánh Hương Sơn",
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body style={{
        margin:0,
        fontFamily:"serif",
        background:"#f5e6d3"
      }}>
        <header style={{
          background:"#8B0000",
          color:"#FFD700",
          textAlign:"center",
          padding:"20px"
        }}>
          <h1>GIA PHẢ HỌ ĐINH</h1>
          <h3>Chi Nhánh Hương Sơn</h3>
        </header>

        {children}

      </body>
    </html>
  )
}
