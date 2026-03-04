"use client";
import { useState } from "react";

export default function CardDetails() {
  const [cardType, setCardType] = useState<"visa" | "verve">("visa");

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="text-[#f5c518] text-2xl font-bold mb-8">Card Details</h2>

        {/* Card Type */}
        <div className="mb-7">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Select Card Type</p>
          <div className="flex flex-row items-center gap-4">
            {/* Toggle */}
            <button
              onClick={() => setCardType(cardType === "visa" ? "verve" : "visa")}
              className={`w-12 h-7 rounded-full flex items-center px-1 transition-colors ${
                cardType === "visa" ? "bg-gray-700" : "bg-[#f5c518]"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  cardType === "visa" ? "translate-x-0" : "translate-x-5"
                }`}
              />
            </button>

            {/* Mastercard circles icon */}
            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 rounded-full bg-red-500 opacity-90" />
              <div className="w-6 h-6 rounded-full bg-yellow-400 opacity-90" />
            </div>

            <span
              className={`text-sm font-semibold transition-colors ${
                cardType === "visa" ? "text-gray-200" : "text-gray-500"
              }`}
            >
              VISA
            </span>
            <span
              className={`text-sm font-semibold transition-colors ${
                cardType === "verve" ? "text-gray-200" : "text-gray-600"
              }`}
            >
              Verve
            </span>
          </div>
        </div>

        {/* Card Number */}
        <div className="mb-7">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Card Number</p>
          <div className="border-b border-gray-700 pb-2">
            <input
              type="text"
              placeholder="_ _ _ _   _ _ _ _   _ _ _ _   _ _ _ _"
              maxLength={19}
              className="bg-transparent text-gray-400 text-sm w-full outline-none placeholder-gray-700"
            />
          </div>
        </div>

        {/* Expiry + CVV */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Expiry Date</p>
            <div className="border-b border-gray-700 pb-2">
              <input
                type="text"
                placeholder="__ / __"
                maxLength={5}
                className="bg-transparent text-gray-400 text-sm w-full outline-none placeholder-gray-700"
              />
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">CVV</p>
            <div className="border-b border-gray-700 pb-2">
              <input
                type="text"
                placeholder="___"
                maxLength={3}
                className="bg-transparent text-gray-400 text-sm w-full outline-none placeholder-gray-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="mt-10 w-full bg-[#f5c518] text-gray-900 font-bold text-sm py-4 rounded-xl hover:bg-yellow-400 transition-colors uppercase tracking-wider">
        Checkout
      </button>
    </div>
  );
}