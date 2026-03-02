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

        {/* Video container — 16:9 aspect ratio */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-100 bg-black shadow-lg">
            {/* Replace src with your video URL (YouTube/Vimeo embed or mp4) */}
            {/*
              YouTube: <iframe src="https://www.youtube.com/embed/VIDEO_ID" ... />
              Vimeo:   <iframe src="https://player.vimeo.com/video/VIDEO_ID" ... />
              MP4:     <video src="/video.mp4" ... />
            */}

            {/* Placeholder — remove when adding real video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-transform hover:scale-110">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400">
                Вставте посилання на відео
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
