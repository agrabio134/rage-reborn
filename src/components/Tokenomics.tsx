const Tokenomics = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30" id="tokenomics">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-display text-primary text-glow-orange mb-16">
          TOKENOMICS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "SUPPLY", value: "1B", sub: "Total Supply" },
            { label: "TAX", value: "0%", sub: "Buy & Sell" },
            { label: "OWNERSHIP", value: "CTO", sub: "Community Owned" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors"
            >
              <p className="text-muted-foreground font-body text-sm mb-2">{item.label}</p>
              <p className="text-5xl font-display text-primary text-glow-orange">{item.value}</p>
              <p className="text-muted-foreground font-body text-sm mt-2">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card border border-accent/30 rounded-lg p-6">
          <p className="text-accent font-display text-xl mb-2">⚠️ DEV WALLETS DUMPED</p>
          <p className="text-muted-foreground font-body">
            The original developer sold from external wallets. This is now a 100% community-run project. 
            No insider wallets. No rug risk. Just pure community power.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
