import { VIDEO_COLORS } from "../../constants";

export default function VideoCard({ index, tall = false, url, thumbnail }) {
  const color = VIDEO_COLORS[index % VIDEO_COLORS.length];
return (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div
      className="relative flex items-center justify-center overflow-hidden rounded-[4px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02]"
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio: "16/9", // 👈 IMPORTANT (brings size back)
      }}
    >
        {/* Play button */}
        <div
          className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full"
          style={{ background: `${color}33`, border: `2px solid ${color}` }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>

        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 70%, ${color}18 0%, transparent 60%)`,
          }}
        />

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          }}
        />
      </div>
    </a>
  );
}