import { motion } from "framer-motion";

type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type ItemCardProps = {
  item: Item;
};

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-50 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-500">{item.price}</p>
      </div>
    </motion.div>
  );
}