import wtfLogo from "@/assets/wtf-logo.png";

const loreEntries = [
  {
    title: "THE LAUNCH",
    text: "$WTF launched like any other memecoin on Solana. The dev hyped it up, the community bought in, vibes were immaculate.",
    icon: "🚀",
    num: "01",
  },
  {
    title: "THE BETRAYAL",
    text: "Then the dev did what devs do — sold from external wallets. Dumped bags on the community. Classic rug playbook.",
    icon: "🔪",
    num: "02",
  },
  {
    title: "THE RAGE",
    text: "But the community didn't cry. They got ANGRY. WTF! became the battle cry. Diamond hands emerged from chaos.",
    icon: "😤",
    num: "03",
  },
  {
    title: "THE CTO",
    text: "Community Takeover. No dev needed. The people took control — new socials, new marketing, new energy. We ARE the project.",
    icon: "👊",
    num: "04",
  },
  {
    title: "THE FUTURE",
    text: "100% community owned. No insiders, no VCs, no dev wallets. Just pure, unfiltered, angry memecoin energy. You're still early.",
    icon: "🔥",
    num: "05",
  },
];

const Lore = () => {
  return (
    <section className="py-24 px-4 relative" id="lore">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-lg tracking-widest">THE ORIGIN</span>
          <h2 className="text-5xl md:text-7xl font-display text-foreground mt-2">
            LORE
          </h2>
        </div>

        <div className="space-y-4">
          {loreEntries.map((entry, i) => (
            <div
              key={i}
              className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary transition-all duration-300 group flex items-start gap-5"
            >
              <div className="flex flex-col items-center shrink-0">
                <span className="text-4xl">{entry.icon}</span>
                <span className="text-muted-foreground/30 font-display text-xs mt-1">{entry.num}</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display text-foreground mb-1 group-hover:text-primary transition-colors">
                  {entry.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-sm md:text-base">
                  {entry.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <img src={wtfLogo} alt="WTF" className="w-24 h-24 opacity-10 grayscale" />
        </div>
      </div>
    </section>
  );
};

export default Lore;
