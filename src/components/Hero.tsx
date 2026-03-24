import { useState } from "react";
import wtfLogo from "@/assets/wtf-logo.png";
import { Copy, Check, ExternalLink, ChevronDown } from "lucide-react";

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
      {/* Subtle radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(24_100%_50%/0.06),transparent_70%)]" />

      {/* Ticker bar */}
      <div className="absolute top-0 left-0 right-0 bg-foreground overflow-hidden py-2">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-background font-display text-sm mx-6 tracking-widest">
              $WTF • CTO • COMMUNITY TAKEOVER • DEV DUMPED •
            </span>
          ))}
        </div>
      </div>

      {/* Logo */}
      <div className="animate-float mb-6 relative z-10 mt-16">
        <img src={wtfLogo} alt="$WTF angry emoji" className="w-40 h-40 md:w-56 md:h-56 drop-shadow-[0_20px_40px_hsl(24_100%_50%/0.3)]" />
      </div>

      {/* Title */}
      <div className="animate-slam relative z-10">
        <h1 className="text-7xl md:text-[10rem] font-display text-foreground leading-none tracking-tight">
          $WTF
        </h1>
      </div>
      <p className="text-lg md:text-xl text-muted-foreground mt-3 font-body text-center relative z-10 max-w-md">
        Dev rugged. Community said <span className="text-accent font-bold">WTF!</span> — and took over.
      </p>

      {/* CA */}
      <div className="mt-8 relative z-10 w-full max-w-xl">
        <button
          onClick={handleCopy}
          className="w-full bg-card border-2 border-border rounded-2xl px-5 py-4 flex items-center justify-between gap-3 hover:border-primary transition-colors group animate-fire-pulse"
        >
          <span className="text-muted-foreground text-xs font-display tracking-wider">CA</span>
          <span className="text-foreground text-xs md:text-sm font-mono truncate flex-1 text-left">{CA}</span>
          {copied ? (
            <span className="text-primary font-display text-sm flex items-center gap-1">
              <Check className="w-4 h-4" /> COPIED!
            </span>
          ) : (
            <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
          )}
        </button>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-3 relative z-10 justify-center">
        <a
          href={DEX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground font-display text-base md:text-lg px-8 py-3.5 rounded-2xl hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
        >
          BUY $WTF <ExternalLink className="w-4 h-4" />
        </a>
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-background font-display text-base md:text-lg px-8 py-3.5 rounded-2xl hover:opacity-90 transition-all flex items-center gap-2"
        >
          JOIN COMMUNITY <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Scroll */}
      <a href="#chart" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors">
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
