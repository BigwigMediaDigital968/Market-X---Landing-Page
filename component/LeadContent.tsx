"use client";

import { Globe, MessageCircle, TrendingUp } from "lucide-react";

export default function LeadContent() {
  return (
    <div>
      <h2 className="text-3xl lg:text-5xl font-black leading-tight text-white">
        Ready to scale your
        <span className="block text-gradient-green">trading performance?</span>
      </h2>

      <p className="mt-8 text-xl text-text-secondary max-w-xl leading-relaxed">
        Open your FREE Demat & Trading Account with MasterX and get access to
        low brokerage, advanced trading tools, and expert support.
      </p>

      <div className="mt-14 space-y-8">
        <InfoCard
          icon={<MessageCircle />}
          title="WhatsApp Support"
          value="+91 99988 88999"
        />

        <InfoCard
          icon={<TrendingUp />}
          title="500X Margin Trading"
          value="Low Brokerage & Fast Payouts"
        />

        <InfoCard
          icon={<Globe />}
          title="Trusted by Traders"
          value="20,000+ Happy Investors"
        />
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-5 items-center">
      <div className="w-16 h-16 rounded-2xl glass-blue flex items-center justify-center text-accent-blue">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="text-text-secondary">{value}</p>
      </div>
    </div>
  );
}
