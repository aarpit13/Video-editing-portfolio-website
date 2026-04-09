const PERKS = ["Lifetime access", "Free future updates", "+40GB of premium files", "Dedicated support"];

export default function Pack() {
  return (
    <section id="services" className="px-6 md:px-20 py-24 border-t border-[#222] bg-[#0f0f0f]">
      <p className="font-mono text-[0.6rem] tracking-[0.3em] text-[#ff2d55] mb-8 flex items-center gap-3 before:content-['—'] before:text-[#ff2d55]">
        Personal
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="font-mono text-[0.55rem] tracking-[0.2em] text-black bg-[#ff2d55] px-2.5 py-1 inline-block mb-5 font-bold">
            +40GB FILES
          </div>
          <h2 className="font-bebas text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-[0.03em] mb-5 text-[#e8e8e8]">
            Personal Projects 🗂️
          </h2>
          <p className="text-base text-[#999] leading-[1.7] font-light mb-7">
            My editing pack has finally dropped after a long wait! Over 40GB of files to
            level up your editing and transform your visual identity. Everyone who buys
            gets lifetime access and all future updates for free!
          </p>

          <div className="flex flex-col gap-2 mb-8">
            {PERKS.map((perk) => (
              <div key={perk} className="flex items-center gap-2.5 font-mono text-[0.65rem] text-[#666] tracking-[0.05em]">
                <span className="text-[#ff2d55] font-bold">✓</span>
                {perk}
              </div>
            ))}
          </div>

          <a
            href="https://hotmart.com/pt-br/marketplace/produtos/collectors-pack/W103463330T"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-mono text-[0.65rem] tracking-[0.12em] font-bold bg-[#ff2d55] text-black border-none px-7 py-3.5 cursor-pointer hover:opacity-85 transition-opacity duration-200">
              GET IT NOW →
            </button>
          </a>
        </div>

        {/* Right — visual */}
        <div
          className="relative flex items-center justify-center overflow-hidden border border-[#ff2d55]"
          style={{ aspectRatio: "4/3", background: "linear-gradient(135deg, #1a0a0f, #120a18)" }}
        >
          <div className="text-6xl z-10">🗂️</div>
          <div className="absolute bottom-5 right-5 font-bebas text-6xl text-[#ff2d55] opacity-20 leading-none text-right">
            COLLECTORS<br />PACK
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,45,85,0.03) 3px, rgba(255,45,85,0.03) 4px)" }}
          />
        </div>
      </div>
    </section>
  );
}
