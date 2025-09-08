import { useEffect, useRef, useState } from 'react';

interface CircularParticle {
  id: number;
  angle: number;
  radius: number;
  speed: number;
  size: number;
  opacity: number;
  centerX: number;
  centerY: number;
}

interface SplashParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
}

const LiquidCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [particles, setParticles] = useState<CircularParticle[]>([]);
  const [splashParticles, setSplashParticles] = useState<SplashParticle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const particleIdRef = useRef(0);
  const splashIdRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const createCircularParticle = (centerX: number, centerY: number) => {
      return {
        id: particleIdRef.current++,
        angle: Math.random() * Math.PI * 2,
        radius: 20 + Math.random() * 30,
        speed: 0.02 + Math.random() * 0.03,
        size: 4 + Math.random() * 6,
        opacity: 0.3 + Math.random() * 0.4,
        centerX,
        centerY
      };
    };

    const createSplashParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      
      return {
        id: splashIdRef.current++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 0.6 + Math.random() * 0.4,
        size: 6 + Math.random() * 8,
        opacity: 0.8 + Math.random() * 0.2
      };
    };

    const updateParticles = () => {
      timeRef.current += 0.016; // ~60fps
      
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            angle: particle.angle + particle.speed,
            opacity: particle.opacity * 0.995, // Gradual fade
            radius: particle.radius + 0.1 // Slight expansion
          }))
          .filter(particle => particle.opacity > 0.01)
      );

      setSplashParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vx: particle.vx * 0.95, // Friction
            vy: particle.vy * 0.95,
            life: particle.life - 0.02,
            opacity: particle.opacity * 0.98
          }))
          .filter(particle => particle.life > 0)
      );
    };

    const updateLiquid = () => {
      updateParticles();
      animationFrameRef.current = requestAnimationFrame(updateLiquid);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      mousePosition.current = { x: currentX, y: currentY };

      // Create new circular particles occasionally
      if (Math.random() < 0.1) {
        const newParticle = createCircularParticle(currentX, currentY);
        setParticles(prev => [...prev, newParticle]);
      }
    };

    const handleMouseEnter = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Check if clicked element is a button, link, or has button/link in its class/parent
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' ||
                           target.closest('button') || 
                           target.closest('a') ||
                           target.classList.contains('btn') ||
                           target.classList.contains('cursor-pointer') ||
                           target.closest('.btn') ||
                           target.closest('[role="button"]');
      
      if (!isInteractive) {
        // Create splash effect
        const splashCount = 12 + Math.floor(Math.random() * 8);
        const newSplashParticles = Array.from({ length: splashCount }, () =>
          createSplashParticle(e.clientX, e.clientY)
        );
        setSplashParticles(prev => [...prev, ...newSplashParticles]);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleClick);

    // Start animation
    updateLiquid();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleClick);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1] opacity-0 transition-opacity duration-300"
    >
      {/* Circular liquid particles */}
      {particles.map(particle => {
        const x = particle.centerX + Math.cos(particle.angle) * particle.radius;
        const y = particle.centerY + Math.sin(particle.angle) * particle.radius;
        
        return (
          <div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: x - particle.size / 2,
              top: y - particle.size / 2,
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle, rgba(41, 171, 135, ${particle.opacity}) 0%, rgba(41, 171, 135, ${particle.opacity * 0.5}) 50%, transparent 100%)`,
              filter: 'blur(1px)',
              transition: 'none'
            }}
          />
        );
      })}

      {/* Splash particles from clicks */}
      {splashParticles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(41, 171, 135, ${particle.opacity}) 0%, rgba(41, 171, 135, ${particle.opacity * 0.6}) 50%, transparent 100%)`,
            filter: 'blur(2px)',
            transform: `scale(${particle.life})`,
            transition: 'none'
          }}
        />
      ))}
      
      {/* Main circular liquid ring */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: mousePosition.current.x - 30,
          top: mousePosition.current.y - 30,
          width: 60,
          height: 60,
          background: 'radial-gradient(circle, transparent 0%, rgba(41, 171, 135, 0.1) 40%, rgba(41, 171, 135, 0.05) 70%, transparent 100%)',
          filter: 'blur(3px)',
          animation: 'circularRipple 2s ease-in-out infinite'
        }}
      />
    </div>
  );
};

export default LiquidCursor;
