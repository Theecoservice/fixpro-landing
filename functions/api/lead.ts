interface Env {
  TG_BOT_TOKEN: string;
  TG_CHAT_ID: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const corsHeaders = {
    "Content-Type": "application/json",
  };

  try {
    const body = await request.json<{
      phone?: string;
      city?: string;
      category?: string;
    }>();

    const { phone, city, category } = body;

    if (!phone || !city || !category) {
      return new Response(
        JSON.stringify({ ok: false, error: "Заповніть усі поля" }),
        { status: 400, headers: corsHeaders }
      );
    }

    const text = [
      "📥 *Нова заявка з лендінгу*",
      "",
      `📞 Телефон: \`${phone}\``,
      `🏙 Місто: ${city}`,
      `🔧 Категорія: ${category}`,
    ].join("\n");

    const tgResponse = await fetch(
      `https://api.telegram.org/bot${env.TG_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.TG_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!tgResponse.ok) {
      const tgError = await tgResponse.text();
      console.error("Telegram API error:", tgError);
      return new Response(
        JSON.stringify({ ok: false, error: "Не вдалося надіслати заявку" }),
        { status: 502, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: corsHeaders }
    );
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: "Невірний формат запиту" }),
      { status: 400, headers: corsHeaders }
    );
  }
};
