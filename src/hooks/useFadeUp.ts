import useIntersectionObserver from "./useIntersectionObserver";

export default function useFadeUp(
  ref: HTMLElement | null,
  options?: IntersectionObserverInit,
) {
  useIntersectionObserver(
    ref,
    (entries, observer) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-up");
        observer.unobserve(entry.target);
      }
    },
    options,
  );
}
