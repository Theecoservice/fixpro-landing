const steps = [
  {
    num: "01",
    title: "Реєстрація",
    text: "Створіть профіль за 2 хвилини. Вкажіть спеціалізацію, район роботи та категорії техніки.",
  },
  {
    num: "02",
    title: "Отримуєте заявку",
    text: "Клієнт залишає заявку — ви отримуєте сповіщення з контактами, адресою та описом проблеми.",
  },
  {
    num: "03",
    title: "Виконуєте ремонт",
    text: "Зв'яжіться з клієнтом, узгодьте час та вартість. Ви самі встановлюєте ціни на свої послуги.",
  },
  {
    num: "04",
    title: "Отримуєте оплату від клієнта",
    text: "100% оплати — ваша. Жодних комісій з доходу. Клієнт платить вам напряму за виконану роботу.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f7f8fa] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Як це працює
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Від реєстрації до першого клієнта — за 1 день
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6">
              <span className="text-4xl font-extrabold text-gray-100">
                {s.num}
              </span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
