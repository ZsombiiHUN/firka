'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      const moveX = (xPercent - 0.5) * 20;
      const moveY = (yPercent - 0.5) * 20;
      
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
      style={{ 
        '--move-x': '0px', 
        '--move-y': '0px' 
      } as React.CSSProperties}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl transform translate-x-[calc(var(--move-x)*-0.5)] translate-y-[calc(var(--move-y)*-0.5)]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary/10 blur-3xl transform translate-x-[calc(var(--move-x)*0.3)] translate-y-[calc(var(--move-y)*0.3)]"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl transform translate-x-[calc(var(--move-x)*0.6)] translate-y-[calc(var(--move-y)*0.6)]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                firka.hu
              </span>
              <br />
              <span>Better e-KRÉTA client</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
              Alternative e-KRÉTA client, by students for students. Designed to be faster, more intuitive, and more feature-rich than the official app.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#download" className="btn btn-primary">
                Download Now
              </Link>
              <Link href="#features" className="btn btn-outline">
                Explore Features
              </Link>
            </div>
          </div>
          
          <div className="relative animate-on-scroll fade-left">
            <div className="relative w-[280px] h-[580px] mx-auto">
              {/* iPhone 15 frame */}
              <div className="absolute inset-0 bg-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-[18px] z-10"></div>
                
                {/* Screen content */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-foreground/30">Appbol kep</div>
                  </div>
                </div>
                
                {/* Side buttons */}
                <div className="absolute left-0 top-[120px] w-[3px] h-[100px] bg-[#2a2a2a] rounded-r-full"></div>
                <div className="absolute left-0 top-[240px] w-[3px] h-[40px] bg-[#2a2a2a] rounded-r-full"></div>
                <div className="absolute right-0 top-[120px] w-[3px] h-[100px] bg-[#2a2a2a] rounded-l-full"></div>
                
                {/* Bottom speaker and mic */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-[#2a2a2a] rounded-full"></div>
                <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[40px] h-[4px] bg-[#2a2a2a] rounded-full"></div>
              </div>
              
              {/* Screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[3rem] pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-foreground/60"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  );
} 