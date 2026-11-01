import CategoryCard from "../../components/CategoryCard";
import OrderBar from "../../components/OrderBar/OrderBar";

import pizzaImg from "../../assets/pizza.png";
import saladImg from "../../assets/salad.png";
import burgerImg from "../../assets/burger.png";
import koreanImg from "../../assets/korean.png";
import snackImg from "../../assets/snack.png";
import chickenImg from "../../assets/chicken.png";
import sushiImg from "../../assets/sushi.png";
import sandwichImg from "../../assets/sandwich.png";
import pastaImg from "../../assets/pasta.png";
import dessertImg from "../../assets/dessert.png";
import coffeeImg from "../../assets/coffee.png";
import moreImg from "../../assets/more.svg";

const categories = [
  { image: pizzaImg, name: "피자" },
  { image: saladImg, name: "샐러드", isLink: true },
  { image: burgerImg, name: "햄버거" },

  { image: koreanImg, name: "한식" },
  { image: snackImg, name: "분식" },
  { image: chickenImg, name: "치킨" },

  { image: sushiImg, name: "초밥" },
  { image: sandwichImg, name: "샌드위치" },
  { image: pastaImg, name: "파스타" },

  { image: dessertImg, name: "디저트" },
  { image: coffeeImg, name: "커피" },
  { image: moreImg, name: "더보기" },
];

const Home = () => {
  return (
    <div className="flex min-h-screen justify-center bg-[#f2f4f6]">
      <div className="relative h-[844px] w-[390px] overflow-hidden bg-white">
        <main className="pt-[63px]">
          <h1 className="m-[0_0_13px_24px] text-left text-[24px] leading-[normal] font-bold text-[#191f28]">오늘은 무엇을 먹을까요?</h1>

          <p className="m-[0_0_60px_24px] text-left text-[17px] font-medium text-[#333d4b]">한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</p>

          <div className="ml-[24px] grid h-[326px] w-[342px] auto-rows-[66px] grid-cols-[repeat(3,108px)] gap-x-[14px] gap-y-[10px]">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                image={category.image}
                name={category.name}
                //link 속성 넣기
              />
            ))}
          </div>
        </main>

        <OrderBar />
      </div>
    </div>
  );
};

export default Home;
