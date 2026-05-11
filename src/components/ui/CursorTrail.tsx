"use client";

import { useEffect, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Disable on mobile devices
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsEnabled(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabled) return;

      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
      };

      setTrail(prev => [...prev.slice(-8), newPoint]);
    };

    const handleTouchStart = () => setIsEnabled(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 rounded-full bg-primary"
          style={{
            left: point.x,
            top: point.y,
            width: `${8 + index * 2}px`,
            height: `${8 + index * 2}px`,
            opacity: (index + 1) / trail.length * 0.3,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </>
  );
}
