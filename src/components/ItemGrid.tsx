import ItemCard from "./ItemCard";

type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type ItemGridProps = {
  items: Item[];
};

export default function ItemGrid({ items }: ItemGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}