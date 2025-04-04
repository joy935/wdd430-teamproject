import Cart from "@/components/Cart";

export const metadata = {
  title: "Shopping Cart | HandcraftedHaven",
  description: "Review and manage the handcrafted items in your shopping cart.",
};

export default function CartPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Cart />
      </div>
    </section>
  );
}