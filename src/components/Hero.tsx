"use client";

import Image from "next/image";
import { useState } from "react";
import StoreButtons from "./StoreButtons";

const techCategories = [
  "Пральні машини",
  "Холодильники",
  "Посудомийки",
  "Бойлери",
  "Кондиціонери",
  "Мікрохвильовки",
  "Плити та духовки",
  "Сушильні машини",
  "Кофемашини",
  "Газові котли",
  "Телевізори",
  "Інше",
];

export default function Hero() {
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Text */}
          <div className="max-w-2xl flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Заробляйте до $5,000/міс
              <br />
              на ремонті техніки
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-gray-500 lg:mx-0">
              Клієнти вже шукають майстра у вашому районі — залишилось тільки
              прийняти заявку та виконати ремонт
            </p>

            {/* Registration form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 max-w-md lg:mx-0"
            >
              <div className="flex flex-col gap-2.5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow focus-within:shadow-md">
                <input
                  type="tel"
                  placeholder="+380 __ ___ ____"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-xl border border-gray-100 bg-[#f7f8fa] px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-gray-300"
                />
                <div className="flex gap-2.5">
                  <input
                    type="text"
                    placeholder="Місто"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-1/2 rounded-xl border border-gray-100 bg-[#f7f8fa] px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-gray-300"
                  />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-1/2 appearance-none rounded-xl border border-gray-100 bg-[#f7f8fa] px-4 py-3 text-sm outline-none transition-colors focus:border-gray-300"
                    style={{ color: category ? "#111" : "#9ca3af" }}
                  >
                    <option value="" disabled>Тип техніки</option>
                    {techCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-black py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800"
                >
                  Почати отримувати заявки
                </button>
              </div>
            </form>

            <div className="mx-auto mt-6 flex max-w-md items-center justify-between lg:mx-0">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  2,500+ майстрів
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  400 ₴ за заявку
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <StoreButtons />
            </div>
          </div>

          {/* Phone — desktop only */}
          <div className="hidden flex-1 lg:flex lg:justify-end">
            <Image
              src="/phone-mockup.png"
              alt="FixPro — заявки на ремонт"
              width={380}
              height={760}
              className="w-[340px] drop-shadow-2xl xl:w-[400px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
