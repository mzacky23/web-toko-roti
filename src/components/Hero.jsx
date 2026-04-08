
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[500px] flex items-center justify-center">
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            data-alt="Golden crispy croissant close up with warm lighting" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEfuV7GpE81LY7XEkEoakpzqc27qY1KaaTcnvh0pbz8uHpn-3U5pXRgCbNp0jZtRjiXvQbRcqQjQWn2FVFtyTceXtSykYWZw-vF_9xn3PSzlHvJQuTbCD42AEdc-qSncWBCw-DsDtbfyc_BZVwTHagWymleCcC7_2E78daAU262z_pKtLDH_nRgntz603knupA-X3Tej6mh2LA6zV5_dL3vXaOT0zxiW9RkKAgTGTUMYuBuhVMH0PSovWObxpPvmNrwMkYZkO0ldon')"}}
          >
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          {/* Content */}
          <div className="relative z-10 w-full px-6 md:px-12 text-left">
            <div className="max-w-2xl flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 w-fit">
                <span className="material-symbols-outlined text-primary text-sm">workspace_premium</span>
                <span className="text-primary-50 text-xs font-bold uppercase tracking-wider text-white">Premium Quality</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                Freshly Baked <br/>
                <span className="text-primary">Every Morning</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 font-medium max-w-lg leading-relaxed">
                Experience the warmth of artisanal breads and delicate pastries, handcrafted with love and delivered straight to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button className="flex items-center justify-center h-12 px-8 rounded-full bg-primary text-[#171512] font-bold text-base hover:bg-[#c28d45] transition-colors shadow-lg shadow-primary/25">
                  Lihat Katalog
                </button>
                <button className="flex items-center justify-center h-12 px-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-base hover:bg-white/20 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
