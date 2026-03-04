interface Props {
  image: string;
  title: string;
  ref: string;
  color: string;
  quantity: number;
  price: string;
}

export default function CartItem({
  image,
  title,
  ref,
  color,
  quantity,
  price,
}: Props) {
  return (
    <div className="bg-white rounded-lg px-6 py-5 flex items-center justify-between shadow-sm">
      
      {/* Left Info */}
      <div className="flex items-center gap-6">
        <img src={image} className="w-16 h-16 rounded-full object-cover" />

        <div>
          <p className="font-medium text-gray-700">{title}</p>
          <p className="text-xs text-gray-400">{ref}</p>
        </div>

        <p className="text-gray-500">{color}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <button className="w-6 h-6 rounded-full bg-gray-200 text-gray-600">
            +
          </button>
          <span className="my-1 text-gray-600">{quantity}</span>
          <button className="w-6 h-6 rounded-full bg-gray-200 text-gray-600">
            -
          </button>
        </div>

        <p className="text-gray-700 w-28 text-right">{price}</p>

        <button className="text-gray-400 text-xl">×</button>
      </div>
    </div>
  );
}