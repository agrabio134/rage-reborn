import { ExternalLink } from "lucide-react";
import wtfLogo from "@/assets/wtf-logo.png";

const DEX_URL = "https://dexscreener.com/solana/2pv16cqsymcyzimbkygqegr8mkaogk6gyt5pi1bsvw81";
const PUMP_URL = "https://pump.fun/coin/2gNqgLE31QdbQjzw17MMfBuuQraNxFJYeXGUzrgHpump";
const X_URL = "https://x.com/i/communities/2036312800491085965";

const Footer = () => {
  return (
    <footer className="py-14 px-4 border-t-2 border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={wtfLogo} alt="WTF" className="w-8 h-8" />
            <span className="font-display text-xl text-foreground tracking-wider">$WTF</span>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            {[
              { label: "DexScreener", url: DEX_URL },
              { label: "Pump.fun", url: PUMP_URL },
              { label: "X Community", url: X_URL },
            ].map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 border border-border rounded-lg px-3 py-1.5">
                {link.label} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground/60 text-[10px] font-body">
            $WTF is a memecoin with no intrinsic value or expectation of financial return. DYOR. NFA. © 2025 $WTF Community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
