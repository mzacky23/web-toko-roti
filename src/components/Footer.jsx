
export default function Footer() {
  return (
    <footer className="bg-warm-brown text-[#FDF6E3] dark:bg-[#120f0b] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">bakery_dining</span>
              <h2 className="text-2xl font-bold tracking-tight">Toko Roti</h2>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
                Serving the finest artisanal breads and pastries since 2023. Baked with passion, served with love.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                  {/* Social Icon Placeholder using text for simplicity */}
                  <span className="text-xs font-bold">IG</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                  <span className="text-xs font-bold">FB</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                  <span className="text-xs font-bold">WA</span>
              </a>
            </div>
          </div>
          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Menu</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Contact Us</h3>
            <ul className="flex flex-col gap-3 text-sm opacity-80">
                <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">location_on</span>
                    <span>Jl. Bakery No. 123, Jakarta Selatan, Indonesia</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">call</span>
                    <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">mail</span>
                    <span>hello@tokoroti.com</span>
                </li>
            </ul>
          </div>
          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Opening Hours</h3>
            <ul className="flex flex-col gap-3 text-sm opacity-80">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>07:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span>08:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-60">
            <p>© 2024 Toko Roti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
