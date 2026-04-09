import { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { WORK_TABS } from "../../constants";

export default function Work() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="work" className="px-6 md:px-20 py-24 border-t border-[#222] bg-[#080808]">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-mono text-[0.6rem] tracking-[0.3em] text-[#ff2d55] mb-6 flex items-center gap-3 before:content-['—'] before:text-[#ff2d55]">
            WORK
          </p>
          <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] tracking-[0.03em] leading-none text-[#e8e8e8]">
            Featured projects.
          </h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#222] mb-12">
        {WORK_TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`font-mono text-[0.6rem] tracking-[0.15em] px-5 py-3 cursor-pointer bg-transparent border-t-0 border-l-0 border-r-0 -mb-px transition-all duration-200 ${
              activeTab === i
                ? "text-[#ff2d55] border-b-2 border-[#ff2d55]"
                : "text-[#666] border-b-2 border-transparent hover:text-[#e8e8e8]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <VideoCard
            key={`${activeTab}-${i}`}
            index={i + activeTab * 2}
            tall={i === 2}
          />
        ))}
      </div>
    </section>
  );
}
