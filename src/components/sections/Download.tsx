'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const platforms = [
  {
    name: 'Android',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 16V8a7 7 0 0 1 14 0v8" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <path d="M8 16v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2" />
        <rect x="2" y="16" width="6" height="4" rx="1" />
        <rect x="16" y="16" width="6" height="4" rx="1" />
      </svg>
    ),
    link: 'https://firka.app/downloads/android',
    buttonText: 'Download APK',
    gradient: 'from-green-500/20 to-blue-500/20',
    description: 'Get the Android app for the best mobile experience.',
    features: ['Native Android UI', 'Push notifications', 'Offline support'],
    image: '/platforms/android.png',
  },
  {
    name: 'iOS',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.1 1 4.1 2 6.5C8.5 18.5 10 21 12 21c2 0 3.5-2.5 5-5.5 1-2.4 2-4.4 2-6.5a7 7 0 0 0-7-7Z" />
        <path d="M12 2v19" />
        <path d="M12 13c3.3 0 5-1.7 5-3.5S15.3 6 12 6 7 7.7 7 9.5 8.7 13 12 13Z" />
      </svg>
    ),
    link: 'https://firka.app/downloads/ios',
    buttonText: 'Download IPA',
    gradient: 'from-blue-500/20 to-purple-500/20',
    description: 'Experience firka.hu on your iPhone or iPad.',
    features: ['Native iOS UI', 'iCloud sync', 'Widget support'],
    image: '/platforms/ios.png',
  },
  {
    name: 'Web App',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    link: 'https://app.firka.hu',
    buttonText: 'Open Web App',
    gradient: 'from-purple-500/20 to-pink-500/20',
    description: 'Access firka.hu from any device with a web browser.',
    features: ['Progressive Web App', 'Cross-platform', 'Instant updates'],
    image: '/platforms/web.png',
  },
];

export default function Download() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    const elements = document.querySelectorAll('.scroll-trigger');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="download" ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-40 left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 scroll-trigger opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Download Now
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get firka.hu on your device and experience a better way to use e-KRÉTA.
          </p>
        </div>
        
        <div className="space-y-32">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="scroll-trigger opacity-0"
              data-platform={platform.name.toLowerCase()}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-foreground/30">Platform Preview</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                        <p className="text-foreground/70">{platform.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {platform.icon}
                    </div>
                    <h3 className="text-3xl font-bold">{platform.name}</h3>
                    <p className="text-lg text-foreground/70">{platform.description}</p>
                    <ul className="space-y-4">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center group">
                          <svg className="w-5 h-5 text-primary mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="group-hover:text-primary transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={platform.link} 
                      className="btn btn-primary w-full group-hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{platform.buttonText}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 scroll-trigger opacity-0 translate-y-10 transition-all duration-1000">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[size:16px_16px]"></div>
            </div>
            
            <div className="text-center relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Help Installing?</h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Check out our installation guides for step-by-step instructions on how to install firka.hu on your device.
              </p>
              <Link href="/installation-guide" className="btn btn-outline group inline-flex items-center gap-2">
                <span>View Installation Guide</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 