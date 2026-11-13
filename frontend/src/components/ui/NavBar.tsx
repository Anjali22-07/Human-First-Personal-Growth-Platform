
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isHomePage = window.location.pathname === "/";

  return (
    <nav className="relative z-50 flex items-center justify-between bg-[#F5F3E9] px-6 py-5 md:px-16">

      <a href="/" className="text-2xl font-bold tracking-tight text-[#365943]">
        <span><i className="fa-solid fa-hand-holding-seedling bg-[#365943]"></i></span>
        rooted.
      </a>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-10 md:flex">

        {isHomePage ? (
          <a href="#about" className="text-sm font-bold hover:text-[#91A98B]">
            About
          </a>
        ) : (
          <a href="/" className="text-sm font-bold hover:text-[#91A98B]">
            Home
          </a>
        )}

        <a href="/login" className="text-sm font-bold hover:text-[#91A98B]">
          Sign in
        </a>

        <a
          href="/register"
          className="rounded-full bg-[#365943] px-6 py-3 text-sm text-white transition hover:bg-[#294632]"
        >
          Get started
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "×" : "☰"}
      </button>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-5 bg-[#F5F3E9] px-6 py-6 shadow-md md:hidden">

          {isHomePage ? (
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          ) : (
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          )}

          <a href="/login" onClick={() => setMenuOpen(false)}>
            Sign in
          </a>

          <a href="/register" onClick={() => setMenuOpen(false)}>
            Get started →
          </a>
        </div>
      )}
    </nav>
  );
}
