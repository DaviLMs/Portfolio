'use client'
import Link from "next/link";

export default function Bar() {
  return (
    <header style={{ padding: 10 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
          borderWidth: 0.5,
          borderRadius: 20,
          borderColor: '#3b3b3b8a',
          width: "100%",
          backgroundColor: "#00000000",
          gap: 20,
          transition: "background-color 0.3s ease-in-out", 
        }}
      >
        <div
          style={{
            fontSize: "18px",
            color: "#fff",
            textDecoration: "none",
            padding: "5px 10px",
            transition: "transform 0.2s ease, color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLDivElement;
            target.style.transform = "scale(1.1)";
            target.style.color = "#fff493";
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLDivElement;
            target.style.transform = "scale(1)";
            target.style.color = "#ffffff";
          }}
        >
          <Link href={"https://github.com/DaviLMs"}>GitHub</Link>
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#fff",
            textDecoration: "none",
            padding: "5px 10px",
            transition: "transform 0.2s ease, color 0.2s ease", 
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLDivElement;
            target.style.transform = "scale(1.1)";
            target.style.color = "#fff493";
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLDivElement;
            target.style.transform = "scale(1)";
            target.style.color = "#ffffff";
          }}
        >
          <Link href={"https://www.instagram.com/davi_pessoalrj"}>Instagram</Link>
        </div>
      </div>
    </header>
  );
}
