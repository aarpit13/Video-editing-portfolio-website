import { useState, useEffect, useRef } from "react";

export default function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const num = parseInt(target.replace(/\D/g, ""));
          let start = 0;
          const step = 1800 / num;
          const timer = setInterval(() => {
            start += Math.ceil(num / 60);
            if (start >= num) { setCount(num); clearInterval(timer); }
            else setCount(start);
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}
