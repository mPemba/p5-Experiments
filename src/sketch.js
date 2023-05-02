import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Sketch = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let circles = [];
      let minDiameter = 10;
      let maxDiameter = 100;

      // get screen size
      let screenWidth = window.innerWidth;
    
      p.setup = () => {
        p.createCanvas(parseInt(screenWidth), 800);
        p.colorMode(p.HSB, 360, 100, 100, 1);
      };
    
      p.draw = () => {
        p.background(190,56,21);
    
        // Draw all the circles in the array
        for (let circle of circles) {
          p.fill(circle.color);
          p.stroke(0);
          p.ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
        }
    
        // Calculate the hue value based on the mouse x-position
        let hue = p.map(p.mouseX, 0, p.width, 120, 210);
    
        // Calculate the saturation value based on the mouse y-position
        let saturation = p.map(p.mouseY, 0, p.height, 50, 100);
    
        // Calculate the diameter of the circle based on the mouse speed
        let speed = p.abs(p.mouseX - p.pmouseX) + p.abs(p.mouseY - p.pmouseY);
        let diameter = p.map(speed, 0, 20, minDiameter, maxDiameter);
    
        // Add a new circle to the array
        let color = p.color(hue, saturation, 50, 0.5);
        circles.push({ x: p.mouseX, y: p.mouseY, diameter, color });
    
        // Remove the oldest circle from the array if it gets too big
        if (circles.length > 500) {
          circles.shift();
        }
      };
    };

    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;