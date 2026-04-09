const PLANS = [
  {
    id: "01",
    name: "BASIC",
    price: "$49",
    period: "per project",
    popular: false,
    features: [
      { label: "Short form edit (up to 5 min)", included: true },
      { label: "1 revision round", included: true },
      { label: "3–5 day delivery", included: true },
      { label: "Basic color grade", included: true },
      { label: "Motion graphics", included: false },
      { label: "Custom soundtrack", included: false },
    ],
    ctaLabel: "GET STARTED →",
    ctaHref: "https://www.instagram.com/32bitsxz",
  },
  {
    id: "02",
    name: "PRO",
    price: "$149",
    period: "per project",
    popular: true,
    features: [
      { label: "Long form edit (up to 20 min)", included: true },
      { label: "3 revision rounds", included: true },
      { label: "Priority 2–3 day delivery", included: true },
      { label: "Full color grade", included: true },
      { label: "Motion graphics included", included: true },
      { label: "Custom soundtrack", included: false },
    ],
    ctaLabel: "GET STARTED →",
    ctaHref: "https://www.instagram.com/32bitsxz",
  },
  {
    id: "03",
    name: "ELITE",
    price: "$299",
    period: "per project",
    popular: false,
    features: [
      { label: "Unlimited length edit", included: true },
      { label: "Unlimited revisions", included: true },
      { label: "Same day delivery", included: true },
      { label: "Cinema color grade", included: true },
      { label: "Motion graphics included", included: true },
      { label: "Custom soundtrack", included: true },
    ],
    ctaLabel: "GET STARTED →",
    ctaHref: "https://www.instagram.com/32bitsxz",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-20 py-24 border-t border-[#222] bg-[#0f0f0f]">
      {/* Header */}
      <p className="font-mono text-[0.6rem] tracking-[0.3em] text-[#ff2d55] mb-6 flex items-center gap-3 before:content-['—'] before:text-[#ff2d55]">
        SERVICES
      </p>
      <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[0.03em] mb-3 text-[#e8e8e8]">
        What I offer.
      </h2>
      <p className="font-light text-[#666] text-base mb-14 tracking-wide">
        Pick a plan that fits your project. All tiers include source files.
      </p>

      {/* Plans grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className="relative flex flex-col p-8"
            style={{
              background: "#161616",
              border: plan.popular ? "1px solid #ff2d55" : "1px solid #222",
            }}
          >
            {/* Top accent line on popular */}
            {plan.popular && (
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-[#ff2d55]" />
            )}

            {/* Popular badge */}
            {plan.popular && (
              <div className="font-mono text-[0.5rem] tracking-[0.2em] text-black bg-[#ff2d55] px-2.5 py-1 inline-block mb-4 font-bold self-start">
                MOST POPULAR
              </div>
            )}

            {/* Plan ID */}
            <div className="font-mono text-[0.55rem] tracking-[0.2em] text-[#666] mb-5">
              {plan.id} — {plan.name}
            </div>

            {/* Price */}
            <div
              className="font-bebas text-5xl leading-none mb-1"
              style={{ color: plan.popular ? "#ff2d55" : "#e8e8e8" }}
            >
              {plan.price}
            </div>
            <div className="font-mono text-[0.6rem] text-[#666] mb-7 tracking-[0.05em]">
              {plan.period}
            </div>

            {/* Divider */}
            <div
              className="w-10 h-px mb-7"
              style={{ background: plan.popular ? "#ff2d5544" : "#333" }}
            />

            {/* Features */}
            <div className="flex flex-col gap-3 mb-8 flex-1">
              {plan.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 font-mono text-[0.65rem] tracking-[0.05em]"
                  style={{ color: f.included ? (plan.popular ? "#ccc" : "#888") : "#444" }}
                >
                  <span
                    className="font-bold text-xs"
                    style={{ color: f.included ? "#ff2d55" : "#333" }}
                  >
                    {f.included ? "✓" : "✗"}
                  </span>
                  {f.label}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={plan.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button
                className="w-full font-mono text-[0.6rem] tracking-[0.12em] font-bold py-3 cursor-pointer transition-opacity duration-200 hover:opacity-85"
                style={
                  plan.popular
                    ? { background: "#ff2d55", color: "#000", border: "none" }
                    : { background: "transparent", color: "#e8e8e8", border: "1px solid #333" }
                }
              >
                {plan.ctaLabel}
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center font-mono text-[0.6rem] text-[#444] mt-10 tracking-[0.1em]">
        Need something custom?{" "}
        <a
          href="https://www.instagram.com/32bitsxz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff2d55] hover:opacity-80 transition-opacity"
        >
          Let's talk →
        </a>
      </p>
    </section>
  );
}
