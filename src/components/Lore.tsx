const loreEntries = [
  { num: "01", title: "THE LAUNCH", text: "$WTF launched like any other memecoin on Solana. The dev hyped it up, the community bought in. Vibes were immaculate.", icon: "🚀" },
  { num: "02", title: "THE BETRAYAL", text: "Then the dev did what devs do — sold from external wallets. Dumped bags on the community. Classic rug.", icon: "🔪" },
  { num: "03", title: "THE RAGE", text: "But the community didn't fold. They got ANGRY. WTF! became the battle cry. Diamond hands rose from the ashes.", icon: "😤" },
  { num: "04", title: "THE CTO", text: "Community Takeover. No dev needed. The people took control — new socials, new marketing, new energy.", icon: "👊" },
  { num: "05", title: "THE FUTURE", text: "100% community owned. No insiders, no VCs, no dev wallets. Just pure angry memecoin energy. You're still early.", icon: "🔥" },
];

const Lore = () => {
  return (
    <section className="py-24 px-4" id="lore">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-primary text-lg tracking-[0.3em]">ORIGIN STORY</p>
          <h2 className="font-display text-6xl md:text-8xl text-foreground tracking-tight mt-1">THE LORE</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {loreEntries.map((entry, i) => (
              <div key={i} className="relative pl-16 md:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-3 w-4 h-4 rounded-full border-2 border-foreground bg-background group-hover:bg-primary group-hover:border-primary transition-colors" />

                <div className="border-2 border-border rounded-xl p-5 md:p-6 hover:border-foreground transition-colors bg-background">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{entry.icon}</span>
                    <span className="font-display text-foreground/20 text-sm">{entry.num}</span>
                    <h3 className="font-display text-xl md:text-2xl text-foreground tracking-wide">{entry.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{entry.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lore;
