"use client";

import { REGISTER_LINK } from "@/lib/constant";
import { registerClick } from "@/lib/metaPixel";

interface CTAButtonProps {
  title?: string;
  redirectLink?: string;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  title = "Open Account Now",
  redirectLink = REGISTER_LINK,
  className = "",
  onClick,
}: CTAButtonProps) {
  const handleClick = () => {
    registerClick();

    onClick?.();

    setTimeout(() => {
      window.location.href = redirectLink;
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        bg-blue-600
        px-8
        py-4
        rounded-xl
        text-white
        font-bold
        cursor-pointer
        transition-all
        hover:bg-blue-700
        ${className}
      `}
    >
      {title}
    </button>
  );
}
