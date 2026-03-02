import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <a href="/" className="mb-4 flex items-center gap-2">
              <Image src="/logo.png" alt="FixPro" width={28} height={28} />
              <span className="text-base font-bold tracking-tight">FixPro</span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500">
              Сервіс, який приводить клієнтів майстрам з ремонту побутової
              техніки. Вам залишається лише прийняти заявку та заробити.
            </p>

          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                Платформа
              </h4>
              <nav className="flex flex-col gap-2.5">
                {[
                  ["Можливості", "#features"],
                  ["Ціни", "#pricing"],
                  ["Як це працює", "#how-it-works"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-sm text-gray-500 hover:text-black"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                Підтримка
              </h4>
              <nav className="flex flex-col gap-2.5">
                {["Допомога", "Контакти", "Політика"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-gray-500 hover:text-black"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-8 text-center text-xs text-gray-400">
          &copy; 2026 FixPro. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}
