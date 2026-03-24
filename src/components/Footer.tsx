import { ExternalLink } from "lucide-react";

const CA = "2gNqgLE31QdbQjzw17MMfBuuQraNxFJYeXGUzrgHpump";
const DEX_URL = "https://dexscreener.com/solana/2pv16cqsymcyzimbkygqegr8mkaogk6gyt5pi1bsvw81";
const X_URL = "https://x.com/i/communities/2036312800491085965";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-display text-3xl text-primary mb-6">$WTF</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href={DEX_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-body">
            DexScreener <ExternalLink className="w-3 h-3" />
          </a>
          <a href={X_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-body">
            X Community <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <p className="text-muted-foreground text-xs font-body">
          $WTF is a memecoin with no intrinsic value or expectation of financial return. 
          It exists purely for entertainment. DYOR. NFA.
        </p>
        <p className="text-muted-foreground/50 text-xs font-body mt-4">
          © 2025 $WTF Community. All rights reserved to nobody.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
