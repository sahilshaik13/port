"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create retro grid mesh
    const drawRetroMesh = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, "#000022")
      bgGradient.addColorStop(1, "#220033")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Grid settings
      const gridSize = 50
      const horizonY = canvas.height * 0.7
      const perspectiveStrength = 0.5
      const vanishingPointX = canvas.width / 2

      // Animation speed
      const speed = 0.5
      const animatedGridOffset = (time * speed) % gridSize

      // Draw horizontal lines with movement
      for (let y = horizonY; y <= canvas.height + gridSize; y += gridSize) {
        // Animate the y position to create movement toward viewer
        const animatedY = y - animatedGridOffset
        if (animatedY < horizonY) continue

        const lineWidth = (2 * (animatedY - horizonY)) / (canvas.height - horizonY) + 0.5
        ctx.lineWidth = lineWidth

        // Calculate alpha based on distance from horizon
        const alpha = (0.3 * (animatedY - horizonY)) / (canvas.height - horizonY) + 0.1

        // Create gradient for horizontal lines
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(0, `rgba(255, 0, 255, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(0, 255, 255, ${alpha})`)
        gradient.addColorStop(1, `rgba(255, 0, 255, ${alpha})`)

        ctx.strokeStyle = gradient

        // Draw line with perspective and wave effect
        ctx.beginPath()

        // Start drawing from left edge
        ctx.moveTo(0, animatedY)

        // Draw with wave effect
        const segments = 20
        const segmentWidth = canvas.width / segments

        for (let i = 1; i <= segments; i++) {
          const x = i * segmentWidth
          // Add wave effect to horizontal lines
          const waveAmplitude = (5 * (animatedY - horizonY)) / (canvas.height - horizonY)
          const waveOffset = Math.sin(x / 200 + time * 2) * waveAmplitude

          ctx.lineTo(x, animatedY + waveOffset)
        }

        ctx.stroke()
      }

      // Draw vertical lines with perspective and movement
      for (let x = -gridSize; x <= canvas.width + gridSize; x += gridSize) {
        // Animate the x position for horizontal movement
        const animatedX = ((x + animatedGridOffset) % (canvas.width + gridSize)) - gridSize
        if (animatedX < 0 || animatedX > canvas.width) continue

        // Calculate perspective offset with wave effect
        const perspectiveOffset = Math.sin((animatedX + time * 10) / 500) * 20
        const startY = horizonY + perspectiveOffset

        // Calculate line width based on distance from center
        const distanceFromCenter = Math.abs(animatedX - vanishingPointX) / (canvas.width / 2)
        const lineWidth = 2 * (1 - distanceFromCenter) + 0.5
        ctx.lineWidth = lineWidth

        // Calculate alpha based on distance from center
        const alpha = 0.3 * (1 - distanceFromCenter) + 0.1

        // Create gradient for vertical lines
        const gradient = ctx.createLinearGradient(0, horizonY, 0, canvas.height)
        gradient.addColorStop(0, `rgba(0, 255, 255, ${alpha})`)
        gradient.addColorStop(1, `rgba(255, 0, 255, ${alpha})`)

        ctx.strokeStyle = gradient

        // Draw line with perspective
        ctx.beginPath()
        ctx.moveTo(animatedX, startY)

        // Draw line to vanishing point with curve
        const controlPointX = animatedX + (vanishingPointX - animatedX) * 0.5
        const controlPointY = startY + (horizonY - startY) * 0.3

        ctx.quadraticCurveTo(
          controlPointX,
          controlPointY,
          animatedX + (vanishingPointX - animatedX) * perspectiveStrength,
          horizonY,
        )

        ctx.stroke()
      }

      // Add some stars in the sky
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * horizonY
        const size = Math.random() * 2 + 0.5

        // Twinkle effect
        const brightness = Math.sin((time + i) * 0.1) * 0.5 + 0.5

        ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.8})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add a sun/moon
      const sunX = canvas.width * 0.7
      const sunY = horizonY * 0.5
      const sunRadius = 50 + Math.sin(time * 0.5) * 5 // Pulsing effect

      const sunGradient = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius)
      sunGradient.addColorStop(0, "rgba(255, 100, 255, 1)")
      sunGradient.addColorStop(0.5, "rgba(255, 0, 255, 0.8)")
      sunGradient.addColorStop(1, "rgba(255, 0, 255, 0)")

      ctx.fillStyle = sunGradient
      ctx.beginPath()
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2)
      ctx.fill()

      // Update time for animation
      time += 0.02
    }

    // Animation loop
    const animate = () => {
      drawRetroMesh()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
}
