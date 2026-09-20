import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useActiveSection(sectionIds: string[]) {
  const location = useLocation();
  const [activeId, setActiveId] = useState<string | null>(null);
  const idsKey = sectionIds.join(",");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveId(null);
      return;
    }

    const ids = idsKey.split(",");
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname, idsKey]);

  return activeId;
}
