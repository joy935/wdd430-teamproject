"use client";

import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent hydration errors by not rendering on server
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="bg-gray-50 rounded-full p-6 mb-6">
          <ShoppingBag size={64} className="text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-darkPurple mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Looks like you haven't added any items to your cart yet. Discover unique handcrafted treasures!
        </p>
        <Link href="/products">
          <Button variant="primary" className="px-8">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-poppins text-darkPurple mb-2 relative inline-block">
        Your Shopping Cart
        <span className="absolute left-0 w-full h-1 bg-gradient-to-r from-electricBlue to-neonPink bottom-[-8px]"></span>
      </h1>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-darkPurple">
                  Cart Items ({cartItems.length})
                </h2>
                <Link href="/products" className="text-sm text-electricBlue hover:text-neonPink flex items-center gap-1 transition-colors">
                  <ArrowLeft size={16} />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Cart items */}
            <ul className="divide-y divide-gray-100">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0, overflow: "hidden" }}
                      transition={{ duration: 0.3 }}
                      className="p-6 flex flex-col sm:flex-row gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="h-20 w-20 bg-gray-50 rounded-md overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <Link href={`/products/${item.id}`} className="text-darkPurple font-medium hover:text-electricBlue transition-colors">
                              {item.name}
                            </Link>
                            <Link href={`/sellers/${item.sellerId}`} className="block text-xs text-gray-500 hover:text-electricBlue transition-colors">
                              From: Artisan #{item.sellerId}
                            </Link>
                          </div>
                          <div className="font-semibold text-darkPurple mt-2 sm:mt-0">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-gray-200 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-gray-500 hover:text-darkPurple transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-1 text-sm font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-500 hover:text-darkPurple transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-errorRed transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-6">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-darkPurple">Order Summary</h2>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Taxes</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              
              <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between">
                <span className="font-medium text-darkPurple">Total</span>
                <span className="font-bold text-darkPurple">${cartTotal.toFixed(2)}</span>
              </div>
              
              <Link href="/checkout" className="block mt-6">
                <Button variant="primary" className="w-full py-3 text-center">
                  Proceed to Checkout
                </Button>
              </Link>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                <p>Secure checkout powered by Stripe</p>
                <div className="flex justify-center mt-2 space-x-2">
                  <span className="bg-gray-100 rounded px-2 py-1">Visa</span>
                  <span className="bg-gray-100 rounded px-2 py-1">Mastercard</span>
                  <span className="bg-gray-100 rounded px-2 py-1">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}