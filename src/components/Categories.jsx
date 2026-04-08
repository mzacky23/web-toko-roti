
export default function Categories() {
  const categories = [
    {
      name: "Roti",
      icon: "bakery_dining",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD40b-DYnK-_weSEIAAenDNw_H1drakNyOUBhMJRQ3ys-PJCeUIFZGgl1xrViMoVkpnp_-9EPWnRkTJJIPUoe_U7ZOtb075gWwcisKEquxefVQrtzffJwJMR8AQnKEPkzdh21k5sTkXTteTWli99o7UPHRqA_jI3-rVJTSR8JzqRZ2z82XD1YOozZD4gcHe4R4FJZQKEm64znDg81XCBhedm_DUlzgxGL4D29RLWTTCP02DOsH-4CLOX1dI8vGfa0HvNsEldg_zHYp",
      alt: "Fresh loaf of sliced white bread"
    },
    {
      name: "Cake",
      icon: "cake",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP0lMuQylwlj3VF0otXH6BJIp395eaqaRqFtYQ9TJQsH0WKfeF85mtNMWY98t-lHVMTwNWarPNWcF5iiJKFXGJSe3NXGzNZOfkibEP_2sc22X0rzgdcZYDQ1tZJmg6eudBVX1AzUi_BeT_Qc6t3Atx47HcL72GBRiQLcITT7Bc0LG5blVwI5JXb1DDM0BB2lUqPYt05iqcHQgoWF60o02En-eVW0v961zgIWtii4tsCHQl7d7ZWgmKUt2-aXxmYM04yg_YxqeiIx_G",
      alt: "Delicious chocolate cake slice"
    },
    {
      name: "Pastry",
      icon: "cookie",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6mlTDAEMAGw90rPqQYaT7h0WngomZnjHkkL_bcypN8P_B8N9ebqczapFcqNVtxdKgcX5ATgIdt6bIS6RwhKfBnouwEBBcvvfugK1uVPSTWE4-mrlm9qpVw_c8l7lrrZyNWTu8_d5KK4KnMV-zSPfQ61sDxPLkyT5KiQ8R8020kHbWjAalcDUosz4tyIhIwMTonO71z_zd3eXSpvZYzmm-exgAn8EaiWSscGuBtukqb5o-PLfFFYkU_ZKjlPNaCLp4bxcn7xDHn4MI",
      alt: "Assortment of danish pastries"
    },
    {
      name: "Hampers",
      icon: "card_giftcard",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATuv5SnG4PUSBtzRY8wFr1S4wtj2_TxJ3P0CzBmMVwzJcR4gYRxncBYTKMXhPqtzIAmpARV4LVHnjsqXMt-Qe8EWXAZJcMRYpqkSHgTUKhmn2qkDiiZ6UO0krK33bsVWCnKOP_00_Zbet_pjLcjx3ptdhxrI2DsdWGnM099fjnIiyIxe72mryk4I3kiU7axJ1d6HRtBRJn7z1mrIzcw4b6QqPbKAs5k0wC5bYnQTgcvWgXYqpG3zo0EqHmBhJAIASLiII-mfK2kB_o",
      alt: "Beautifully wrapped gift hamper box"
    }
  ];

  return (
    <section id="categories" className="py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-brown dark:text-white tracking-tight">Kategori Kami</h2>
            <a href="#" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
                View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  data-alt={category.alt} 
                  style={{backgroundImage: `url('${category.image}')`}}
                >
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <span className="material-symbols-outlined text-white mb-1">{category.icon}</span>
                  <h3 className="text-white text-lg font-bold">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
