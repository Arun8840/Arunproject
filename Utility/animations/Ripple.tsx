import { useState } from "react";

function useGetAnimations() {
  // const { handleClickripple } = useGetAnimations();
  const [ripple, setRipple] = useState(false);

  const handleRipple = (e:any) => {
    setRipple(true);
    const button = e.currentTarget;
    const rippleElement = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    rippleElement.style.width = rippleElement.style.height = `${size}px`;
    rippleElement.style.top = `${y}px`;
    rippleElement.style.left = `${x}px`;
    rippleElement.classList.add('ripple');
    button.appendChild(rippleElement);

    rippleElement.addEventListener('animationend', () => {
      setRipple(false);
      rippleElement.remove();
    });
  };
  return { handleRipple ,ripple};
}

export default useGetAnimations;
