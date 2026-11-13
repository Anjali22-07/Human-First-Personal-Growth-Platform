
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-16">
        <a href="/" className="text-2xl font-bold tracking-tight">
          rooted<span className="text-[#365943]">.</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <a href="#about" className="text-sm font-bold hover:text-[#91A98B] text:[#365943]">
            About
          </a>

          <a href="#how-it-works" className="text-sm font-bold hover:text-[#91A98B]">
            How it works
          </a>

          <a href="/login" className="text-sm font-bold hover:text-[#91A98B]">
            Log in
          </a>

          <a
            href="/register"
            className="rounded-full bg-[#365943] px-6 py-3 text-sm text-white transition hover:bg-[#294632]"
          >
            Get started
          </a>
        </div>

        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {menuOpen && (
          <div className="absolute left-0 top-full flex w-full flex-col gap-5 bg-[#F7F5ED] px-6 py-6 shadow-md md:hidden">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <a href="/login" onClick={() => setMenuOpen(false)}>
              Log in
            </a>
            <a href="/register" className="font-semibold">
              Get started →
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
