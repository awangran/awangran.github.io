"use client"
import { useEffect, useRef, useState } from "react";

const LogisticBifurcation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const stepRef = useRef(0);

  const [paused, setPaused] = useState(false);

  // Model parameters
  const rMin = 2.5;
  const rMax = 4.0;
  const rSteps = 1000;

  const iterations = 800;
  const transient = 10;

  // Resize canvas to container
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    const width = container.clientWidth;
    const height = Math.floor(width * 0.6);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#d7fb91";


    stepRef.current = 0;
  };

  // Draw one vertical slice
  const drawStep = (
    ctx: CanvasRenderingContext2D,
    i: number,
    width: number,
    height: number
  ) => {
    const r = rMin + (rMax - rMin) * (i / rSteps);
    let x = 0.1;

    for (let n = 0; n < transient; n++) {
      x = r * x * (1 - x);
    }

    for (let n = 0; n < iterations; n++) {
      x = r * x * (1 - x);

      const px = (i / rSteps) * width;
      const py = height - x * height;

      ctx.fillRect(px, py, 1, 1);
    }
  };

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    const animate = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
  
      ctx.fillStyle = "#d7fb91";
  
      if (!paused && stepRef.current < rSteps) {
        drawStep(ctx, stepRef.current, width, height);
        stepRef.current++;
      }
  
      animationRef.current = requestAnimationFrame(animate);
    };
  
    animationRef.current = requestAnimationFrame(animate);
  
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [paused]);
  

  // Resize on mount + window resize
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Restart
  const restart = () => {
    console.log("aaa")
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stepRef.current = 0;
    setPaused(false);
  };

  return (
    <div ref={containerRef} className="w-full">
      <div className="flex justify-center m-5">
      <h1 className="text-left w-1/2 font-bold text-3xl text-lightp" >IM A SYSTEMS ENGINEERING STUDENT @ UNIANDES PASSIONATE
       ABOUT PROGRAMMING, WEBDEV, PHYSICS & THE ENVIRONMENT. PLAY ME <button
          onClick={restart}
          className=" cursor-pointer transition"
        >
         ▶️
        </button> </h1>

    
      </div>
      

      <canvas
        ref={canvasRef}
        className="w-full block "
      />
      
      
    </div>
  );
};

export default LogisticBifurcation;
