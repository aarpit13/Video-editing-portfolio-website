import Counter from "../Counter/Counter";
import { STATS, TOOLS } from "../../constants";
import { useScrollTo } from "../../hooks/useScrollTo";

export default function About() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-20 px-6 md:px-20 py-24 border-t border-[#222] bg-[#080808] items-center"
    >
      {/* Left */}
      <div>
        <p className="font-mono text-[0.6rem] tracking-[0.3em] text-[#ff2d55] mb-6 flex items-center gap-3 before:content-['—'] before:text-[#ff2d55]">
          ABOUT YOUR
        </p>
        <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[0.03em] mb-7 text-[#e8e8e8]">
          Crafting visual art in motion.
        </h2>
        <p className="text-[1.05rem] leading-[1.75] text-[#aaa] font-light mb-10">
          I'm a video editor specialized in dynamic content, gaming, and anime aesthetics,
          among others. With years of experience turning ideas into impactful visual
          narratives, I work with content creators, streamers, and brands that demand the
          best out of every frame.
          <br /><br />
          Every project is a chance to combine perfect timing, full motion graphics, and
          rhythmic editing that grabs attention from start to finish.
        </p>

        {/* Stats */}
        <div className="flex gap-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-bebas text-[2.5rem] text-[#ff2d55] leading-none">
                <Counter
                  target={s.value}
                  suffix={s.value.includes("+") ? "+" : s.value.includes("%") ? "%" : ""}
                />
              </div>
              <div className="font-mono text-[0.55rem] text-[#666] tracking-[0.1em] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div>
        {/* Tools card */}
        <div className="relative bg-[#161616] border border-[#222] p-8 before:absolute before:top-0 before:left-0 before:w-[40%] before:h-px before:bg-[#ff2d55]">
          <div className="font-mono text-[0.6rem] tracking-[0.2em] text-[#666] mb-6">
            TOOLS
          </div>
          {TOOLS.map((tool, i) => (
            <div
              key={tool}
              className={`flex items-center gap-3 py-3 font-mono text-[0.75rem] text-[#e8e8e8] tracking-[0.05em] ${
                i < TOOLS.length - 1 ? "border-b border-[#222]" : ""
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d55] shrink-0" />
              {tool}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-4 p-5 border border-[#222] bg-[#161616]">
          <div className="font-mono text-[0.55rem] tracking-[0.15em] text-[#ff2d55] mb-2">
            READY TO TAKE YOUR CONTENT FURTHER
          </div>
          <button
            className="w-full font-mono text-[0.65rem] tracking-[0.12em] font-bold bg-[#ff2d55] text-black border-none py-3.5 cursor-pointer hover:opacity-85 transition-opacity duration-200"
            onClick={() => scrollTo("contact")}
          >
            START A PROJECT →
          </button>
        </div>
      </div>
    </section>
  );
}
