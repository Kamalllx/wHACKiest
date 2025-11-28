import { useEffect, useState } from "react";

interface useGravityProps {
  x: number;
  y: number;
  ground?: number;
}

export function useGravity({ x, y, ground }: useGravityProps): {
  x: number;
  y: number;
  ground?: number;
} {
  const [, setVel] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: x, y: y });
  const gravity = { x: 0, y: 0.1 };
  const g = ground ?? 850;
  const bounce = Math.random() * (0.3 - 0.1) + 0.1;

  useEffect(() => {
    const interval = setInterval(() => {
      setVel((vel) => {
        const newVel = { ...vel, x: vel.x + gravity.x, y: vel.y + gravity.y };
        setPos((pos) => {
          const newPos = { ...pos, x: pos.x + newVel.x, y: pos.y + newVel.y };
          if (newPos.y >= g) {
            newPos.y = g - (newPos.y - g);
            newVel.y = -Math.abs(newVel.y) * bounce;
            if (newVel.y >= -gravity.y) {
              newVel.y = 0;
              newPos.y = g - gravity.y;
              clearInterval(interval); // Stop the interval when position has reached the bottom
            }
          }
          return newPos;
        });
        return newVel;
      });
    }, 1);
    return () => clearInterval(interval);
  }, []);

  return pos;
}

