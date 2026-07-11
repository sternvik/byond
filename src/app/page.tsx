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
        {/* Ett mörkt overlay*/}
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
          
          {/* Rubrik*/}
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-4xl text-[#f7f6f2]">
            Building <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#8f2dff] to-[#f7f6f2]" style={{ fontFamily: 'Crimson Pro, serif' }}>Athlete</span> Brands <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#8f2dff] to-[#f7f6f2]" style={{ fontFamily: 'Crimson Pro, serif' }}>Beyond</span> the Game
          </h1>
          
          {/* Brödtext */}
          <p className="text-xs md:text-[13px] text-[#f7f6f2] max-w-3xl mx-auto tracking-[0.18em] mb-12 leading-relaxed opacity-100 text-center" style={{ fontFamily: 'DM Mono, monospace' }}>
           <span className="font-medium">BYOND </span> is a <span className="font-medium">STRATEGIC</span> and <span className="font-medium">CREATIVE PARTNER</span> for <span className="font-semibold">ATHLETES</span> who think long-term. <br className="hidden md:inline" />
           We turn <span className="font-semibold">PERFORMANCE</span> driven attention into <span className="font-semibold">OWNERSHIP</span> and <span className="font-semibold">VALUE</span> that lasts.
          </p>
          
          {/* Knappen "Hyper Electric" */}
          <button className="border border-[#8f2dff]/40 bg-[#1d0286]/20 backdrop-blur-sm px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#8f2dff] hover:text-[#101012] transition-all duration-500 hover:scale-105 shadow-lg shadow-[#1d0286]/10">
            Start Building Together
          </button>
        </section>

      </div>

      {/* 3. OUR SERVICES SEKTIONEN */}
      {/* Minskat py-24 till py-16 för att sektionen inte ska kännas så tom och stor */}
      <section className="bg-[#f7f6f2] text-[#101012] py-16 px-6">
        {/* Minskat max-w-7xl till max-w-5xl för att dra ihop hela sektionen så korten blir mindre på desktop */}
        <div className="max-w-5xl mx-auto">
          
          {/* Rubrik & Introtext */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              <span className="italic font-light font-serif mr-2" style={{ fontFamily: 'Crimson Pro, serif' }}>Our</span>
              Services
            </h2>
            <p className="text-xs md:text-[11px] text-[#101012]/80 leading-relaxed font-mono px-4" style={{ fontFamily: 'DM Mono, monospace' }}>
              The game has changed. ATHLETES now run their OWN CHANNELS, build their OWN BRANDS, and create their OWN BUSINESSES. 
              We create the strategy, systems, and partnerships that turn attention into LASTING OWNERSHIP.
            </p>
          </div>

          {/* Korten i ett Grid-system */}
          {/* max-w-sm mx-auto md:max-w-none gör att korten inte blir bredare än 384px på mobilen och centreras */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-sm mx-auto md:max-w-none">
            
            {/* KORT 1: Brand Strategy */}
            {/* Ändrat från aspect-[3/4] till h-[420px] md:aspect-[2.3/3] för fast, smidig mobilhöjd och slimmad desktophöjd */}
            <div className="relative h-[420px] md:h-auto md:aspect-[2.3/3] rounded-[1.5rem] overflow-hidden bg-[#101012] text-[#f7f6f2] p-6 flex flex-col justify-end group cursor-pointer shadow-xl">
              <Image 
                src="/images/1.png" 
                alt="Brand Strategy" 
                fill 
                className="object-cover opacity-100 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-[#101012]/20 to-transparent z-0" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 leading-tight">
                  Brand<br />Strategy
                </h3>
                <p className="text-[11px] text-slate-300 tracking-wide leading-relaxed opacity-90 font-light">
                  We define what the athlete brand actually stands for – beyond results, seasons, and form. 
                  Positioning & narrative. Long-term brand vision. Identity & messaging. Career transition strategy. 
                  We build clarity before visibility.
                </p>
              </div>
            </div>

            {/* KORT 2: Social Media and Content */}
            <div className="relative h-[420px] md:h-auto md:aspect-[2.3/3] rounded-[1.5rem] overflow-hidden bg-[#101012] text-[#f7f6f2] p-6 flex flex-col justify-end group cursor-pointer shadow-xl">
              <Image 
                src="/images/2.png" 
                alt="Social Media and Content" 
                fill 
                className="object-cover opacity-100 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-[#101012]/20 to-transparent z-0" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 leading-tight">
                  Social Media<br />and Content
                </h3>
                <p className="text-[11px] text-slate-300 tracking-wide leading-relaxed opacity-90 font-light">
                  We design content systems – not just posts. Content strategy & formats. Platform planning. 
                  Creative direction & production guidance. Ownership-first content structures.
                </p>
              </div>
            </div>

            {/* KORT 3: Brand Partnerships */}
            <div className="relative h-[420px] md:h-auto md:aspect-[2.3/3] rounded-[1.5rem] overflow-hidden bg-[#101012] text-[#f7f6f2] p-6 flex flex-col justify-end group cursor-pointer shadow-xl">
              <Image 
                src="/images/4.png" 
                alt="Brand Partnerships" 
                fill 
                className="object-cover opacity-100 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101012] via-[#101012]/20 to-transparent z-0" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 leading-tight">
                  Brand<br />Partnerships
                </h3>
                <p className="text-[11px] text-slate-300 tracking-wide leading-relaxed opacity-90 font-light">
                  We approach partnerships as brand strategy & selection. Collaboration concepts & deal logic. 
                  Long-term commercial planning.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INFORMED DECISIONS SEKTIONEN */}
      <section className="relative bg-[#101012] bg-[url('/images/bg.jpg')] bg-cover bg-center text-[#f7f6f2] py-24 px-6 border-t border-slate-950 overflow-hidden">
        
        {/* Subtilt mörkt filter över bilden */}
        <div className="absolute inset-0 bg-[#101012]/40 z-0" />

        {/* Den trasiga div-taggen är borttagen. Nu ligger allt innehåll i rätt z-10 container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          
          {/* VÄNSTER SPALT: Den numrerade listan */}
          <div className="flex flex-col tracking-wider font-mono text-[11px] uppercase" style={{ fontFamily: 'DM Mono, monospace' }}>
            
            {/* Punkt 01 (Ändrad text-slate-400 till text-[#f7f6f2]/60 för bättre vit balans på siffran) */}
            <div className="border-b-2 border-[#8f2dff] py-5 flex items-center">
              <span className="font-semibold text-[#f7f6f2]/60 mr-6">01.</span>
              <span className="text-[#f7f6f2]">Define <span className="font-semibold">IDENTITY</span> and <span className="font-semibold">VISION</span></span>
            </div>

            {/* Punkt 02 */}
            <div className="border-b-2 border-[#8f2dff] py-5 flex items-center">
              <span className="font-semibold text-[#f7f6f2]/60 mr-6">02.</span>
              <span className="text-[#f7f6f2]">Evaluate Current <span className="font-semibold">PERCEPTION</span></span>
            </div>

            {/* Punkt 03 */}
            <div className="border-b-2 border-[#8f2dff] py-5 flex items-center">
              <span className="font-semibold text-[#f7f6f2]/60 mr-6">03.</span>
              <span className="text-[#f7f6f2]">Build a Personal <span className="font-semibold">STRATEGIC PLAN</span></span>
            </div>

            {/* Punkt 04 */}
            <div className="border-b-2 border-[#8f2dff] py-5 flex items-center">
              <span className="font-semibold text-[#f7f6f2]/60 mr-6">04.</span>
              <span className="text-[#f7f6f2]">Connect <span className="font-semibold">PARTNERSHIPS</span> that Align</span>
            </div>

          </div>

          {/* HÖGER SPALT: Rubrik, text och knapp */}
          <div className="flex flex-col items-start">
            
            {/* Rubriken (Ändrad text-slate-300 på "Brand" till text-[#f7f6f2]) */}
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8 text-left text-[#f7f6f2]">
              Informed Decisions<br />
              That Move Your <span className="italic font-light text-[#f7f6f2]" style={{ fontFamily: 'Crimson Pro, serif' }}>Brand</span><br />
              Forward
            </h2>

            {/* Brödtexten (Ändrad text-slate-300 till text-[#f7f6f2] och opacity-90 till opacity-100) */}
            <p className="text-xs md:text-[12px] text-[#f7f6f2] tracking-[0.12em] leading-relaxed mb-10 text-left font-light opacity-100" style={{ fontFamily: 'DM Mono, monospace' }}>
              Through data- and AI-driven insights, combined with human strategy and creative judgment, 
              we make informed decisions around positioning, content, and partnerships. This allows us to: 
              Identify the right opportunities – not just available ones. Match <span className="font-medium">Athletes</span> with brands that align long-term. 
              Build strategies that create lasting momentum.
            </p>

            {/* Knapp */}
            <button className="border border-[#8f2dff]/40 bg-[#1d0286]/20 backdrop-blur-sm px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#8f2dff] hover:text-[#101012] transition-all duration-500 hover:scale-105 shadow-lg shadow-[#1d0286]/10">
              Start Building Together
            </button>

          </div>

        </div>
      </section>

      {/* 5. BUILT BY PEOPLE WHO SEKTIONEN */}
      <section className="bg-[#f7f6f2] text-[#101012] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Rubrik med Crimson Pro på utvalda kursiva ord */}
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-10 max-w-3xl mx-auto">
            Built by people who <span className="italic font-light text-slate-700" style={{ fontFamily: 'Crimson Pro, serif' }}>live</span> and <span className="italic font-light text-slate-700" style={{ fontFamily: 'Crimson Pro, serif' }}>breath</span> <br />
            <span className="italic font-light text-slate-700" style={{ fontFamily: 'Crimson Pro, serif' }}>Sports Culture</span> and <span className="italic font-light text-slate-700" style={{ fontFamily: 'Crimson Pro, serif' }}>brands</span>
          </h2>
          
          {/* Brödtext - DM Mono, lowercase förutom specifika ord */}
          <p className="text-xs md:text-[12px] text-[#101012]/90 max-w-3xl mx-auto tracking-[0.15em] leading-relaxed font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>
            We have experience shaping <span className="font-semibold">STRONG BRANDS WITHIN SPORT</span>, culture, and commercial ecosystems. 
            At <span className="font-semibold">BYOND</span>, we work closely with each athlete through the entire process – acting as 
            <span className="font-semibold"> STRATEGIC, CREATIVE PARTNER</span> and <span className="font-semibold">LONG-TERM ADVISOR</span>. 
            From defining the vision to guiding execution and protecting the brand as it grows. 
            we don't operate at arm's length. We stay <span className="font-semibold">CLOSE</span>, stay <span className="font-semibold">INVOLVED</span>, 
            and stay <span className="font-semibold">ACCOUNTABLE</span>. By design, we work with a limited number of athletes at a time.
          </p>

        </div>
      </section>

      {/* 6. FOOTER & KONTAKTFORMULÄR */}
      <footer id="contact" className="bg-[#101012] text-[#f7f6f2] py-24 px-6 border-t border-slate-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* VÄNSTER SPALT: Branding & Info */}
          <div className="flex flex-col h-full justify-between space-y-12 md:space-y-0">
            <div>
              {/* Stor rubrik med Crimson Pro-kontrast */}
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8">
                <span className="italic font-light text-[#f7f6f2]" style={{ fontFamily: 'Crimson Pro, serif' }}>Build</span> something that <br />
                outlives <span className="italic font-light text-[#f7f6f2]" style={{ fontFamily: 'Crimson Pro, serif' }}>performance</span>
              </h2>
              
              {/* Brödtext */}
              <p className="text-xs md:text-[12px] text-[#f7f6f2] tracking-[0.12em] leading-relaxed mb-10 max-w-sm font-light font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>
                If you're thinking beyond the next season, the next deal, or the next post – let's talk.
              </p>
              
              {/* Socials / E-post */}
              <div className="flex items-center space-x-3 text-xs md:text-[13px] tracking-wider font-mono opacity-90" style={{ fontFamily: 'DM Mono, monospace' }}>
                <svg className="w-5 h-5 text-[#f7f6f2]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
                <a href="mailto:hello@byond.info" className="hover:text-[#8f2dff] transition-colors duration-300">hello@byond.info</a>
              </div>
            </div>

            {/* Nedre logotypen i footern (visas snyggt i botten på desktop) */}
            <div className="relative w-[120px] h-[40px] pt-12 md:pt-24">
              <Image 
                src="/images/Byond_Logo_White.png" 
                alt="BYOND Logo Footer" 
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* HÖGER SPALT: Själva formuläret */}
          <form className="w-full space-y-6 text-[11px] uppercase tracking-widest font-mono" style={{ fontFamily: 'DM Mono, monospace' }}>
            
            {/* Namnfälten brevid varandra på desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-slate-400 block text-[10px]">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#101012] border border-[#f7f6f2]/80 rounded-xl px-4 py-3 text-[#f7f6f2] focus:outline-none focus:border-[#8f2dff] transition" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-400 block text-[10px]">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#101012] border border-[#f7f6f2]/80 rounded-xl px-4 py-3 text-[#f7f6f2] focus:outline-none focus:border-[#8f2dff] transition" 
                />
              </div>
            </div>

            {/* E-postfält */}
            <div className="space-y-2">
              <label className="text-slate-400 block text-[10px]">Email</label>
              <input 
                type="email" 
                className="w-full bg-[#101012] border border-[#f7f6f2]/80 rounded-xl px-4 py-3 text-[#f7f6f2] focus:outline-none focus:border-[#8f2dff] transition" 
              />
            </div>

            {/* Meddelandefält */}
            <div className="space-y-2">
              <label className="text-slate-400 block text-[10px]">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-[#101012] border border-[#f7f6f2]/80 rounded-xl px-4 py-3 text-[#f7f6f2] focus:outline-none focus:border-[#8f2dff] transition resize-none" 
              />
            </div>

            {/* Submit-knapp */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="text-left text-[#f7f6f2] hover:text-[#8f2dff] transition-colors duration-300 text-[11px] uppercase tracking-[0.2em] font-medium block"
              >
                Submit
              </button>
            </div>

          </form>

        </div>
      </footer>


    </main>
  );
}