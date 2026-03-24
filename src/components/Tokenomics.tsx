const Tokenomics = () => {
  return (
    <section className="py-24 px-4 bg-foreground" id="tokenomics">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-display text-lg tracking-widest">NUMBERS</span>
        <h2 className="text-5xl md:text-7xl font-display text-background mt-2 mb-16">
          TOKENOMICS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "TOTAL SUPPLY", value: "1B", sub: "One Billion Tokens" },
            { label: "BUY / SELL TAX", value: "0%", sub: "Zero Tax Forever" },
            { label: "OWNERSHIP", value: "CTO", sub: "Community Takeover" },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-background/20 rounded-2xl p-8 hover:border-primary transition-colors bg-background/5"
            >
              <p className="text-background/50 font-display text-xs tracking-widest mb-3">{item.label}</p>
              <p className="text-5xl md:text-6xl font-display text-primary">{item.value}</p>
              <p className="text-background/40 font-body text-sm mt-3">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-accent/40 rounded-2xl p-6 bg-accent/10 text-left">
          <p className="text-accent font-display text-lg mb-1">⚠️ DEV WALLETS DUMPED</p>
          <p className="text-background/60 font-body text-sm">
            The original developer sold from external wallets. This is now 100% community-run. 
            No insider wallets. No rug risk. Just community power.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
