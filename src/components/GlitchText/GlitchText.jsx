export default function GlitchText({ text, className = "" }) {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* cyan ghost */}
      <span
        aria-hidden
        className="animate-glitch1 absolute top-0 left-[2px] w-full overflow-hidden text-cyan-400"
        style={{ clipPath: "inset(0 0 100% 0)", content: text }}
      >
        {text}
      </span>
      {/* red ghost */}
      <span
        aria-hidden
        className="animate-glitch2 absolute top-0 -left-[2px] w-full overflow-hidden text-[#ff2d55]"
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        {text}
      </span>
      {text}
    </span>
  );
}
