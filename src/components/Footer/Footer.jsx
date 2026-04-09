export default function Footer() {
  return (
    <footer className="border-t border-[#222] px-6 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-center bg-[#080808]">
      <div className="font-bebas text-lg tracking-widest text-[#e8e8e8]">
        32<span className="text-[#ff2d55]">BITS</span> EDITOR
      </div>
      <div className="font-mono text-[0.55rem] text-[#666] tracking-[0.08em]">
        criado com ❤️ por{" "}
        <a
          href="https://www.jorgerasgado.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff2d55] no-underline"
        >
          Jorge Rasgado
        </a>{" "}
        · made with ❤️
      </div>
    </footer>
  );
}
