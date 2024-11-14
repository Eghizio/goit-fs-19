import { useEffect, useState } from "react";

export const useColorPicker = () => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    const pickElementColor = ({ target, clientX, clientY }) => {
      const c = target.style.backgroundColor ?? target.style.color;

      setColor(c ?? null);
    };

    document.body.addEventListener("mousemove", pickElementColor);
  }, []);

  return color;
};
