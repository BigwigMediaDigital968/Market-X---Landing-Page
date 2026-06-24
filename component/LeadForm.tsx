"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { lead } from "@/lib/metaPixel";

export default function LeadForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    lead();

    setTimeout(() => {
      router.push("/thank-you");
    }, 500);
  };

  return (
    <div
      className="
      relative
      rounded-[32px]
      border border-white/10
      bg-gradient-to-br
      from-[#132144]
      to-[#062126]
      p-8 lg:p-12
      shadow-[0_0_80px_rgba(61,107,255,0.15)]
      backdrop-blur-xl
    "
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-5">
          <input
            placeholder="Full Name"
            className="form-input h-16"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            className="form-input h-16"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />
        </div>

        <input
          placeholder="Phone Number"
          className="form-input h-16"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <textarea
          rows={5}
          placeholder="How can we help you start your trading journey?"
          className="form-input resize-none"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
        />

        <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#3D6BFF] to-[#4A74FF] text-white font-bold text-xl transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(61,107,255,0.5)] cursor-pointer">
          Open Free Account
        </button>

        <p className="text-center text-sm text-text-muted">
          By submitting, you agree to our Privacy Policy and Terms.
        </p>
      </form>
    </div>
  );
}
