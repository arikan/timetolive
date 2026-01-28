"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  connections: number[];
}

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initNodes = () => {
      const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 25000);
      const nodes: Node[] = [];

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          pulsePhase: Math.random() * Math.PI * 2,
          connections: [],
        });
      }

      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i !== j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150 && Math.random() > 0.7) {
              node.connections.push(j);
            }
          }
        });
      });

      nodesRef.current = nodes;
    };

    const draw = (time: number) => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      nodes.forEach((node, i) => {
        const mdx = mouse.x - node.x;
        const mdy = mouse.y - node.y;
        const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mouseDist < 200) {
          const force = (200 - mouseDist) / 200 * 0.02;
          node.vx -= (mdx / mouseDist) * force;
          node.vy -= (mdy / mouseDist) * force;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        node.vx *= 0.99;
        node.vy *= 0.99;

        nodes.forEach((other, j) => {
          if (i >= j) return;

          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.4;
            const isStableConnection = node.connections.includes(j);

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);

            if (isStableConnection) {
              const pulse = Math.sin(time * 0.002 + node.pulsePhase) * 0.5 + 0.5;
              ctx.strokeStyle = `rgba(0, 255, 136, ${alpha * (0.5 + pulse * 0.5)})`;
              ctx.lineWidth = 1 + pulse;
            } else {
              ctx.strokeStyle = `rgba(0, 212, 255, ${alpha * 0.3})`;
              ctx.lineWidth = 0.5;
            }
            ctx.stroke();
          }
        });

        const pulse = Math.sin(time * 0.003 + node.pulsePhase) * 0.5 + 0.5;
        const glowRadius = node.radius * (2 + pulse);

        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius * 3
        );
        gradient.addColorStop(0, `rgba(0, 255, 136, ${0.3 + pulse * 0.2})`);
        gradient.addColorStop(0.5, `rgba(0, 255, 136, ${0.1 * pulse})`);
        gradient.addColorStop(1, "rgba(0, 255, 136, 0)");

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${0.6 + pulse * 0.4})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    initNodes();

    window.addEventListener("resize", () => {
      resize();
      initNodes();
    });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  );
}
