import { Link } from 'react-router-dom';

interface CategoryCardProps {
  image: string;
  name: string;
  isLink?: boolean;
}

const CategoryCard = ({ image, name, isLink = false }: CategoryCardProps) => {
  const content = (
    <div className="flex h-[66px] w-full flex-col items-center justify-center gap-[6px] rounded-[8px] bg-[#fafafb]">
      <img className="h-[28px] w-[28px] object-contain" src={image} alt="" />
      <div className="text-[13px] font-semibold text-[#333d4b]">{name}</div>
    </div>
  );

  if (isLink) {
    return <Link to="/store" className="rounded-lg focus-visible:outline-2 focus-visible:outline-[#3182f6]">{content}</Link>;
  }

  return content;
};

export default CategoryCard;
