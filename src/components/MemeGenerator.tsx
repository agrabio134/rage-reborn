import { useState, useRef, useCallback, useEffect } from "react";
import wtfTapeImg from "@/assets/wtf-tape.png";
import { Upload, Download, RotateCw, RotateCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Plus, Minus, RefreshCw } from "lucide-react";

interface TapeState {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

const MemeGenerator = () => {
  const [image, setImage] = useState<string | null>(null);
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
  const [tape, setTape] = useState<TapeState>({ x: 50, y: 60, width: 200, height: 60, rotation: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target?.result as string;
      setImage(src);
      const img = new Image();
      img.onload = () => {
        const maxW = Math.min(500, window.innerWidth - 48);
        const scale = maxW / img.width;
        const w = maxW;
        const h = img.height * scale;
        setImgSize({ w, h });
        setTape({ x: w / 2 - 100, y: h / 2 - 25, width: 200, height: 50, rotation: 0 });
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  };

  const move = (dx: number, dy: number) => setTape((t) => ({ ...t, x: t.x + dx, y: t.y + dy }));
  const resize = (dw: number) => setTape((t) => ({ ...t, width: Math.max(80, t.width + dw), height: Math.max(25, t.height + dw * 0.3) }));
  const rotate = (dr: number) => setTape((t) => ({ ...t, rotation: t.rotation + dr }));

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - tape.x, y: clientY - tape.y });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const rect = containerRef.current.getBoundingClientRect();
      setTape((t) => ({
        ...t,
        x: clientX - rect.left - dragStart.x + tape.x - (clientX - rect.left - dragStart.x - tape.x) * 0 + (clientX - dragStart.x - rect.left),
        y: clientY - rect.top - dragStart.y + tape.y - (clientY - rect.top - dragStart.y - tape.y) * 0 + (clientY - dragStart.y - rect.top),
      }));
    },
    [isDragging, dragStart]
  );

  // Simplified drag
  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const rect = containerRef.current.getBoundingClientRect();
      setTape((t) => ({ ...t, x: clientX - rect.left - dragStart.x, y: clientY - rect.top - dragStart.y }));
    };
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDownTape = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setDragStart({ x: clientX - rect.left - tape.x, y: clientY - rect.top - tape.y });
    }
  };

  const downloadMeme = () => {
    if (!image || !canvasRef.current) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current!;
      const scaleX = img.width / imgSize.w;
      const scaleY = img.height / imgSize.h;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);

      // Draw tape using the WTF image
      const tapeImg = new Image();
      tapeImg.crossOrigin = "anonymous";
      tapeImg.onload = () => {
        const cx = (tape.x + tape.width / 2) * scaleX;
        const cy = (tape.y + tape.height / 2) * scaleY;
        const tw = tape.width * scaleX;
        const th = tape.height * scaleY;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((tape.rotation * Math.PI) / 180);
        ctx.drawImage(tapeImg, -tw / 2, -th / 2, tw, th);
        ctx.restore();

        const link = document.createElement("a");
        link.download = "wtf-meme.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      };
      tapeImg.src = wtfTapeImg;
    };
    img.src = image;
  };

  const STEP = 10;

  return (
    <section id="meme" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl text-foreground text-center mb-2">MEME GENERATOR</h2>
        <p className="text-muted-foreground text-center mb-8 font-body">
          Upload your image. Slap the <span className="text-primary font-bold">WTF!</span> tape on it.
        </p>

        {!image ? (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-foreground/20 rounded-2xl py-20 flex flex-col items-center gap-4 hover:border-primary hover:bg-primary/5 transition-all group"
          >
            <Upload className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-display text-xl text-muted-foreground group-hover:text-primary tracking-wider">
              DROP YOUR IMAGE HERE
            </span>
          </button>
        ) : (
          <div className="space-y-4">
            {/* Preview */}
            <div
              ref={containerRef}
              className="relative mx-auto overflow-hidden rounded-xl border-2 border-foreground/10 bg-muted"
              style={{ width: imgSize.w, height: imgSize.h }}
            >
              <img src={image} alt="meme base" className="w-full h-full object-cover pointer-events-none select-none" />

              {/* WTF Tape overlay */}
              <div
                onMouseDown={handleMouseDownTape}
                onTouchStart={handleMouseDownTape}
                className="absolute cursor-grab active:cursor-grabbing select-none"
                style={{
                  left: tape.x,
                  top: tape.y,
                  width: tape.width,
                  height: tape.height,
                  transform: `rotate(${tape.rotation}deg)`,
                  transformOrigin: "center center",
                }}
              >
                <img src={wtfTapeImg} alt="WTF!" className="w-full h-full object-fill select-none pointer-events-none" />
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {/* Position */}
              <div className="flex items-center gap-1 bg-secondary rounded-xl p-1">
                <button onClick={() => move(-STEP, 0)} className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Move Left">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button onClick={() => move(0, -STEP)} className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Move Up">
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button onClick={() => move(0, STEP)} className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Move Down">
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button onClick={() => move(STEP, 0)} className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Move Right">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Size */}
              <div className="flex items-center gap-1 bg-secondary rounded-xl p-1">
                <button onClick={() => resize(-15)} className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Smaller">
                  <Minus className="w-4 h-4" />
                </button>
                <button onClick={() => resize(15)} className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Bigger">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Rotation */}
              <div className="flex items-center gap-1 bg-secondary rounded-xl p-1">
                <button onClick={() => rotate(-15)} className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Rotate Left">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button onClick={() => rotate(15)} className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Rotate Right">
                  <RotateCw className="w-4 h-4" />
                </button>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setImage(null);
                  setTape({ x: 50, y: 60, width: 200, height: 60, rotation: 0 });
                }}
                className="p-2 bg-secondary hover:bg-accent/10 rounded-xl transition-colors"
                title="New Image"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {/* Download */}
            <button
              onClick={downloadMeme}
              className="w-full bg-foreground text-background font-display text-lg tracking-widest py-4 rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-3"
            >
              <Download className="w-5 h-5" /> DOWNLOAD MEME
            </button>
          </div>
        )}

        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </section>
  );
};

export default MemeGenerator;
