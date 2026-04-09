import GlitchText from "../GlitchText/GlitchText";
import { useScrollTo } from "../../hooks/useScrollTo";

export default function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 pt-28 pb-16 gap-16 overflow-hidden bg-[#080808]"
    >
      {/* Background glow */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,45,85,0.12) 0%, transparent 70%)" }}
      />

      {/* Left */}
      <div className="relative z-10">
        <p className="animate-fade-up delay-100 font-mono text-[0.6rem] tracking-[0.3em] text-[#ff2d55] mb-4 flex items-center gap-2 before:content-[''] before:inline-block before:w-5 before:h-px before:bg-[#ff2d55]">
          VIDEO EDITOR
        </p>

        <h1 className="animate-fade-up delay-250 font-bebas leading-[0.85] tracking-tight mb-2"
          style={{ fontSize: "clamp(5rem, 12vw, 10rem)" }}
        >
          <GlitchText text="32Bits" />
          <span
            className="block text-transparent"
            style={{
              WebkitTextStroke: "1px #ff2d55",
              fontSize: "clamp(4rem, 10vw, 8.5rem)",
            }}
          >
            eDiTOR
          </span>
        </h1>

        <p className="animate-fade-up delay-400 font-raj text-xl text-[#666] mt-5 font-light tracking-[0.05em]">
          Hey! Let's create something epic.
        </p>

        <div className="animate-fade-up delay-550 flex gap-4 mt-10 flex-wrap">
          <button
            onClick={() => scrollTo("work")}
            className="font-mono text-[0.65rem] tracking-[0.12em] font-bold bg-[#ff2d55] text-black border-none px-7 py-3.5 cursor-pointer hover:opacity-85 transition-opacity duration-200"
          >
            VIEW WORK →
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="font-mono text-[0.65rem] tracking-[0.12em] bg-transparent text-[#e8e8e8] border border-[#222] px-7 py-3.5 cursor-pointer hover:border-[#ff2d55] hover:text-[#ff2d55] transition-all duration-200"
          >
            START A PROJECT
          </button>
        </div>
      </div>

      {/* Right — avatar card */}
      <div className="hidden md:flex items-center justify-center relative z-10">
        <div className="relative w-[280px]">
          {/* Corner decorators */}
          <div className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t-2 border-l-2 border-[#ff2d55]" />
          <div className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t-2 border-r-2 border-[#ff2d55]" />
          <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-b-2 border-l-2 border-[#ff2d55]" />
          <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b-2 border-r-2 border-[#ff2d55]" />

          <div className="relative border border-[#ff2d55] p-[3px] before:absolute before:-inset-1.5 before:border before:border-[#222] before:pointer-events-none">
            <div className="w-full aspect-square bg-gradient-to-br from-[#161616] to-[#1a0a0f] flex items-center justify-center font-bebas text-8xl text-[#ff2d55] opacity-40">
              32
            </div>
            <div className="absolute bottom-[-1px] left-0 right-0 bg-[#ff2d55] py-1.5 px-3 font-mono text-[0.55rem] text-black tracking-[0.15em] font-bold">
              32BITS_EDITOR · ACTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
