"use client";
import { motion } from "framer-motion";

type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
  discount: number;
  category: string;
  brand:string;
  stock : {
    [size: string]: number;
  };
};

type ItemCardProps = {
  item: Item;
};

export default function ItemCard({ item }: ItemCardProps) {
  const formatPrice = (price: number) =>new Intl.NumberFormat("id-ID").format(price);
  const discountedPrice = item.price - (item.price * item.discount) / 100;
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
      href={`/${item.category}/${item.brand}/${item.id}`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-50 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg text-gray-800 font-semibold">{item.name}</h2>
        <div className="flex items-center space-x-2">
          {item.discount > 0 ? (
            <>
              <p className="text-gray-500 line-through">{formatPrice(item.price)} IDR</p>
              <p className="text-red-500 font-bold">{formatPrice(discountedPrice)} IDR</p>
            </>
          ) : (
            <p className="text-gray-500">{formatPrice(item.price)} IDR</p>
          )}
        </div>
      </div>
    </motion.a>
  );
}