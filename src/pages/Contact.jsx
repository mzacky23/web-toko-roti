
export default function Contact() {
  return (
    <div className="flex grow flex-col w-full flex justify-center py-10 lg:py-16 px-4 md:px-8">
      <div className="w-full max-w-[1200px] flex flex-col gap-10 mx-auto">
        {/* Page Heading */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-[#141514] dark:text-white text-4xl md:text-5xl font-black tracking-tight">Hubungi Kami</h2>
          <p className="text-[#757a71] dark:text-[#757a71] text-lg max-w-2xl">Kami siap mendengar masukan, pertanyaan, atau pesanan spesial Anda. Jangan ragu untuk menghubungi kami.</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white dark:bg-card-dark rounded-2xl shadow-soft border border-border-subtle dark:border-white/10 p-6 md:p-8 lg:p-10">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-[#141514] dark:text-gray-200 text-sm font-semibold">Nama Lengkap</span>
                    <input 
                      className="w-full rounded-xl border border-border-subtle bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 px-4 h-12 text-[#141514] dark:text-white focus:ring-2 focus:ring-[#9caf88]/20 focus:border-[#9caf88] transition-all placeholder:text-gray-400 outline-none" 
                      placeholder="Nama Anda" 
                      type="text"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[#141514] dark:text-gray-200 text-sm font-semibold">Email Address</span>
                    <input 
                      className="w-full rounded-xl border border-border-subtle bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 px-4 h-12 text-[#141514] dark:text-white focus:ring-2 focus:ring-[#9caf88]/20 focus:border-[#9caf88] transition-all placeholder:text-gray-400 outline-none" 
                      placeholder="email@contoh.com" 
                      type="email"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-[#141514] dark:text-gray-200 text-sm font-semibold">Subjek</span>
                  <input 
                    className="w-full rounded-xl border border-border-subtle bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 px-4 h-12 text-[#141514] dark:text-white focus:ring-2 focus:ring-[#9caf88]/20 focus:border-[#9caf88] transition-all placeholder:text-gray-400 outline-none" 
                    placeholder="Perihal pesan Anda" 
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#141514] dark:text-gray-200 text-sm font-semibold">Pesan Anda</span>
                  <textarea 
                    className="w-full rounded-xl border border-border-subtle bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700 p-4 min-h-[160px] text-[#141514] dark:text-white focus:ring-2 focus:ring-[#9caf88]/20 focus:border-[#9caf88] transition-all placeholder:text-gray-400 resize-y outline-none" 
                    placeholder="Tulis pesan atau pesanan Anda di sini..."
                  ></textarea>
                </label>
                <div className="pt-2">
                  <button 
                    className="bg-[#9caf88] hover:bg-[#8a9b76] text-white font-bold h-12 px-8 rounded-xl transition-all shadow-md hover:shadow-lg w-full md:w-auto" 
                    type="submit"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Store Info */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            {/* Info Card */}
            <div className="bg-white dark:bg-card-dark rounded-2xl shadow-soft border border-border-subtle dark:border-white/10 overflow-hidden">
              {/* Map Image Placeholder */}
              <div className="w-full h-48 bg-gray-200 relative">
                <img 
                  alt="Map of location in Jakarta" 
                  className="w-full h-full object-cover grayscale opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbjdtHWPndXxyxoEb7CxXFdcpUUw6SR5ccrsddEGg2SZCkK30SPooTAFGHyxD-XrvA4WU7qCxYDU2PS7qO7ZLb4Jx_QL8vPhwi2p8Vzj6ETuz0nyMgQN9u1Vs3GmUrCv3TawwfFdqJqwlcrcTXEoxnDdpVWw0TVVP3NziheE_VrZSGIzWKDDEu_FNRW9WTincariHhelesB9qGi_8toGMK1qUcR0y7CIYueR59inun4mKXAbhA44C_kVlydWAeRjbIb4rHxqo3HS6e"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div className="bg-white dark:bg-zinc-800 p-2 rounded-full shadow-lg">
                    <span className="material-symbols-outlined text-[#9caf88]">storefront</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-8">
                {/* Address */}
                <div>
                  <h3 className="text-lg font-bold text-[#141514] dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#9caf88]">location_on</span>
                    Informasi Toko
                  </h3>
                  <p className="text-[#757a71] leading-relaxed pl-8">
                    Jl. Roti Enak No. 88, Jakarta Selatan<br/>
                    DKI Jakarta, 12430<br/>
                    Indonesia
                  </p>
                </div>
                {/* Opening Hours */}
                <div>
                  <h3 className="text-lg font-bold text-[#141514] dark:text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#9caf88]">schedule</span>
                    Jam Operasional
                  </h3>
                  <div className="pl-8 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm border-b border-dashed border-border-subtle pb-2">
                      <span className="text-[#757a71]">Senin - Jumat</span>
                      <span className="font-semibold text-[#141514] dark:text-white">08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-dashed border-border-subtle pb-2">
                      <span className="text-[#757a71]">Sabtu - Minggu</span>
                      <span className="font-semibold text-[#141514] dark:text-white">09:00 - 22:00</span>
                    </div>
                  </div>
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 mt-2">
                  <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">chat</span>
                    Chat via WhatsApp
                  </button>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <a className="flex items-center justify-center gap-2 h-10 rounded-lg border border-border-subtle hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors text-sm font-medium text-[#757a71]" href="#tel">
                      <span className="material-symbols-outlined text-[18px]">call</span>
                      Telepon
                    </a>
                    <a className="flex items-center justify-center gap-2 h-10 rounded-lg border border-border-subtle hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors text-sm font-medium text-[#757a71]" href="#email">
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Decoration/Info */}
            <div className="bg-[#9caf88]/10 rounded-xl p-4 border border-[#9caf88]/20 flex items-start gap-4">
              <span className="material-symbols-outlined text-[#9caf88] mt-0.5">local_shipping</span>
              <div>
                <p className="font-bold text-[#8a9b76] dark:text-[#9caf88] text-sm">Layanan Pesan Antar</p>
                <p className="text-xs text-[#757a71] mt-1">Tersedia untuk area Jakarta Selatan dan sekitarnya. Gratis ongkir untuk pembelian di atas Rp 150.000.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
