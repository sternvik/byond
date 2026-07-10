import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-[#f7f6f2] bg-[#101012] antialiased select-none">
      
      {/* BACKGROUND VIDEO & GRADIENT OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-[100vh] overflow-hidden z-0">
        {/* Själva videon som loopar tyst i bakgrunden */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/images/Hero_Banner_Byond.mp4" type="video/mp4" />
        </video>
        {/* Ett mörkt overlay så att texten syns perfekt över videon */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#101012]/30 via-[#101012]/50 to-[#101012]" />
      </div>

      {/* INNER CONTENT - Allt här i måste ha z-10 för att hamna ovanpå videon */}
      <div className="relative z-10">
        
        {/* 1. NAVIGATIONEN */}
        <header className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <div className="relative w-[120px] h-[40px]">
            <Image 
              src="/images/Byond_Logo_White.png" 
              alt="BYOND Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <nav className="space-x-8 text-sm font-medium tracking-widest uppercase">
            <a href="#about" className="text-[#f7f6f2] hover:text-[#8f2dff] transition-colors duration-300">About</a>
            <a href="#contact" className="text-[#f7f6f2] hover:text-[#8f2dff] transition-colors duration-300">Contact</a>
          </nav>
        </header>

        {/* 2. HERO-SEKTIONEN */}
        <section className="max-w-5xl mx-auto text-center px-6 pt-32 pb-40 flex flex-col items-center justify-center min-h-[calc(100vh-104px)]">
          
          {/* Rubrik med exakta typsnittskombinationer från din manual */}
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-4xl text-[#f7f6f2]">
            Building <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#8f2dff] to-[#f7f6f2]" style={{ fontFamily: 'Crimson Pro, serif' }}>Athlete</span> Brands <br />
            Beyond the Game
          </h1>
          
          {/* Brödtext - Monospace-stil enligt DM Mono-specifikationen */}
          <p className="text-xs md:text-[13px] text-slate-300 max-w-3xl mx-auto uppercase tracking-[0.18em] mb-12 leading-relaxed opacity-90" style={{ fontFamily: 'DM Mono, monospace' }}>
            BYOND is a <span className="text-[#3003de] font-medium">STRATEGIC</span> and <span className="text-[#8f2dff] font-medium">CREATIVE PARTNER</span> for <span className="text-[#f7f6f2] font-semibold">ATHLETES</span> who think long-term. <br className="hidden md:inline" />
            We turn PERFORMANCE driven attention into OWNERSHIP and VALUE that lasts.
          </p>
          
          {/* Knappen uppdaterad med din "Hyper Electric" lila färg */}
          <button className="border border-[#8f2dff]/40 bg-[#1d0286]/20 backdrop-blur-sm px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#8f2dff] hover:text-[#101012] transition-all duration-500 hover:scale-105 shadow-lg shadow-[#1d0286]/10">
            Start Building Together
          </button>
        </section>

      </div>
    </main>
  );
}