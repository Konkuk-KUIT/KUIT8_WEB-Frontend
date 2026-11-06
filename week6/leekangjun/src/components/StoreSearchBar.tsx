import type { ChangeEvent } from "react";
import { useRef } from "react";
import Button from "./Button";

interface StoreSearchBarProps {
    keyword: string;
    onKeywordChange: (keyword: string) => void;
}

const StoreSearchBar = ({ keyword, onKeywordChange } : StoreSearchBarProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onKeywordChange(event.target.value);
    }

    const handleFocus = () => {
        inputRef.current?.focus();
    }
    
      return (
        <div className="mt-4 flex h-11 gap-2">
            <input
                ref={inputRef}
                value={keyword}
                onChange={handleChange}
                placeholder="가게 이름을 검색해보세요"
                aria-label="가게 이름 검색"
                className="min-w-0 flex-1 rounded-lg bg-[#f2f4f6] px-3 text-[15px] text-[#333d4b] outline-none placeholder:text-[#8b95a1] focus:ring-2 focus:ring-[#3182f6]"
            />

            <Button type="button" onClick={handleFocus}>
                검색
            </Button>
        </div>
  );
}

export default StoreSearchBar;