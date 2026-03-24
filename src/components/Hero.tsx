import { useState } from "react";
import wtfLogo from "@/assets/wtf-logo.png";
import { Copy, Check, ExternalLink } from "lucide-react";

const CA = "2gNqgLE31QdbQjzw17MMfBuuQraNxFJYeXGUzrgHpump";
const DEX_URL = "https://dexscreener.com/solana/2pv16cqsymcyzimbkygqegr8mkaogk6gyt5pi1bsvw81";
const X_URL = "https://x.com/i/communities/2036312800491085965";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background noise */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      {/* Floating logo */}
      <div className="animate-float mb-8 relative z-10">
        <img src={wtfLogo} alt="$WTF angry emoji" className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl" />
      </div>

      {/* Title */}
      <h1 className="text-6xl md:text-9xl font-display text-primary text-glow-orange relative z-10 tracking-wider">
        $WTF
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mt-4 font-body text-center relative z-10 max-w-lg">
        Dev rugged. Community said <span className="text-accent font-bold">WTF!</span> — and took over.
      </p>

      {/* CA Copy */}
      <div className="mt-10 relative z-10 w-full max-w-xl">
        <button
          onClick={handleCopy}
          className="w-full bg-secondary border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-3 hover:border-primary/50 transition-colors group animate-pulse-glow"
        >
          <span className="text-muted-foreground text-xs font-body">CA:</span>
          <span className="text-foreground text-xs md:text-sm font-mono truncate flex-1 text-left">{CA}</span>
          {copied ? (
            <Check className="w-5 h-5 text-primary shrink-0" />
          ) : (
            <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
          )}
        </button>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 relative z-10 justify-center">
        <a
          href={DEX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground font-display text-lg px-8 py-3 rounded-lg hover:brightness-110 transition-all flex items-center gap-2 box-glow-orange"
        >
          BUY ON DEX <ExternalLink className="w-4 h-4" />
        </a>
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-foreground border border-border font-display text-lg px-8 py-3 rounded-lg hover:border-primary/50 transition-colors flex items-center gap-2"
        >
          JOIN X COMMUNITY <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce text-sm font-body">
        ↓ scroll for lore ↓
      </div>
    </section>
  );
};

export default Hero;
