"use client";
import { useState, useEffect } from "react";

export default function ClientLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This gives the menu and GSAP 1 second to "settle" in the background
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#fee5e9] z-[9999]">
        <div className="flex space-x-3">
          <div className="w-5 h-5 bg-[#F8A2BF] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-5 h-5 bg-[#d7fb91] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-5 h-5 bg-[#F8A2BF] rounded-full animate-bounce"></div>
        </div>
        <p className="mt-4 text-[#F8A2BF] font-bold tracking-widest animate-pulse">
          PREPARING...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}