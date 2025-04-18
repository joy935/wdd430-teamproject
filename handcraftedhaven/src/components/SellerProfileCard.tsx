"use client";

interface SellerProfileCardProps {
    seller: {
        id: number;
        name: string;
        shopName: string;
        profileImage: string;
        location: string;
        rating: number;
        sales: string;
        bio: string;
        story: string;
        contact: string;
    };
}

export default function SellerProfileCard({ seller }: SellerProfileCardProps) {
    return (
        <div className="bg-white shadow-md rounded-2xl p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
            src={seller.profileImage}
            alt={seller.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-electricBlue"
            />
            <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-darkPurple">{seller.shopName}</h1>
            <p className="text-gray-500">
                {seller.name} — {seller.location}
            </p>
            <p className="text-sm text-gray-600 mt-2">{seller.story}</p>
            <p className="text-sm text-gray-600 mt-2">Contact me: {seller.contact}</p>
            {/* Display rating and sales */}
            <div className="flex items-center text-xs text-gray-400 mt-1">
                {[...Array(5)].map((_, i) => (
                    <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(seller.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                ))}
                <span className="ml-1">({seller.rating}) • {seller.sales} sales</span>
            </div>
            </div>
        </div>
        </div>
    );
}
