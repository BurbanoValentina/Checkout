import CartItem from "./components/CartItem";
import CardDetails from "./components/CardDetails";

const cartItems = [
  {
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80",
    name: "Denim T-Shirt",
    color: "Blue",
    refCode: "Ref: 001197406",
    quantity: 2,
    price: "7500.00 NGN",
  },
  {
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&q=80",
    name: "Denim Pants",
    color: "Blue",
    refCode: "Ref: 011695233",
    quantity: 3,
    price: "9000.00 NGN",
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80",
    name: "Sony Smartwatch",
    color: "Black",
    refCode: "Ref: 004602991",
    quantity: 1,
    price: "24500.00 NGN",
  },
  {
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=200&q=80",
    name: "Cognac Oxford",
    color: "Brown",
    refCode: "Ref: 025772962",
    quantity: 1,
    price: "4500.00 NGN",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8e8e6] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_360px]">

        {/* IZQUIERDA — Carrito */}
        <div className="bg-[#f2f2f0] p-8 md:p-10">

          {/* Header */}
          <div className="flex flex-row items-center gap-3 mb-8">
            {/* Logo O */}
            <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <span className="text-sm font-bold text-gray-900 leading-none">O</span>
            </div>
            <div className="w-px h-5 bg-gray-300" />
            <h1 className="text-sm font-semibold text-gray-900 tracking-tight">
              Your Shopping Cart
            </h1>
          </div>

          {/* Items */}
          <div>
            {cartItems.map((item, i) => (
              <CartItem key={i} {...item} />
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-row items-center justify-between mt-6 pt-2">
            <button className="flex flex-row items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
              ← Back to Shop
            </button>
            <div className="flex flex-row items-center gap-2">
              <span className="text-sm text-gray-500">Subtotal:</span>
              <span className="text-sm font-bold text-gray-900">45500.00 NGN</span>
            </div>
          </div>
        </div>

        {/* DERECHA — Pago */}
        <div className="bg-[#1c1c1c] p-8 flex flex-col relative">
          {/* Puntos decorativos */}
          <div className="flex flex-col gap-1.5 absolute top-8 left-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f5c518]" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
          </div>

          {/* Notch */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-1 bg-gray-700 rounded-full" />
          </div>

          <CardDetails />
        </div>

      </div>
    </main>
  );
}