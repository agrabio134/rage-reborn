import { ExternalLink } from "lucide-react";
import wtfLogo from "@/assets/wtf-logo.png";

const CA = "2gNqgLE31QdbQjzw17MMfBuuQraNxFJYeXGUzrgHpump";
const DEX_URL = "https://dexscreener.com/solana/2pv16cqsymcyzimbkygqegr8mkaogk6gyt5pi1bsvw81";
const X_URL = "https://x.com/i/communities/2036312800491085965";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t-2 border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={wtfLogo} alt="WTF" className="w-10 h-10" />
            <span className="font-display text-2xl text-foreground">$WTF</span>
          </div>
          <div className="flex gap-4">
            <a href={DEX_URL} target="_blank" rel="noopener noreferrer" className="bg-secondary text-foreground font-body text-sm px-5 py-2.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1.5">
              DexScreener <ExternalLink className="w-3 h-3" />
            </a>
            <a href={X_URL} target="_blank" rel="noopener noreferrer" className="bg-secondary text-foreground font-body text-sm px-5 py-2.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1.5">
              X Community <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs font-body">
            $WTF is a memecoin with no intrinsic value or expectation of financial return. DYOR. NFA.
          </p>
          <p className="text-muted-foreground/40 text-xs font-body mt-2">
            © 2025 $WTF Community. All rights reserved to nobody.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
