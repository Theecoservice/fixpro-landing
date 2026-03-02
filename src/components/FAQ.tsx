"use client";

import { useState } from "react";
import StoreButtons from "./StoreButtons";

const faqs = [
  {
    q: "Скільки заявок я буду отримувати?",
    a: "Залежить від вашого міста, спеціалізації та кількості категорій техніки. В середньому майстри отримують 15–30 заявок на місяць. У великих містах — більше.",
  },
  {
    q: "А якщо заявка фейкова?",
    a: "Кожен номер клієнта проходить верифікацію перед відправкою заявки. Якщо заявка виявиться нереальною — ми повернемо кошти на ваш баланс.",
  },
  {
    q: "Як швидко я отримаю першу заявку?",
    a: "Більшість майстрів отримують першу заявку протягом першого дня після реєстрації та налаштування профілю.",
  },
  {
    q: "Чи потрібно платити абонплату?",
    a: "Ні. Жодних абонплат чи підписок. Ви платите тільки 400 ₴ за реальну заявку з контактами клієнта.",
  },
  {
    q: "Як я отримую контакти клієнта?",
    a: "Одразу після появи заявки вам приходить сповіщення з номером телефону, адресою клієнта та описом проблеми. Ви зв'язуєтесь напряму.",
  },
  {
    q: "Чи можу я обрати категорії техніки?",
    a: "Так. У особистому кабінеті ви обираєте категорії техніки, які ремонтуєте — і отримуєте заявки тільки за ними.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#f7f8fa] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Питання
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Часті запитання
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="text-base font-semibold">{faq.q}</span>
                  <svg
                    className={`ml-4 h-5 w-5 shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-gray-500">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA with store buttons */}
        <div className="mx-auto mt-16 max-w-xl text-center">
          <p className="text-lg font-semibold">
            Готові отримувати клієнтів?
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Завантажте додаток і отримайте першу заявку вже сьогодні
          </p>
          <div className="mt-6 flex justify-center">
            <StoreButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
