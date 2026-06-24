// declare global {
//   interface Window {
//     fbq: any;
//   }
// }

// export const pageView = () => {
//   window.fbq?.("track", "PageView");
// };

// export const lead = () => {
//   window.fbq?.("track", "Lead");
// };

// export const registerClick = () => {
//   window.fbq?.("trackCustom", "RegisterNowClick");
// };

// export const whatsappClick = () => {
//   window.fbq?.("trackCustom", "WhatsAppClick");
// };

// lib/metaPixel.ts

declare global {
  interface Window {
    fbq: any;
  }
}

export const pageView = () => {
  console.log("📊 Meta Event: PageView");
  window.fbq?.("track", "PageView");
};

export const lead = () => {
  console.log("📊 Meta Event: Lead");
  window.fbq?.("track", "Lead");
};

export const registerClick = () => {
  console.log("📊 Meta Event: RegisterNowClick");
  window.fbq?.("trackCustom", "RegisterNowClick");
};

export const whatsappClick = () => {
  console.log("📊 Meta Event: WhatsAppClick");
  window.fbq?.("trackCustom", "WhatsAppClick");
};
