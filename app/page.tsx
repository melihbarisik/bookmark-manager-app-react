"use client"

export default function Home() {
  return (
    <button onClick={() => {
      const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    }}>
      Temayı Değiştir
    </button>
  );
}
