import { useEffect, useRef, useState, type ReactNode } from "react";

type Phase = "idle" | "hidden" | "shown";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setPhase("hidden");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const stateClasses = {
    idle: "",
    hidden: "opacity-0 translate-y-5.5",
    shown: "opacity-100 translate-y-0 transition duration-600 ease-out",
  }[phase];

  return (
    <div
      ref={ref}
      className={`${stateClasses} ${className}`}
      style={phase === "shown" && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
