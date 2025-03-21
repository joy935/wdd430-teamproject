import ProductCard from "./ProductCard"

export default function FeaturedProducts() {
    return (
        <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-poppins font-bold text-darkPurple text-center mb-12">
            Featured Products
          </h2>
          
          <ProductCard />
        
        </div>
      </section>
    )
}