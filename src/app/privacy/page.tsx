import Image from "next/image";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="FixPro" width={28} height={28} />
            <span className="text-base font-bold tracking-tight">FixPro</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Політика конфіденційності
        </h1>
        <p className="mt-2 text-sm text-gray-400">Останнє оновлення: 9 березня 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-600">
          <section>
            <h2 className="text-lg font-bold text-[#111]">1. Загальні положення</h2>
            <p className="mt-2">
              Ця Політика конфіденційності описує, як платформа FixPro (далі — «ми», «нас», «платформа»)
              збирає, використовує та захищає персональні дані користувачів веб-сайту та мобільного додатку.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111]">2. Які дані ми збираємо</h2>
            <p className="mt-2">Ми збираємо наступні дані, які ви надаєте добровільно:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Номер телефону</li>
              <li>Місто проживання</li>
              <li>Категорія техніки, з якою ви працюєте</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111]">3. Мета збору даних</h2>
            <p className="mt-2">Ваші дані використовуються виключно для:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Реєстрації вас як майстра на платформі</li>
              <li>Надсилання заявок на ремонт від клієнтів</li>
              <li>Зв&apos;язку з вами з питань роботи платформи</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111]">4. Передача даних третім особам</h2>
            <p className="mt-2">
              Ми не продаємо та не передаємо ваші персональні дані третім особам, окрім випадків,
              передбачених законодавством України. Ваш номер телефону може бути наданий клієнту
              виключно в рамках прийнятої вами заявки на ремонт.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111]">5. Захист даних</h2>
            <p className="mt-2">
              Ми вживаємо технічних та організаційних заходів для захисту ваших персональних даних
              від несанкціонованого доступу, зміни, розкриття або знищення.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111]">6. Ваші права</h2>
            <p className="mt-2">Ви маєте право:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Запитати інформацію про ваші дані, які ми зберігаємо</li>
              <li>Вимагати виправлення неточних даних</li>
              <li>Вимагати видалення ваших даних з платформи</li>
              <li>Відкликати згоду на обробку даних у будь-який момент</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111]">7. Контакти</h2>
            <p className="mt-2">
              З питань конфіденційності звертайтесь на електронну пошту:{" "}
              <a href="mailto:contact@fixapp.pro" className="text-black underline underline-offset-2">
                contact@fixapp.pro
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
