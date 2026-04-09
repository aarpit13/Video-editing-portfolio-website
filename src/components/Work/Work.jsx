import { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import { WORK_TABS } from "../../constants";

export default function Work() {
  const [activeTab, setActiveTab] = useState(0);

  const WORK_DATA = {
  "MOTION GRAPHICS": [
    {
      url: "https://www.youtube.com/watch?v=ylFHA2hQPn0",
      thumbnail: "https://img.youtube.com/vi/ylFHA2hQPn0/hqdefault.jpg",
      tall: false,
    },
    {
      url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
      thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
      tall: false,
    },
    {
      url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
      tall: false,
    },
  ],

  EDITS: [
    {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      tall: false,
    },
    {
      url: "https://www.youtube.com/watch?v=L_jWHffIx5E",
      thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg",
      tall: false,
    },
    {
      url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
      thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
      tall: false,
    },
  ],

  REELS: [
    {
      url: "https://www.youtube.com/watch?v=ZZ5LpwO-An4",
      thumbnail: "https://img.youtube.com/vi/ZZ5LpwO-An4/hqdefault.jpg",
      tall: true,
    },
    {
      url: "https://www.youtube.com/watch?v=fLexgOxsZu0",
      thumbnail: "https://img.youtube.com/vi/fLexgOxsZu0/hqdefault.jpg",
      tall: true,
    },
    {
      url: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
      thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
      tall: true,
    },
  ],

  "LONG VIDEOS": [
    {
      url: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
      thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
      tall: false,
    },
    {
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      tall: false,
    },
    {
      url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
      tall: false,
    },
  ],
};

  const activeVideos = WORK_DATA[WORK_TABS[activeTab]] || [];

  return (
    <section id="work" className="px-6 md:px-20 py-24 border-t border-[#222] bg-[#080808]">
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {activeVideos.map((item, i) => (
          <VideoCard
            key={`${WORK_TABS[activeTab]}-${i}`}
            index={i}
            tall={item.tall}
            url={item.url}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </section>
  );
}