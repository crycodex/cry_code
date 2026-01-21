import { useEffect, useRef, type ReactNode } from 'react';

interface PixelCardProps {
  children: ReactNode;
  variant?: 'pink' | 'blue' | 'green' | 'purple' | 'default';
  className?: string;
}

class Pixel {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInteger: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;

  constructor(
    width: number,
    height: number,
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    isDark: boolean
  ) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = Math.random() * 0.5 + 0.2;
    this.size = Math.random() * 2 + 1;
    this.sizeStep = Math.random() * 0.05 + 0.02;
    this.minSize = 1;
    this.maxSizeInteger = Math.floor(Math.random() * 3) + 2;
    this.maxSize = this.maxSizeInteger;
    this.delay = Math.random() * 100;
    this.counter = 0;
    this.counterStep = Math.random() * 0.1 + 0.05;
    this.isIdle = true;
    this.isReverse = false;
    this.isShimmer = Math.random() > 0.7;
    
    // Adapt color for dark mode
    if (isDark) {
      this.color = this.adjustColorForDark(color);
    }
  }

  adjustColorForDark(color: string): string {
    // Make colors brighter/more visible in dark mode
    const colorMap: Record<string, string> = {
      '#ec4899': '#f472b6', // pink -> lighter pink
      '#3b82f6': '#60a5fa', // blue -> lighter blue
      '#10b981': '#34d399', // green -> lighter green
      '#a855f7': '#c084fc', // purple -> lighter purple
      '#ffffff': '#e5e7eb', // white -> light gray
      '#000000': '#ffffff', // black -> white
    };
    return colorMap[color] || color;
  }

  update(): void {
    this.counter += this.counterStep;
    
    if (this.delay > 0) {
      this.delay--;
      return;
    }

    if (this.isIdle) {
      if (this.counter > Math.random() * 50 + 20) {
        this.isIdle = false;
        this.counter = 0;
      }
      return;
    }

    if (this.isShimmer) {
      if (this.isReverse) {
        this.size -= this.sizeStep;
        if (this.size <= this.minSize) {
          this.isReverse = false;
          this.size = this.minSize;
        }
      } else {
        this.size += this.sizeStep;
        if (this.size >= this.maxSize) {
          this.isReverse = true;
          this.size = this.maxSize;
        }
      }
    }

    this.y += this.speed;
    if (this.y > this.height) {
      this.y = -this.maxSize;
      this.x = Math.random() * this.width;
      this.isIdle = true;
      this.counter = 0;
      this.delay = Math.random() * 100;
    }
  }

  draw(): void {
    if (this.delay > 0 || this.isIdle) return;

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

export default function PixelCard({ children, variant = 'default', className = '' }: PixelCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0 as unknown as number);
  const pixelsRef = useRef<Pixel[]>([]);
  const isDarkRef = useRef<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const checkDarkMode = (): boolean => {
      return document.documentElement.getAttribute('data-theme') === 'dark';
    };

    isDarkRef.current = checkDarkMode();

    const variantColors: Record<string, string> = {
      pink: '#ec4899',
      blue: '#3b82f6',
      green: '#10b981',
      purple: '#a855f7',
      default: isDarkRef.current ? '#ffffff' : '#000000',
    };

    const color = variantColors[variant] || variantColors.default;

    const resizeCanvas = (): void => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const pixelCount = Math.floor((canvas.width * canvas.height) / 8000);
    pixelsRef.current = [];

    for (let i = 0; i < pixelCount; i++) {
      pixelsRef.current.push(
        new Pixel(
          canvas.width,
          canvas.height,
          ctx,
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          color,
          isDarkRef.current
        )
      );
    }

    const animate = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update dark mode if changed
      const isDark = checkDarkMode();
      if (isDark !== isDarkRef.current) {
        isDarkRef.current = isDark;
        const baseColor = variant === 'default' 
          ? (isDark ? '#ffffff' : '#000000')
          : (variantColors[variant] || variantColors.default);
        pixelsRef.current.forEach((pixel) => {
          pixel.color = isDark && variant !== 'default' 
            ? pixel.adjustColorForDark(baseColor) 
            : baseColor;
        });
      }

      pixelsRef.current.forEach((pixel) => {
        pixel.update();
        pixel.draw();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.3 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
