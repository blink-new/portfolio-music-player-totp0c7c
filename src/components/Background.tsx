import { useStarsBackground } from '../hooks/use-stars-background';

export function Background() {
  const { canvasRef } = useStarsBackground(200, 0.03);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)' }}
    />
  );
}