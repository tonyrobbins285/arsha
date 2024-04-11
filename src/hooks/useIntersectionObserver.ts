import { useEffect } from "react";

export default function useIntersectionObserver(
  element: HTMLElement | null,
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {
    root: null,
    threshold: 0.1,
  },
) {
  useEffect(() => {
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [callback, element, options]);
}
