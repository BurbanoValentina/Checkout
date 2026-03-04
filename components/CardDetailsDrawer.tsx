interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export default function CardDetailsDrawer({ open }: Props) {
  return (
    <div
      className={`fixed right-0 top-0 h-full w-[420px] transition-transform duration-300 
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="h-full bg-gradient-to-b from-[#2f2a27] to-[#3b332f] text-white flex flex-col">

        {/* Tabs Indicator */}
        <div className="absolute left-[-18px] top-32 bg-[#3b332f] px-2 py-6 rounded-l-xl">
          <div className="flex flex-col gap-3 items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
          </div>
        </div>

        <div className="px-10 py-14 flex-1">
          <h2 className="text-yellow-400 text-2xl mb-10">
            Card Details
          </h2>

          {/* Card Type */}
          <div className="mb-10">
            <p className="text-sm text-gray-300 mb-4">Select Card Type</p>
            <div className="flex items-center gap-6 opacity-80">
              <img src="/images/mastercard.png" className="h-6" />
              <img src="/images/visa.png" className="h-6" />
              <img src="/images/verve.png" className="h-6" />
            </div>
          </div>

          {/* Card Number */}
          <div className="mb-10">
            <p className="text-sm text-gray-300 mb-2">Card Number</p>
            <input
              className="w-full bg-transparent border-b border-gray-500 outline-none py-2"
            />
          </div>

          {/* Expiry + CVV */}
          <div className="flex gap-10">
            <div className="flex-1">
              <p className="text-sm text-gray-300 mb-2">Expiry Date</p>
              <input
                placeholder="__/__/__"
                className="w-full bg-transparent border-b border-gray-500 outline-none py-2"
              />
            </div>

            <div className="w-24">
              <p className="text-sm text-gray-300 mb-2">CVV</p>
              <input
                className="w-full bg-transparent border-b border-gray-500 outline-none py-2"
              />
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="bg-yellow-400 text-center py-6 text-gray-900 font-semibold text-lg cursor-pointer">
          Checkout
        </div>
      </div>
    </div>
  );
}