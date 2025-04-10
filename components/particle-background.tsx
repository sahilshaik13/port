"use client";

import { useEffect, useRef } from "react";

export default function RetroGridEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawRetroGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Perfect match to the reference image - horizon at 40% of screen height
      const horizonY = canvas.height * 0.4;
      
      // Background gradient - deep purple to vibrant pink exactly like the reference
      const bgGradient = ctx.createLinearGradient(0, 0, 0, horizonY);
      bgGradient.addColorStop(0, "#170038"); // Dark purple at top
      bgGradient.addColorStop(0.7, "#4b0082"); // Indigo purple middle
      bgGradient.addColorStop(1, "#ff1493"); // Deep pink at horizon line
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, horizonY);
      
      // Grid floor - dark purple
      ctx.fillStyle = "#170038"; 
      ctx.fillRect(0, horizonY, canvas.width, canvas.height - horizonY);
      
      // Draw the grid lines
      const speed = 0.5;
      time += 0.015; // Slow steady movement
      
      // Grid spacing parameters
      const gridCellSize = 60; // Size of grid cells in the foreground
      
      // Draw horizontal grid lines
      const numHorizontalLines = 15;
      for (let i = 0; i <= numHorizontalLines; i++) {
        // Calculate position with movement that loops
        const basePos = (time * speed) % 1;
        const rowPos = (i + basePos) / numHorizontalLines;
        
        if (rowPos >= 1) continue;
        
        // Position with perspective (matching the image)
        // Use exponential function for accurate perspective effect
        const perspectiveScale = Math.pow(rowPos, 1.8); // Adjusted exponent for better match
        const y = horizonY + perspectiveScale * (canvas.height - horizonY);
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        
        // Purple grid lines exactly like in the reference
        ctx.strokeStyle = "#9370DB"; // Medium purple
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Calculate extra width to ensure lines come from the corners
      // This is the key change - we create an expanded width for our vertical line calculations
      // that ensures lines originate from the corners
      
      // First, find the bottom corners
      const bottomLeft = { x: 0, y: canvas.height };
      const bottomRight = { x: canvas.width, y: canvas.height };
      
      // Find how wide our grid needs to be at the horizon to connect to the corners
      // Use similar triangles concept to calculate this
      const virtualWidth = canvas.width * 2; // Make grid wider than screen
      const horizonPadding = (virtualWidth - canvas.width) / 2;
      
      // Calculate how many lines we need
      const numVerticalLines = Math.ceil(virtualWidth / gridCellSize) + 4;
      const lineSpacing = virtualWidth / numVerticalLines;
      
      // Calculate animation offset
      const moveOffset = (time * speed * lineSpacing) % lineSpacing;
      
      // Top compression for perspective effect
      const topCompressionFactor = 0.6; // How much narrower at horizon
      
      // Draw vertical lines from beyond the corners
      for (let i = 0; i <= numVerticalLines; i++) {
        // Calculate virtual bottom x position (on our wider virtual grid)
        const virtualBottomX = (i * lineSpacing) - moveOffset;
        
        // Map to actual bottom X (accounting for the virtual grid width)
        const bottomX = virtualBottomX - horizonPadding;
        
        // Calculate corresponding top position with compression
        const virtualHorizonWidth = virtualWidth * topCompressionFactor;
        const virtualHorizonPadding = (virtualWidth - virtualHorizonWidth) / 2;
        const topX = (virtualBottomX - virtualHorizonPadding) * topCompressionFactor;
        
        // Draw the line
        ctx.beginPath();
        ctx.moveTo(topX, horizonY);
        ctx.lineTo(bottomX, canvas.height);
        
        ctx.strokeStyle = "#9370DB"; // Medium purple
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Extra lines to ensure corners are covered
      // Left side extra lines
      for (let i = 1; i <= 5; i++) {
        const bottomX = -gridCellSize * i;
        const topX = bottomX * topCompressionFactor;
        
        ctx.beginPath();
        ctx.moveTo(topX, horizonY);
        ctx.lineTo(bottomX, canvas.height);
        ctx.strokeStyle = "#9370DB";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Right side extra lines
      for (let i = 1; i <= 5; i++) {
        const bottomX = canvas.width + gridCellSize * i;
        const topX = canvas.width + (bottomX - canvas.width) * topCompressionFactor;
        
        ctx.beginPath();
        ctx.moveTo(topX, horizonY);
        ctx.lineTo(bottomX, canvas.height);
        ctx.strokeStyle = "#9370DB";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const animate = () => {
      drawRetroGrid();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
}