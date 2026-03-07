import StoreButtons from "./StoreButtons";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Тарифи
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Простий тариф — без абонплати
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Платите тільки за реальні заявки від клієнтів
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl items-stretch gap-6 lg:grid-cols-2">
          {/* Мастера */}
          <div className="relative flex flex-col rounded-2xl border border-black bg-black p-8 text-white shadow-xl">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold text-white">
              Для майстрів
            </span>

            <h3 className="text-lg font-bold">Майстер</h3>
            <p className="mt-1 text-sm text-gray-400">
              Приватні майстри та ФОП · Реєстрація безкоштовна
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold">400</span>
              <span className="text-lg text-gray-400"> ₴</span>
              <span className="ml-1 text-sm text-gray-400">/ за заявку</span>
            </div>

            <p className="mt-3 text-sm text-gray-400">
              Єдина ціна для всіх категорій техніки — діє у бета-версії платформи
            </p>

            <ul className="mt-8 flex-1 space-y-3">
              {[
                "Без абонплати та підписок",
                "Заявки у вашому районі",
                "Контакти клієнта одразу",
                "Сповіщення про нові заявки",
                "Особистий кабінет",
                "Ви самі встановлюєте ціни",
              ].map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-sm">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-gray-300">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <StoreButtons theme="light" />
            </div>
          </div>

          {/* Сервисы */}
          <div className="flex flex-col rounded-2xl border border-gray-100 bg-[#f7f8fa] p-8">
            <h3 className="text-lg font-bold">Сервісний центр</h3>
            <p className="mt-1 text-sm text-gray-500">
              Для компаній та сервісних центрів
            </p>

            <div className="mt-6">
              <span className="text-3xl font-extrabold">Індивідуально</span>
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Комерційна пропозиція під ваші обсяги та потреби
            </p>

            <ul className="mt-8 flex-1 space-y-3">
              {[
                "Індивідуальний тариф",
                "Необмежена кількість майстрів",
                "Розподіл заявок між командою",
                "Пріоритет у видачі заявок",
                "Брендований профіль",
                "Персональний менеджер",
              ].map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-sm">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-gray-600">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:contact@fixapp.pro"
              className="mt-8 block rounded-full bg-black py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-gray-800"
            >
              Отримати пропозицію
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
