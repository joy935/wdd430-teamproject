import { Button } from "./ui/Button";

export default function ProductCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow p-4">
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
                <h3 className="font-poppins font-semibold mb-2">Product Name</h3>
                <p className="text-gray-600 mb-2">$24.99</p>
                <Button variant="product">View Product</Button>
            </div>
            ))}
        </div>
    )
}