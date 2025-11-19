import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-xl font-serif font-bold text-stone-800">{product.name}</h3>
          <span className="text-amber-700 font-bold">{product.price}</span>
        </div>
        <p className="text-stone-600 text-sm">{product.description}</p>
        <button className="mt-4 w-full bg-stone-900 text-white py-2 rounded hover:bg-amber-700 transition-colors">
          Order Now
        </button>
      </div>
    </div>
  );
}