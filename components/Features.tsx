export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Professional solutions tailored to your needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Service</h3>
            <p className="text-gray-600">
              We deliver exceptional quality in everything we do.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Our experienced team ensures your success.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock support when you need it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}