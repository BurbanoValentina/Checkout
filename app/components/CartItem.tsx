interface CartItemProps {
  image: string;
  name: string;
  color: string;
  refCode: string;
  quantity: number;
  price: string;
}

export default function CartItem({ image, name, color, refCode, quantity, price }: CartItemProps) {
  return (
    <div className="flex flex-row items-center gap-4 py-4 border-b border-gray-200 last:border-0">
      {/* Imagen circular */}
      <div className="w-14 h-14 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Nombre + color + ref */}
      <div className="flex-1 flex flex-col min-w-0">
        <span className="text-sm font-semibold text-gray-900 truncate">{name}</span>
        <span className="text-xs text-gray-500">{color}</span>
        <span className="text-xs text-gray-400">{refCode}</span>
      </div>

      {/* Stepper */}
      <div className="flex flex-col items-center gap-0.5">
        <button className="w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center leading-none text-gray-500 text-[10px]">▲</button>
        <span className="text-sm font-medium w-4 text-center">{quantity}</span>
        <button className="w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center leading-none text-gray-500 text-[10px]">▼</button>
      </div>

      {/* Precio */}
      <span className="text-sm font-semibold text-gray-900 w-28 text-right whitespace-nowrap">{price}</span>

      {/* X */}
      <button className="text-gray-300 hover:text-gray-600 ml-1 text-base leading-none">✕</button>
    </div>
  );
}