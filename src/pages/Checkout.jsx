
import { useState } from 'react';

export default function Checkout() {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  return (
    <div className="flex grow flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Page Heading */}
      <div className="mb-8 lg:mb-12 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-[#171512] dark:text-white tracking-tight leading-tight">Selesaikan Pesanan Anda</h1>
        <p className="mt-2 text-[#837867] dark:text-white/60">Lengkapi data diri untuk melanjutkan pemesanan roti favorit Anda.</p>
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
        {/* Left Column: Order Form */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
          
          {/* Section: Detail Pemesan */}
          <section className="bg-white dark:bg-[#2a241b] rounded-xl border border-[#e4e1dd] dark:border-white/10 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e4e1dd] dark:border-white/10">
              <span className="material-symbols-outlined text-primary text-2xl">person</span>
              <h2 className="text-xl font-bold text-[#171512] dark:text-white">Detail Pemesan</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-[#171512] dark:text-white mb-2" htmlFor="fullname">
                  Nama Lengkap
                </label>
                <input 
                  className="w-full h-12 px-4 rounded-lg border border-[#e4e1dd] bg-[#FFFCF5] dark:bg-[#1f1a13] dark:border-white/10 text-[#171512] dark:text-white placeholder:text-[#837867] focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                  id="fullname" 
                  placeholder="Masukkan nama lengkap Anda" 
                  type="text"
                />
              </div>
              {/* Phone Field */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-[#171512] dark:text-white mb-2" htmlFor="whatsapp">
                  Nomor WhatsApp
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#837867] dark:text-white/50 pointer-events-none">
                    <span className="material-symbols-outlined text-lg align-middle">call</span>
                  </span>
                  <input 
                    className="w-full h-12 pl-11 pr-4 rounded-lg border border-[#e4e1dd] bg-[#FFFCF5] dark:bg-[#1f1a13] dark:border-white/10 text-[#171512] dark:text-white placeholder:text-[#837867] focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    id="whatsapp" 
                    placeholder="+62 8xx-xxxx-xxxx" 
                    type="tel"
                  />
                </div>
                <p className="mt-1 text-xs text-[#837867] dark:text-white/50">Kami akan mengirim konfirmasi pesanan ke nomor ini.</p>
              </div>
            </div>
          </section>

          {/* Section: Metode Pengambilan & Alamat */}
          <section className="bg-white dark:bg-[#2a241b] rounded-xl border border-[#e4e1dd] dark:border-white/10 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e4e1dd] dark:border-white/10">
              <span className="material-symbols-outlined text-primary text-2xl">local_shipping</span>
              <h2 className="text-xl font-bold text-[#171512] dark:text-white">Metode Pengambilan</h2>
            </div>
            
            <div className="space-y-6">
              {/* Radio Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="relative cursor-pointer group">
                  <input 
                    className="peer sr-only" 
                    name="delivery_method" 
                    type="radio" 
                    value="pickup" 
                    checked={deliveryMethod === 'pickup'}
                    onChange={() => setDeliveryMethod('pickup')}
                  />
                  <div className="p-4 rounded-lg border-2 border-[#e4e1dd] dark:border-white/10 bg-[#FFFCF5] dark:bg-[#1f1a13] hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all h-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="material-symbols-outlined text-[#837867] group-hover:text-primary peer-checked:text-primary text-2xl">storefront</span>
                      <div className="w-5 h-5 rounded-full border border-gray-300 dark:border-white/30 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-[#171512] dark:text-white">Ambil di Toko</h3>
                    <p className="text-sm text-[#837867] dark:text-white/60 mt-1">Gratis biaya kirim. Ambil pesanan di outlet terdekat.</p>
                  </div>
                </label>

                <label className="relative cursor-pointer group">
                  <input 
                    className="peer sr-only" 
                    name="delivery_method" 
                    type="radio" 
                    value="delivery"
                    checked={deliveryMethod === 'delivery'}
                    onChange={() => setDeliveryMethod('delivery')}
                  />
                  <div className="p-4 rounded-lg border-2 border-[#e4e1dd] dark:border-white/10 bg-[#FFFCF5] dark:bg-[#1f1a13] hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all h-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="material-symbols-outlined text-[#837867] group-hover:text-primary peer-checked:text-primary text-2xl">moped</span>
                      <div className="w-5 h-5 rounded-full border border-gray-300 dark:border-white/30 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                      </div>
                    </div>
                    <h3 className="font-bold text-[#171512] dark:text-white">Delivery</h3>
                    <p className="text-sm text-[#837867] dark:text-white/60 mt-1">Dikirim kurir toko. Ongkir menyesuaikan jarak.</p>
                  </div>
                </label>
              </div>

              {/* Address Field */}
              {deliveryMethod === 'delivery' && (
                <div>
                  <label className="block text-sm font-medium text-[#171512] dark:text-white mb-2" htmlFor="address">
                    Alamat Lengkap
                  </label>
                  <textarea 
                    className="w-full p-4 rounded-lg border border-[#e4e1dd] bg-[#FFFCF5] dark:bg-[#1f1a13] dark:border-white/10 text-[#171512] dark:text-white placeholder:text-[#837867] focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none" 
                    id="address" 
                    placeholder="Jalan, Nomor Rumah, Kecamatan, Kota..." 
                    rows="3"
                  ></textarea>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0">
          <div className="sticky top-24">
            <div className="bg-white dark:bg-[#2a241b] rounded-xl border border-[#e4e1dd] dark:border-white/10 shadow-lg overflow-hidden">
              {/* Summary Header */}
              <div className="p-6 border-b border-[#e4e1dd] dark:border-white/10 bg-primary/5">
                <h2 className="text-xl font-bold text-[#171512] dark:text-white">Ringkasan Pesanan</h2>
              </div>
              
              {/* Items List */}
              <div className="p-6 space-y-6">
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img alt="Croissant Almond" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkk_40pEQkC6p3_k5uFj4p8Q9KJJKaUfF_AlU_egvb-FrqJNnwb7BOyjNvavedUdVETDz8KkX9veRd_4KVDX-ocQ-QyPc6uFw85xsJUh1UJSqEi5EyjBti15O8ovLaPUAYOPk3nqgxosgvJOzfp0YWVZzAQqs8sguee635VZtIeCfGlTaQht4lZU9Zwp9cTxWU6Z0SHUSBDqaUJHFDAppd0K6GqhLCl1iafXd-xQNna3zlidSgdIccI1VRuuA0P3kqI6nZagiSkRmc" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-[#171512] dark:text-white leading-tight">Croissant Almond</h3>
                      <p className="text-sm text-[#837867] mt-1">Extra crunchy</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <span className="text-sm font-medium bg-[#FFFCF5] dark:bg-white/10 px-2 py-0.5 rounded text-[#171512] dark:text-white">2x</span>
                      <span className="font-semibold text-primary">Rp 70.000</span>
                    </div>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img alt="Roti Sobek Coklat" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARfk_P7QvxVUT0oD17rUyDs_Su8-pO4niMf-uEHozL-IB0kw_Cpy4CxegpVHnm-FByAT7-KJZNmyGfWuHtM1FDZejFTyZfuTE8rclKvn0yM0J9L9A9x4wQBJoDOMvKRzf0s6TM1gDzyt4MN6dSrrOlwwd_DUtEKkhD43gAxKLOkk09c8sxHKPueMSeYG9XSskT00hKvnO5jTIR_aoNKb9eT_enkjqU-QG-MapH9N_UcG-sVfRjdAnrxHXP2aeftDoIqx7mH6uKuJXY" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-[#171512] dark:text-white leading-tight">Roti Sobek Coklat</h3>
                      <p className="text-sm text-[#837867] mt-1">Filling lumer</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <span className="text-sm font-medium bg-[#FFFCF5] dark:bg-white/10 px-2 py-0.5 rounded text-[#171512] dark:text-white">1x</span>
                      <span className="font-semibold text-primary">Rp 45.000</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="px-6">
                <div className="border-t border-dashed border-[#e4e1dd] dark:border-white/20"></div>
              </div>
              
              {/* Totals */}
              <div className="p-6 space-y-3">
                <div className="flex justify-between text-[#837867] dark:text-white/70 text-sm">
                  <span>Subtotal</span>
                  <span>Rp 115.000</span>
                </div>
                <div className="flex justify-between text-[#837867] dark:text-white/70 text-sm">
                  <span>Biaya Layanan</span>
                  <span>Rp 2.000</span>
                </div>
                <div className="flex justify-between text-[#837867] dark:text-white/70 text-sm">
                  <span>Biaya Pengiriman</span>
                  <span className="text-primary text-xs font-medium bg-primary/10 px-2 py-0.5 rounded">Hitung di WA</span>
                </div>
                <div className="flex justify-between text-[#171512] dark:text-white font-bold text-lg pt-2 border-t border-[#e4e1dd] dark:border-white/10">
                  <span>Total Estimasi</span>
                  <span>Rp 117.000</span>
                </div>
              </div>
              
              {/* Action Button */}
              <div className="p-6 pt-0">
                <button className="w-full flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                  <span>Kirim Pesanan via WhatsApp</span>
                </button>
                <p className="text-center text-xs text-[#837867] mt-3">
                  Pesanan akan diteruskan ke admin toko via WhatsApp untuk konfirmasi pembayaran.
                </p>
              </div>
            </div>
            
            {/* Security Badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-[#837867] text-sm opacity-80">
              <span className="material-symbols-outlined text-base">lock</span>
              <span>Checkout Aman & Terpercaya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
