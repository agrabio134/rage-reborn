const Tokenomics = () => {
  return (
    <section className="py-24 px-4 bg-foreground" id="tokenomics">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-primary text-lg tracking-[0.3em]">NUMBERS</p>
        <h2 className="font-display text-6xl md:text-8xl text-background tracking-tight mt-1 mb-14">TOKENOMICS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { label: "SUPPLY", value: "1B", sub: "Total Supply" },
            { label: "TAX", value: "0%", sub: "Buy & Sell" },
            { label: "STATUS", value: "CTO", sub: "Community Owned" },
          ].map((item, i) => (
            <div key={i} className="border border-background/15 rounded-xl p-8 hover:border-primary transition-colors">
              <p className="font-display text-background/40 text-xs tracking-[0.3em] mb-2">{item.label}</p>
              <p className="font-display text-6xl text-primary">{item.value}</p>
              <p className="font-body text-background/30 text-sm mt-2">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-accent/50 rounded-xl p-5 text-left bg-accent/10">
          <p className="font-display text-accent text-base tracking-wider">⚠️ DEV WALLETS DUMPED</p>
          <p className="font-body text-background/50 text-sm mt-1">
            The original developer sold from external wallets. This is now 100% community-run. No insider wallets. No rug risk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
