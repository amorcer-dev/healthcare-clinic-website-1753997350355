export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-purple-600">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Our Business
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Professional solutions for your business needs
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started Today
        </button>
      </div>
    </section>
  )
}