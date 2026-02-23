import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Helper to get animation duration based on device
export function getAnimationDuration(baseDuration: number, isMobile: boolean): number {
  return isMobile ? baseDuration * 0.5 : baseDuration;
}