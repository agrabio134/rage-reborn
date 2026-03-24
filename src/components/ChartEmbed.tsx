const ChartEmbed = () => {
  return (
    <section className="px-4 pb-20" id="chart">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-tight">LIVE CHART</h2>
        </div>
        <div className="rounded-2xl overflow-hidden border-2 border-foreground">
          <div style={{ position: "relative", width: "100%", paddingBottom: "65%" }}>
            <iframe
              src="https://dexscreener.com/solana/2pV16CqSYMCyziMBKyGQEGR8Mkaogk6gyt5pi1BsVw81?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=5"
              style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: 0 }}
              title="DexScreener Chart"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartEmbed;
