
export default function TrustSignals() {
  const signals = [
    {
      icon: "verified",
      title: "100% Halal Certified",
      text: "Quality ingredients you can trust."
    },
    {
      icon: "eco",
      title: "Natural Ingredients",
      text: "No preservatives, just pure goodness."
    },
    {
      icon: "local_shipping",
      title: "Fresh Delivery",
      text: "From our oven to your doorstep."
    }
  ];

  return (
    <section className="py-10 border-t border-b border-[#e6dec8] dark:border-[#3a352f]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {signals.map((signal, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">{signal.icon}</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-warm-brown dark:text-white">{signal.title}</h4>
                        <p className="text-sm text-warm-brown/60 dark:text-gray-400">{signal.text}</p>
                    </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  );
}
