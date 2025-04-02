"use client";

import dynamic from 'next/dynamic';

const DynamicCheckoutPage = dynamic(() => import('@/components/Checkout'), { ssr: false });

export default function CheckoutPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <DynamicCheckoutPage />
      </div>
    </section>
  );
}