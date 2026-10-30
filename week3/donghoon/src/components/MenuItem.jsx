import Button from "./Button";

const MenuItem = ({ menu }) => {
  const { name, isBest, price, ingredients } = menu;

  return (
    <article className="flex h-[110px] w-[390px] px-[24px]">
      {/* 메뉴 이미지 */}
      <div className="flex shrink-0 items-center">
        <div className="h-[54px] w-[54px] rounded-full bg-[#ececec]" />
      </div>

      {/* 메뉴 정보 */}
      <div className="ml-[16px] w-[201px] shrink-0 pt-[16px]">
        {/* 메뉴 이름 / BEST */}
        <div className="flex items-center gap-[6px]">
          <h3 className="text-[17px] font-semibold text-[#333d4b]">
            {name}
          </h3>

          {isBest && (
            <span className="text-[17px] font-semibold text-[#3182f6]">
              BEST
            </span>
          )}
        </div>

        {/* 가격 */}
        <div className="mt-[5px] text-[13px] font-medium text-[#6b7684]">
          {price.toLocaleString()}원
        </div>

        {/* 재료 설명 */}
        {/* 부가 기능 - break-keep을 넣어주자*/}
        {/* 단어를 쪼개지 말고(keep), 가능한 공백에서 줄을 바꿔라. 라는 뜻 */}
        <p className="mt-[5px] h-[32px] w-[201px] overflow-hidden break-keep text-[13px] font-medium leading-[16px] text-[#6b7684]">
          {ingredients}
        </p>
      </div>

      {/* 담기 버튼 */}
      <div className="ml-auto flex shrink-0 items-center">
        <Button size="sm">담기</Button>
      </div>
    </article>
  );
};

export default MenuItem;