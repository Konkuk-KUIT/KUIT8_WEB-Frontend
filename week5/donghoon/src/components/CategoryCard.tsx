import { Link } from "react-router-dom"; 

interface CategoryCardProps {
  image: string;
  name: string;
  isLink?: boolean;
}

const CategoryCard = ({ image, name, isLink = false }: CategoryCardProps) => {
  const content = (
    <div className="flex h-[66px] w-[97px] flex-col items-center justify-center gap-[6px] rounded-[8px] bg-[#fafafb]">
      <img className="h-[28px] w-[28px] object-contain" src={image} alt={name} />
      <div className="text-[13px] font-semibold text-[#333d4b]">{name}</div>
    </div>
  );

  // 5주차 과제 부분
  if (isLink) {
    //link 연결
    return (
      <Link to="/store" className="block no-underline">
        {content}
      </Link>
    )
  }

  return content;
};

export default CategoryCard;
