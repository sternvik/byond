import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#07070c] text-white min-h-screen font-sans antialiased">
      
      {/* 1. NAVIGATIONEN */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logga*/}
        <Image src="/images/Byond_Logo_White.png" alt="BYOND Logo" width={120} height={40} className="object-contain" />
        
        {/* Meny */}
        <nav className="space-x-6 text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </nav>
      </header>

      {/* 2. HERO-SEKTIONEN */}
      <section className="max-w-4xl mx-auto text-center px-6 pt-20 pb-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          Building <span className="italic font-serif font-light text-slate-300">Athlete</span> Brands <br />
          Beyond the Game
        </h1>
        <p className="text-xs md:text-sm text-slate-400 max-w-2xl mx-auto uppercase tracking-widest font-mono mb-8 leading-relaxed">
          BYOND is a STRATEGIC and CREATIVE PARTNER for ATHLETES who think long-term. 
          We turn PERFORMANCE driven attention into OWNERSHIP and VALUE that lasts.
        </p>
        <button className="border border-purple-500/50 bg-purple-950/20 px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-purple-500 hover:text-black transition duration-300">
          Start Building Together
        </button>
      </section>

    </main>
  );
}