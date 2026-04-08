
export default function FeaturedProducts() {
  const products = [
    {
      name: "Croissant Butter",
      description: "Authentic French croissant made with 100% premium imported butter. Flaky, crispy, and soft inside.",
      price: "Rp 25.000",
      rating: "4.9",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgQuEUSMxbmuAVndt4xQIqo13jSJc_zZh2JWzssy2gTZrKDHoeSOZJDVigvMtmRWHcumnLUGqgi5S1ZWpOeE3nT6gJO4JNu-W6XNx-MLNOuxyaZg0Pw931m_hI0WudRET-huYGJVMDWK3DNnYnRVo1S9ZStglC4OhqJaCmBBFanQg3_dmJn6C0Y6f5A6dVR9Z0nIV9AEe9lD6msAk3vzSXQEgE2E3uTleafjYDdUiCzzTAkxL_mRbQ1BD-jMZRa-y2YfcLYeGtNmsh",
      alt: "Golden buttery croissant on a wooden plate"
    },
    {
      name: "Roti Sobek Coklat",
      description: "Soft, fluffy tear-apart bread filled with rich Belgian chocolate filling. Perfect for sharing.",
      price: "Rp 45.000",
      rating: "5.0",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoY6tsX8oZU0QkpKkhq-gr1cs04DR_bu1z7kE5cuL04XUgj2fdH6X09X5l1Acqvd3NGORUdbOHZQPhqIHqTmZ4_iQnXFcYJDXhmMB23PTWlTT7MdVrOMmHLSkA2eFx3NaFt2XTMVhFXB_5kLnh88UYaOHieAuEkhUndMlfilkzyidFQblzYUgy1C4dkCGqmDog7YywD00HpmYfRFG39Fh8iy76aqy4GcAIEk8DuzwvAnQ0y6aIwRD_4HtmMwe6LbsCbXTcmpSzEQUU",
      alt: "Soft chocolate bread buns pulled apart"
    },
    {
      name: "Strawberry Shortcake",
      description: "Light vanilla sponge cake layered with fresh cream and sweet strawberries. A classic delight.",
      price: "Rp 350.000",
      rating: "4.8",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBx0OXaov0hp6PmDLRQrLr-CCAGJ8ZYG_QTYhYJM_ZhEdDktq-7fBgPkx1j_FEZ0EkLgKWa61AySPT8l_gVslYkpcVGW2h13EcFsQe2I-GjS0_M3RikBFqgoNkHBV31oNox38XvlPgnKHVMjUBnHt1uVsgYWbsJ3W1ETdkkDQE5-4Kym8sb-R5dQ0aYqqiXdpu80YZDSx794T5yrp5KPmBh7uX_pEChDSFSjDHUIbh40Bs0aHyA6ZOAdFeEHaBX764mcFuLKbhLBFrt",
      alt: "Strawberry shortcake with fresh cream"
    }
  ];

  return (
    <section className="py-12 bg-white/50 dark:bg-black/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <span className="text-primary font-bold tracking-wider text-xs uppercase mb-2 block">Best Sellers</span>
            <h2 className="text-3xl font-bold text-warm-brown dark:text-white">Produk Unggulan</h2>
            <p className="text-warm-brown/70 dark:text-gray-400 mt-2 max-w-lg mx-auto">
                Customer favorites that are baked fresh daily and disappear quickly. Order yours before they're gone!
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-white dark:bg-[#2a2520] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e6dec8] dark:border-[#3a352f]">
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  data-alt={product.alt} 
                  style={{backgroundImage: `url('${product.image}')`}}
                >
                </div>
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-warm-brown dark:text-white flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-sm">star</span> {product.rating}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-warm-brown dark:text-white mb-2">{product.name}</h3>
                <p className="text-warm-brown/60 dark:text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">{product.price}</span>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-[#171512] transition-colors">
                <span>View All Products</span>
                <span className="material-symbols-outlined">arrow_forward</span>
            </button>
        </div>
      </div>
    </section>
  );
}
