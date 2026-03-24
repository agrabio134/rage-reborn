import wtfLogo from "@/assets/wtf-logo.png";

const loreEntries = [
  {
    title: "THE LAUNCH",
    text: "$WTF launched like any other memecoin on Solana. The dev hyped it up, the community bought in, vibes were immaculate. Everyone thought this was going to be the next big thing.",
    emoji: "🚀",
  },
  {
    title: "THE BETRAYAL",
    text: "Then the dev did what devs do — sold from external wallets. Dumped bags on the community. Classic rug playbook. The chart nuked. Paper hands folded. It looked like it was over.",
    emoji: "🔪",
  },
  {
    title: "THE RAGE",
    text: "But the community didn't cry. They got ANGRY. WTF! became the battle cry. Diamond hands emerged from the chaos. A movement was born from pure rage and determination.",
    emoji: "😤",
  },
  {
    title: "THE CTO",
    text: "Community Takeover. No dev needed. The people took control — new socials, new marketing, new energy. $WTF isn't just a token anymore. It's a statement. We don't need devs. We ARE the project.",
    emoji: "👊",
  },
  {
    title: "THE FUTURE",
    text: "100% community owned. 100% community driven. No insiders, no VCs, no dev wallets. Just pure, unfiltered, angry memecoin energy. If you're reading this, you're still early.",
    emoji: "🔥",
  },
];

const Lore = () => {
  return (
    <section className="py-24 px-4 relative" id="lore">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-display text-center text-primary text-glow-orange mb-4">
          THE LORE
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-body text-lg">
          Every legend has an origin story. This one starts with betrayal.
        </p>

        <div className="space-y-8">
          {loreEntries.map((entry, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{entry.emoji}</span>
                <div>
                  <h3 className="text-2xl font-display text-primary mb-2 group-hover:text-glow-orange transition-all">
                    {entry.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {entry.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big angry emoji */}
        <div className="mt-16 flex justify-center">
          <img src={wtfLogo} alt="WTF angry emoji" className="w-32 h-32 opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default Lore;
