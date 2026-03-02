const categories = [
  {
    name: "Пральні машини",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <circle cx="12" cy="13" r="5" />
        <circle cx="12" cy="13" r="2" />
        <circle cx="7" cy="5" r="1" fill="currentColor" stroke="none" />
        <circle cx="10" cy="5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Холодильники",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M4 10h16" />
        <path d="M18 6h-2" />
        <path d="M18 14h-2" />
      </svg>
    ),
  },
  {
    name: "Посудомийки",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M2 8h20" />
        <circle cx="12" cy="5" r="1" fill="currentColor" stroke="none" />
        <path d="M8 12v4" />
        <path d="M12 12v4" />
        <path d="M16 12v4" />
      </svg>
    ),
  },
  {
    name: "Бойлери",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="7" />
        <path d="M12 14v4" />
        <circle cx="12" cy="8" r="2" />
      </svg>
    ),
  },
  {
    name: "Кондиціонери",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="12" rx="2" />
        <path d="M6 20l2-4" />
        <path d="M18 20l-2-4" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    name: "Мікрохвильовки",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="15" rx="2" />
        <rect x="4" y="6" width="12" height="11" rx="1" />
        <circle cx="19" cy="9" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="13" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Плити та духовки",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M2 10h20" />
        <circle cx="8" cy="6" r="1.5" />
        <circle cx="16" cy="6" r="1.5" />
        <rect x="5" y="13" width="14" height="6" rx="1" />
      </svg>
    ),
  },
  {
    name: "Сушильні машини",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <circle cx="12" cy="13" r="5" />
        <path d="M10 11.5c.5-.5 1.5-.5 2 0s1.5.5 2 0" />
        <circle cx="7" cy="5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];


export default function Categories() {
  return (
    <section className="border-y border-gray-100 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
          Категорії техніки, на які приходять заявки
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2.5 rounded-2xl border border-gray-100 bg-[#f7f8fa] px-3 py-5 transition-colors hover:border-gray-200"
            >
              <div className="text-gray-600">{c.icon}</div>
              <span className="text-center text-xs font-medium leading-tight text-gray-600">
                {c.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Не знайшли свою категорію? Ми постійно розширюємо список за запитами майстрів
        </p>
      </div>
    </section>
  );
}
