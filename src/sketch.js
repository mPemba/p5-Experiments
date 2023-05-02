import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Sketch = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let circles = [];

      p.setup = () => {
        const canvas = p.createCanvas(600, 600);
        canvas.parent(canvasRef.current);
      };

      p.draw = () => {
        p.background(220);

        circles.forEach((circle) => {
          p.noStroke();
          p.fill(circle.color);
          p.circle(circle.x, circle.y, circle.size);
        });
      };

      p.mouseClicked = () => {
        const circle = {
          x: p.mouseX,
          y: p.mouseY,
          size: 20,
          color: p.color(p.random(255), p.random(255), p.random(255)),
        };
        circles.push(circle);
      };
    };

    new p5(sketch);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Sketch;