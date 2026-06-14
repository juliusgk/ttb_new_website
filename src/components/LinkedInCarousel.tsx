// Real LinkedIn post embeds from https://www.linkedin.com/company/transatlantic-talent-bridge

type Embed = { src: string; height: number };

const embeds: Embed[] = [
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7428106659475980288?collapsed=1", height: 668 },
  { src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7436871899453927424?collapsed=1", height: 634 },
];

export function LinkedInCarousel() {
  const trackHeight = Math.max(...embeds.map((e) => e.height));

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div
        className="flex gap-6 animate-[scroll_60s_linear_infinite] hover:[animation-play-state:paused]"
        style={{ height: trackHeight }}
      >
        {[...embeds, ...embeds].map((post, i) => (
          <div
            key={i}
            className="shrink-0 w-[360px] bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]"
          >
            <iframe
              src={post.src}
              height={post.height}
              width="100%"
              frameBorder={0}
              allowFullScreen
              title="Embedded LinkedIn post"
              loading="lazy"
              className="block"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
