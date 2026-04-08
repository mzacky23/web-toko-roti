
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex grow flex-col w-full">
      {/* Hero Section */}
      <div className="w-full">
        <div 
          className="relative w-full min-h-[500px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed" 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuT31TzgekeIItyLZrz_oOvqZdCOWYCYD-USymHfFeRQQR5Nlc02TeQBhSuslaj-5gX54Fihyx-SQoY4zzc9gvSttjnOaH591Gv4mm3ZWtAv2GpI4e8V7hG0B4LzXdnekpMe1XF32O1rPgQbmMFJnSxCz9xMbX0Zk1GGHHcftqpTt-VHV1CZszIfeHPa75u-996H7AuJs2wETDX0g1ktRqPcZRJfTfmIKHi1_FzbWwHdTCPDNFmDJuMkVydNwYpxV9bh96XheRPcyj")`
          }}
        >
          <div className="flex flex-col gap-4 text-center px-4 max-w-3xl">
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg font-serif">
              Tentang Kami
            </h1>
            <h2 className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-xl mx-auto drop-shadow-md">
              Dedikasi untuk Rasa dan Kualitas sejak 2010. Menghadirkan kehangatan di setiap potong roti.
            </h2>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-cream-paper w-full py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7fXSteaS9gQw73kX44lIOBz0V9vJMZT0W3CA35rkq-lf5YkJwBqR49WUS26SUVAkBlF3_QpNv2TeuLSHJfJU9sXb4JGNcaYa9gpl969JcpBg-1JVxSIp9Lh0FA_IUQYzxW-8TXSQscF6Nu3iCL68-IvEB3NwVzpcsr5yfin4dqJkE7neKqpNPctKqxczFHfm3OcstHoaajwS5JXdr8P1oF8Fl82Aw-TZwamozlYYzFiBLUB_K1BNnnFCkPOFUZi7sT1lYzGTvfdRl")`
                }}
              ></div>
            </div>
            {/* Text Column */}
            <div className="flex flex-col gap-6 md:pl-8">
              <div className="flex flex-col gap-4">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Perjalanan Kami</span>
                <h2 className="text-[#171411] dark:text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight font-serif">
                  Cerita Kami
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              <p className="text-[#5c4a3d] dark:text-[#837867] text-lg leading-relaxed">
                Berawal dari dapur kecil dengan semangat besar, <span className="text-primary font-semibold">Toko Roti</span> hadir untuk menyajikan kehangatan di setiap gigitan. Kami percaya bahwa roti terbaik dimulai dari rasa hormat terhadap proses.
              </p>
              <p className="text-[#5c4a3d] dark:text-[#837867] text-lg leading-relaxed">
                Setiap pagi, sebelum matahari terbit, tim pembuat roti kami sudah bekerja menguleni adonan dengan tangan, memastikan fermentasi alami berjalan sempurna. Kami menolak jalan pintas. Bagi kami, waktu adalah bahan rahasia yang tidak bisa digantikan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Divider */}
      <div className="bg-white dark:bg-card-dark py-16 border-y border-[#f4f2f0] dark:border-[#3a342c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-4xl text-primary/40 mb-4">format_quote</span>
          <p className="text-[#5c4a3d] dark:text-[#b0a89e] text-2xl md:text-3xl font-serif italic leading-relaxed">
            "Roti bukan sekadar makanan, melainkan seni yang membutuhkan kesabaran, ketelitian, dan cinta yang tulus."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#877264] dark:bg-[#5c4a3d]"></div>
            <p className="text-[#877264] dark:text-[#877264] text-sm font-bold uppercase tracking-wider">Budi Santoso, Kepala Pembuat Roti</p>
            <div className="h-px w-8 bg-[#877264] dark:bg-[#5c4a3d]"></div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="w-full bg-background-light dark:bg-background-dark py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="flex flex-col gap-4 mb-12 text-center items-center">
            <h2 className="text-[#171411] dark:text-white text-3xl md:text-4xl font-bold leading-tight font-serif">
              Visi & Misi
            </h2>
            <p className="text-[#877264] dark:text-[#877264] text-lg max-w-2xl">
              Komitmen kami untuk memberikan yang terbaik bagi pelanggan dan komunitas melalui tiga pilar utama.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-card-dark p-8 rounded-xl border border-[#e5e0dc] dark:border-[#3a342c] hover:border-primary/30 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-cream-paper dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">spa</span>
              </div>
              <h3 className="text-[#171411] dark:text-white text-xl font-bold mb-3">Bahan Terbaik</h3>
              <p className="text-[#877264] leading-relaxed">
                Kami hanya menggunakan tepung gandum premium, mentega asli, dan ragi alami tanpa campuran bahan kimia berbahaya.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-card-dark p-8 rounded-xl border border-[#e5e0dc] dark:border-[#3a342c] hover:border-primary/30 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-cream-paper dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <h3 className="text-[#171411] dark:text-white text-xl font-bold mb-3">Resep Tradisional</h3>
              <p className="text-[#877264] leading-relaxed">
                Mempertahankan teknik baking klasik warisan leluhur yang mengutamakan tekstur otentik dan aroma khas.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-card-dark p-8 rounded-xl border border-[#e5e0dc] dark:border-[#3a342c] hover:border-primary/30 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-cream-paper dark:bg-white/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="text-[#171411] dark:text-white text-xl font-bold mb-3">Tanpa Pengawet</h3>
              <p className="text-[#877264] leading-relaxed">
                Menjamin kesegaran dan kesehatan di setiap produk. Roti kami dipanggang segar setiap hari untuk Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-white dark:bg-card-dark py-20 px-4">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#171411] dark:text-white tracking-tight font-serif">Ingin Mencicipi Kehangatan Kami?</h2>
          <p className="text-xl text-[#877264]">Temukan berbagai pilihan roti segar, kue, dan pastry yang siap menemani hari Anda.</p>
          <Link to="/catalog" className="bg-primary hover:bg-[#6d3610] text-white text-lg font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Lihat Menu Kami
          </Link>
        </div>
      </div>
    </div>
  );
}
