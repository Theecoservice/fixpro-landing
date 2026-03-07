export default function VideoSection() {
  return (
    <section id="video" className="bg-[#f7f8fa] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            Відео
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Подивіться, як це працює
          </h2>
          <p className="mt-4 text-base text-gray-500">
            За 2 хвилини ви зрозумієте, як отримувати клієнтів на ремонт через FixPro
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-100 bg-black shadow-lg">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster=""
            >
              <source src="/video.mp4" type="video/mp4" />
              Ваш браузер не підтримує відтворення відео.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
