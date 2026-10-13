import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate particles matching screenshot style
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 65);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
      pulseDir: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.35 ? '#2dd4bf' : '#94a3b8' // teal and soft slate/white
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap edges smoothly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Pulse opacity
        p.opacity += p.pulseSpeed * p.pulseDir;
        if (p.opacity > 0.65) {
          p.opacity = 0.65;
          p.pulseDir = -1;
        } else if (p.opacity < 0.15) {
          p.opacity = 0.15;
          p.pulseDir = 1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? p.color === '#2dd4bf'
            ? `rgba(45, 212, 191, ${p.opacity})`
            : `rgba(226, 232, 240, ${p.opacity * 0.8})`
          : p.color === '#2dd4bf'
            ? `rgba(20, 184, 166, ${p.opacity * 0.6})`
            : `rgba(148, 163, 184, ${p.opacity * 0.5})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: isDark ? 0.85 : 0.45 }}
    />
  );
};

export default ParticleBackground;

