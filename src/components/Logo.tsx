import React from "react";

interface LogoProps {
  className?: string;
  size?: number | string;
}

export default function Logo({ className = "", size = "100%" }: LogoProps) {
  const dimension = typeof size === 'number' ? `${size}px` : size;
  
  return (
    <img
      src="https://plain-eeur-prod-public.komododecks.com/202606/26/j5ApLNGoCxxn5nqtdNKZ/image.png"
      alt="PixelForge Logo"
      style={{ width: dimension, height: dimension, objectFit: "contain" }}
      className={`rounded-full ${className}`}
      referrerPolicy="no-referrer"
    />
  );
}
