import { useState } from "react";
import wtfLogo from "@/assets/wtf-logo.png";
import { Copy, Check, ExternalLink } from "lucide-react";

const CA = "2gNqgLE31QdbQjzw17MMfBuuQraNxFJYeXGUzrgHpump";
const DEX_URL = "https://dexscreener.com/solana/2pv16cqsymcyzimbkygqegr8mkaogk6gyt5pi1bsvw81";
const PUMP_URL = "https://pump.fun/coin/2gNqgLE31QdbQjzw17MMfBuuQraNxFJYeXGUzrgHpump";
const X_URL = "https://x.com/i/communities/2036312800491085965";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Ticker */}
      <div className="bg-foreground py-2 overflow-hidden">
        <div className="animate-ticker whitespace-nowrap flex">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className="text-background font-display text-sm mx-4 tracking-[0.3em]">
              $WTF &bull; CTO &bull; COMMUNITY TAKEOVER &bull;
            </span>
          ))}
        </div>
      </div>

      {/* Main hero */}
      <div className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 relative">
        {/* Big subtle watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display text-[20rem] md:text-[35rem] text-foreground/[0.02] leading-none">
            WTF
          </span>
        </div>

        <div className="animate-float relative z-10 mb-4">
          <img
            src={wtfLogo}
            alt="$WTF angry emoji"
            className="w-36 h-36 md:w-48 md:h-48 drop-shadow-[0_15px_30px_rgba(234,88,12,0.25)]"
          />
        </div>

        <h1 className="font-display text-8xl md:text-[12rem] leading-[0.85] text-foreground relative z-10 tracking-tight">
          $WTF
        </h1>

        <p className="text-muted-foreground text-base md:text-lg mt-4 text-center max-w-sm relative z-10 font-body">
          Dev rugged. Community said <span className="text-accent font-semibold">WTF!</span> and took over.
        </p>

        {/* CA box */}
        <button
          onClick={handleCopy}
          className="mt-8 relative z-10 w-full max-w-lg bg-background border-2 border-foreground rounded-xl px-4 py-3 flex items-center gap-3 hover:border-primary transition-colors group"
        >
          <span className="bg-foreground text-background font-display text-xs px-2 py-0.5 rounded tracking-wider">CA</span>
          <span className="text-foreground/70 text-[11px] md:text-xs font-mono truncate flex-1 text-left">{CA}</span>
          {copied ? (
            <span className="text-primary font-display text-xs flex items-center gap-1 shrink-0">
              <Check className="w-3.5 h-3.5" /> COPIED
            </span>
          ) : (
            <Copy className="w-4 h-4 text-foreground/30 group-hover:text-primary shrink-0 transition-colors" />
          )}
        </button>

        {/* CTA row */}
        <div className="mt-6 flex flex-wrap gap-3 relative z-10 justify-center">
          <a href={DEX_URL} target="_blank" rel="noopener noreferrer"
            className="bg-foreground text-background font-display text-sm tracking-wider px-7 py-3 rounded-xl hover:bg-primary transition-colors flex items-center gap-2">
            DEXSCREENER <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a href={PUMP_URL} target="_blank" rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-display text-sm tracking-wider px-7 py-3 rounded-xl hover:brightness-110 transition-all flex items-center gap-2">
            PUMP.FUN <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a href={X_URL} target="_blank" rel="noopener noreferrer"
            className="border-2 border-foreground text-foreground font-display text-sm tracking-wider px-7 py-3 rounded-xl hover:bg-foreground hover:text-background transition-colors flex items-center gap-2">
            X COMMUNITY <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
