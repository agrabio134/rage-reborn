const ChartEmbed = () => {
  return (
    <section className="py-16 px-4" id="chart">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display text-center text-foreground mb-2">
          LIVE CHART
        </h2>
        <p className="text-center text-muted-foreground mb-10 font-body">
          Real-time price action on DexScreener
        </p>
        <div className="rounded-2xl overflow-hidden border-2 border-border shadow-xl">
          <div
            style={{ position: "relative", width: "100%", paddingBottom: "65%" }}
          >
            <iframe
              src="https://dexscreener.com/solana/2pV16CqSYMCyziMBKyGQEGR8Mkaogk6gyt5pi1BsVw81?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=5"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: 0,
              }}
              title="DexScreener Chart"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartEmbed;
