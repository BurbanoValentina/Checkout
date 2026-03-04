"use client";

import { useState } from "react";
import CartItem from "../components/CartItem";
import CardDetailsDrawer from "../components/CardDetailsDrawer";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-[#f5f6f8] relative">
      
      {/* LEFT SIDE - CART */}
      <div className="flex-1 px-20 py-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <img src="/images/logo.png" className="w-6 h-6" />
          <h1 className="text-2xl text-gray-700 font-medium">
            Your Shopping Cart
          </h1>
        </div>

        {/* Cart Items */}
        <div className="space-y-6">
          <CartItem
            image="/images/denim-shirt.png"
            title="Denim T-Shirt"
            ref="Ref. 00719456"
            color="Blue"
            quantity={2}
            price="7500.00 NGN"
          />
          <CartItem
            image="/images/denim-pants.png"
            title="Denim Pants"
            ref="Ref. 011015233"
            color="Blue"
            quantity={3}
            price="9000.00 NGN"
          />
          <CartItem
            image="/images/smartwatch.png"
            title="Sony Smartwat..."
            ref="Ref. 00482981"
            color="Black"
            quantity={1}
            price="24500.00 NGN"
          />
          <CartItem
            image="/images/shoes.png"
            title="Cognac Oxford"
            ref="Ref. 035772962"
            color="Brown"
            quantity={1}
            price="4500.00 NGN"
          />
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-between items-center">
          <div className="flex items-center gap-3 text-gray-500 cursor-pointer">
            <img src="/images/arrow-left.png" className="w-4 h-4" />
            <span>Back to Shop</span>
          </div>

          <div className="text-gray-600">
            <span className="mr-4">Subtotal:</span>
            <span className="font-semibold">45500.00 NGN</span>
          </div>
        </div>
      </div>

      {/* RIGHT DRAWER */}
      <CardDetailsDrawer open={open} setOpen={setOpen} />
    </div>
  );
}