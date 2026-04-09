import { useState } from "react";
import { SOCIAL_LINKS } from "../../constants";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", idea: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", idea: "" });
  };

  const inputClass = "w-full bg-[#161616] border border-[#222] text-[#e8e8e8] font-raj text-base px-4 py-3 outline-none focus:border-[#ff2d55] transition-colors duration-200 resize-none";
  const labelClass = "block font-mono text-[0.55rem] tracking-[0.2em] text-[#666] mb-2";

  return (
    <section id="contact" className="px-6 md:px-20 py-24 border-t border-[#222] bg-[#080808]">
      <p className="font-mono text-[0.6rem] tracking-[0.3em] text-[#ff2d55] mb-6 flex items-center gap-3 before:content-['—'] before:text-[#ff2d55]">
        CONTACT
      </p>
      <h2
        className="font-bebas leading-none tracking-[0.03em] text-[#e8e8e8]"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
      >
        Let's cook up something epic.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-16">
        {/* Left */}
        <div>
          <p className="text-[#888] leading-[1.7] mb-8 font-light">
            Got a project, an idea, or just want to chat? Send a message — I reply fast.
          </p>

          <div className="flex flex-col mb-8">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-[#222] font-mono text-[0.7rem] text-[#666] tracking-[0.08em] hover:text-[#ff2d55] transition-colors duration-200 no-underline after:content-['↗'] after:text-sm"
              >
                {s.name}
              </a>
            ))}
          </div>

          <a
            href="mailto:contato32bitsxz@gmail.com"
            className="font-mono text-[0.7rem] text-[#e8e8e8] no-underline tracking-[0.08em] border-b border-[#ff2d55] pb-0.5 hover:text-[#ff2d55] transition-colors duration-200"
          >
            contato32bitsxz@gmail.com
          </a>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className={labelClass}>NAME</label>
            <input className={inputClass} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
          </div>
          <div className="mb-5">
            <label className={labelClass}>E-MAIL</label>
            <input className={inputClass} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
          </div>
          <div className="mb-5">
            <label className={labelClass}>PROJECT IDEA</label>
            <textarea className={`${inputClass} min-h-[120px]`} name="idea" value={formData.idea} onChange={handleChange} placeholder="Tell me everything..." required />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full font-mono text-[0.65rem] tracking-[0.12em] font-bold bg-[#ff2d55] text-black border-none py-4 cursor-pointer hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
          >
            {sent ? "MESSAGE SENT ✓" : "SEND MESSAGE →"}
          </button>
        </form>
      </div>
    </section>
  );
}
