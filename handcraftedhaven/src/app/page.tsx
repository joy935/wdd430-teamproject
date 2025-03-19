export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-backgroundDark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Discover Unique <span className="text-neonPink">Handcrafted</span> Treasures
            </h1>
            <p className="text-lg mb-8">
              Support artisans and find one-of-a-kind items made with passion and skill.
            </p>
            <div className="flex space-x-4">
              <button className="btn-primary">Explore Products</button>
              <button className="btn-secondary">Meet Artisans</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-poppins font-bold text-darkPurple text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Product Card Placeholders */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow p-4">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <h3 className="font-poppins font-semibold mb-2">Product Name</h3>
                <p className="text-gray-600 mb-2">$24.99</p>
                <button className="w-full py-2 border border-electricBlue text-electricBlue rounded hover:bg-electricBlue hover:text-white transition-colors">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}