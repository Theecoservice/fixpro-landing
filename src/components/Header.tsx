"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f8fa]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FixPro" width={36} height={36} />
          <span className="text-xl font-bold tracking-tight">FixPro</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Можливості", "#features"],
            ["Ціни", "#pricing"],
            ["Як це працює", "#how-it-works"],
            ["Контакти", "#footer"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-black"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 sm:inline-flex"
          >
            Отримувати заявки
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 md:hidden"
            aria-label="Меню"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-[#f7f8fa] px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {[
              ["Можливості", "#features"],
              ["Ціни", "#pricing"],
              ["Як це працює", "#how-it-works"],
              ["Контакти", "#footer"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-gray-500 hover:text-black"
              >
                {label}
              </a>
            ))}
            <a
              href="#pricing"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
            >
              Отримувати заявки
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
