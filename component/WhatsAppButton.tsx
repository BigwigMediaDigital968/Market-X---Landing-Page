"use client";

import { WHATSAPP_LINK } from "@/lib/constant";
import { whatsappClick } from "@/lib/metaPixel";

export default function WhatsAppButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    whatsappClick();

    setTimeout(() => {
      window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
    }, 300);
  };

  return (
    <a
      href={WHATSAPP_LINK}
      onClick={handleClick}
      className="
        fixed
        bottom-5
        right-5
        z-50
        rounded-full
        bg-green-500
        px-5
        py-3
        text-white
        font-semibold
        shadow-lg
      "
    >
      WhatsApp Us
    </a>
  );
}
