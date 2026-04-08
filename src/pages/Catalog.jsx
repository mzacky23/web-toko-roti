
import { useState } from 'react';

export default function Catalog() {
  const categories = ["Semua", "Roti", "Pastry", "Cake", "Hampers"];
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [cartCount, setCartCount] = useState(2);

  const products = [
    {
      id: 1,
      name: "Roti Sourdough",
      category: "Roti",
      price: "Rp 45.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzMh1g18C2hJs8TbyRcxZxNjSRQh21RO_xtpZoCAratpiL17NonImORAETTCMHO5qax9yD2yxKWW3AsZj6iPDC8oCnryFvvvUXQG8RQr0genU3H58lJjpOl-Ku5Fj-V3ok0a4JHA9rEsQ9_xNL-GL54KGu5e4A3_RekiGWAKBDUxdAcbNUDJgBKmt656LBcE3YMPPDiOZl0tzMPlJfPuuAPz7wCM8hjf2PbBa_ajTGbX1m1L3MsO5FKRWu-yK95cl7u3f9Og8whpPc",
      limited: true,
      quantity: 1
    },
    {
      id: 2,
      name: "Croissant Butter",
      category: "Pastry",
      price: "Rp 22.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0CIkVsOTH1VvphTrNezo0KKcPg1CDxfAOzfxtTgLrbUEmxmthU6YmvWEBD-9C-HsGwRMuZIhlzi96WwfFezuB9AY5UKkINndziEbINO5Zg4fBeoLPcBzZyrckX8KxDBm4BkXs7PwfJZO2TEBks9SPxDmI2We76t6nAutifCH_-5ug1gUy5jvQta148B2vMDqHMiSPUncxoqNzKwse7jpuV1gga-33GXimW57HOLIgAZG4B2ZuObKjAU_kZ8MtrtpqaFuf9sdMr3fE",
      quantity: 0
    },
    {
      id: 3,
      name: "Strawberry Cake",
      category: "Cake",
      price: "Rp 350.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqss7blmDbJIa-JstaOEYR7wySWBVJ1Riaz-Ky66aVZ9_yGisyTBjUjAI9QEjtTfP1KL1ueGkWSQIHPnTcoeb4YjeFvoD98vXN1jgEpGBlKaYZzWBs7DV5orPQ0voQQfqWmbADIRfWSu91kHGx-20RhrDQCpvFOfJSw_Sx07ybiDM5UdIsfo2elN9HhStiNQO7uE56btZaSOn6cxlnT7fymdV6V60k6dG-SmN3yc_-aFbhcD1iPX4Wp5zfLToB-ne3oBWyukGvc8_p",
      soldOut: true,
      quantity: 0
    },
    {
      id: 4,
      name: "Hampers Lebaran",
      category: "Hampers",
      price: "Rp 500.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNMZdoDY58JZuNYvGodWa4M42YGXi2jSTqzI3nQKDNcjFUdsr5C3JKgwaU5gjrS_UbH8raZJdAHPb7gzXumqmxRP5btng6rQv1pZZOgSNxrmrkgOJ4Na3XlQGGxRBnHndjw14nZZCf1R6HBzQ7S6UX3_AYorICPbglLU1Fbt-Wzp5E-rcYvogk-DEyzOl-71bDLiUKxSjS28dmK5Xob8J7G278vAoykqZ-mmjp1MWNuhzaGd1ZzXitgxMNgOV3VKE2vUo5ecV2073W",
      quantity: 1
    },
    {
      id: 5,
      name: "Chocolate Danish",
      category: "Pastry",
      price: "Rp 28.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApPuq0VWoK4SLwBGGwbf8Kp_ipehjKwhi37Y7nkPPBtr6x7yN1Q-xy6QDrZ9U1srFkUmRYsc299dKs9laeyCtFG-YDI0-B2kJnndMpCKR-QY5aMfjpchjxc5OE1cZjc7eT5zctF9JuOXdxKzrhqW25Xn0S12_i0vpZXMXmywZELPZAJJVtr0JWVBdSwCtZv2R979T8iyDh0odSNEhA0neWSsHpJzY6wz5421sQJD5RsdTZb4wr-_JRX2QrjD3UklNvcFhql6enX4DF",
      quantity: 0
    },
    {
      id: 6,
      name: "French Baguette",
      category: "Roti",
      price: "Rp 18.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq9sRhsIOVb6weqnH3bGC_LDbuvocdv9_oJadrMORWWE11BDW5Gm72vE0E5P64M6gwRBOuKGETio4Ums0H5SSY_PGhezYi8jkM3Vjhl7tEymJqx7mgdXFqUoD-vJ7m1bLimCsL6Np73yVI90WS6reG8QC75V5flxO3XK6Y-KB3HuIrRhzf7Va6ylpc6d9rz6Dp0fFwrVjszEzEbIxVAtsxBaM4-VlCRG7xBjLWQrQZ5jUSxF_wDkWfwrd2GN4fzpaoRoKhFLx9UgGy",
      quantity: 3
    },
    {
      id: 7,
      name: "NY Cheesecake",
      category: "Cake",
      price: "Rp 320.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5J4fuqJYsIuQxO-R8JdEPicMtUJY3aXIZVfiqQEzO4vNDF6fGHr6ozk-NSnruIJBsXNPpOoLN4VjT5mq93pJ2iOoS3yUZJSe2jmFu1FBroAwF9t_ENwzUbfvwxqxYp7KwqMss6h2ApnQiJoxYH0D0ugOIhSsHFjsU9QoTPzPLB_gtONJID_EHFcfgjKwcc6kmY_kGRxLC3Bm5rpBVLT4UPlQHKapf_gG6QzudrZFW7wwNEiRftJ5sSNxEuZVfCLCOHCRttxdOAeH3",
      limited: true,
      quantity: 0
    },
    {
      id: 8,
      name: "Cinnamon Roll",
      category: "Pastry",
      price: "Rp 25.000",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQqNOavjGQEurwlXnkYP1MpEFFU2lUWuat2RK5wMFbjhaWz_ojls4e0yugbzCALICC7PKxZJkjJrnRfkDeNFAPY8zu6aNtRsUkcF6TeZSix2HfCACTR_vGB9sF39KA8X18dKtSAWEix4P8Kd-DB9zZ1vL5Of9rjuzMf_xdNqyNcfVIZ8uk05aFYN8MBwpa7-XJb2m3lnSAC28WDYi31ummrnPdHmtyfosg4vgK1JxnsQ1LVysO5HxnvjBXzpX3uKn-nmuF8vGk6Bif",
      quantity: 0
    }
  ];

  const filteredProducts = activeCategory === "Semua" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="flex grow flex-col">
        <div className="flex flex-1 justify-center py-5 md:px-10 lg:px-40">
          <div className="layout-content-container flex max-w-[1200px] flex-1 flex-col">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex w-full flex-col gap-2 text-center md:text-left">
                <h1 className="text-[#171512] dark:text-white tracking-tight text-[32px] font-bold leading-tight md:text-[40px]">Temukan Favoritmu</h1>
                <p className="text-[#837867] dark:text-gray-400 text-base font-normal">Roti segar, pastry renyah, dan kue lezat dibuat setiap hari dengan cinta.</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="sticky top-[70px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-3 pb-0 md:static md:bg-transparent md:backdrop-filter-none">
              <label className="flex flex-col h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-shadow focus-within:ring-2 focus-within:ring-primary/50">
                  <div className="text-[#837867] dark:text-gray-400 flex border-none bg-white dark:bg-card-dark items-center justify-center pl-4 rounded-l-xl">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#171512] dark:text-white bg-white dark:bg-card-dark focus:outline-0 border-none placeholder:text-[#837867] dark:placeholder:text-gray-500 px-4 pl-2 text-base font-normal leading-normal" placeholder="Cari roti, cake, pastry..." />
                </div>
              </label>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-3 px-4 py-6 overflow-x-auto no-scrollbar mask-gradient-right">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all
                    ${activeCategory === cat 
                      ? 'bg-primary shadow-sm hover:bg-primary-hover' 
                      : 'bg-white dark:bg-card-dark border border-[#e5e0d8] dark:border-[#3a342c] hover:border-primary hover:text-primary dark:hover:text-primary'
                    }`}
                >
                  <p className={`text-sm font-bold leading-normal ${activeCategory === cat ? 'text-[#171512]' : 'text-[#635c52] dark:text-gray-300 group-hover:text-primary'}`}>
                    {cat}
                  </p>
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-card-dark shadow-sm hover:shadow-md transition-shadow border border-[#f0eee9] dark:border-[#3a342c] ${product.soldOut ? 'opacity-80' : ''}`}>
                  <div className="relative w-full aspect-square overflow-hidden">
                    {product.limited && (
                      <div className="absolute top-3 left-3 z-10 rounded bg-sage px-2 py-1 text-[10px] font-bold text-white shadow-sm tracking-wider">
                        LIMITED
                      </div>
                    )}
                    {product.soldOut && (
                      <div className="absolute top-3 left-3 z-10 rounded bg-coral px-2 py-1 text-[10px] font-bold text-white shadow-sm tracking-wider">
                        HABIS
                      </div>
                    )}
                    <div 
                      className={`w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110 ${product.soldOut ? 'grayscale group-hover:scale-100' : ''}`}
                      data-alt={product.name}
                      style={{backgroundImage: `url('${product.image}')`}}
                    ></div>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[#837867] dark:text-gray-400 text-xs font-medium uppercase tracking-wide">{product.category}</p>
                    <h3 className="text-[#171512] dark:text-white mt-1 text-lg font-bold leading-tight line-clamp-1">{product.name}</h3>
                    <div className="mt-4 flex items-end justify-between">
                      <p className={`${product.soldOut ? 'text-[#837867] line-through decoration-coral decoration-2' : 'text-primary'} text-lg font-bold`}>{product.price}</p>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-dashed border-[#e5e0d8] dark:border-[#3a342c]">
                      {product.soldOut ? (
                        <button className="w-full h-9 rounded-lg bg-gray-100 dark:bg-white/5 text-[#837867] text-xs font-bold cursor-not-allowed" disabled>
                          Stok Habis
                        </button>
                      ) : (
                        <>
                          <div className="flex items-center rounded-lg border border-[#e5e0d8] dark:border-[#3a342c]">
                            <button className="flex h-8 w-8 items-center justify-center text-[#837867] hover:bg-[#f4f3f1] dark:hover:bg-white/5 dark:text-gray-300">-</button>
                            <span className="flex h-8 w-8 items-center justify-center text-sm font-semibold dark:text-white">{product.quantity}</span>
                            <button className="flex h-8 w-8 items-center justify-center text-[#837867] hover:bg-[#f4f3f1] dark:hover:bg-white/5 dark:text-gray-300">+</button>
                          </div>
                          <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-[#171512] hover:bg-primary-hover shadow-sm transition-colors">
                            <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Checkout FAB */}
            <div className="fixed bottom-6 right-6 z-50 md:hidden">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-[#171512] shadow-lg shadow-orange-900/20">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
