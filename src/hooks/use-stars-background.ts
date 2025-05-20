import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export const useStarsBackground = (
  starCount: number = 150,
  mouseReactivity: number = 0.03
) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Initialize stars
  const initStars = (width: number, height: number) => {
    const stars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.05 + 0.02,
      });
    }
    
    starsRef.current = stars;
  };
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Set the canvas dimensions
        canvas.width = width;
        canvas.height = height;
        setDimensions({ width, height });
        
        // Reinitialize stars
        initStars(width, height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    // Initial setup
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount]);
  
  // Handle mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || starsRef.current.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    const { width, height } = dimensions;
    const centerX = width / 2;
    const centerY = height / 2;
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Calculate mouse offset from center
      const mouseOffsetX = (mousePosition.x - centerX) * mouseReactivity;
      const mouseOffsetY = (mousePosition.y - centerY) * mouseReactivity;
      
      // Update and draw stars
      starsRef.current.forEach((star) => {
        // Move stars away from mouse
        star.x += star.speed * mouseOffsetX;
        star.y += star.speed * mouseOffsetY;
        
        // Wrap stars around screen edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, mousePosition, mouseReactivity]);
  
  return { canvasRef };
};