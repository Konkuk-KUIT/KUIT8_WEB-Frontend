import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreItems from "../../components/StoreItem";
import StoreSearchBar from "../../components/StoreSearchBar";
import { useQuery } from "@tanstack/react-query";
import { getStores } from "../../api/missionApi";
import { useEffect, useState } from "react";

const LIKE_STORAGE_KEY = "liked-store-ids";

const Stores = () => {
  const { data: stores, isPending, isError, refetch } = useQuery({
    queryKey: ["stores"],
    queryFn: ({ signal }) => getStores(signal),
    retry: false,
  });
  const [keyword, setKeyword] = useState("");
  const [likedStoreIds, setLikedStoreIds] = useState<number[]>(() => {
    const savedLikedStoredIds = localStorage.getItem(LIKE_STORAGE_KEY);

    if (!savedLikedStoredIds) {
      return [];
    }

    return JSON.parse(savedLikedStoredIds) as number[];
  });

  const normalizedKeyword = keyword.trim().toLowerCase();
  const filteredStores = stores?.filter((store) => store.name.toLowerCase().includes(normalizedKeyword)) ?? [];

  const handleToggleLike = (storeId: number) => {
    setLikedStoreIds((prev) => prev.includes(storeId) ? prev.filter((id) => id !== storeId) : [...prev, storeId]);
  }

  useEffect(() => {
    localStorage.setItem(LIKE_STORAGE_KEY, JSON.stringify(likedStoreIds));
  }, [likedStoreIds])

  return (
     <main className="mx-auto mt-[41px] pb-[100px] w-full">
      <BackBar orderCancel={false} backTo="/" />

      <header className="w-full bg-white px-[24px] pt-[26px] pb-[2px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[26px] font-bold text-[#191f28]">샐러드</h1>
          <span className="text-sm font-medium text-[#6b7684]">
            좋아요 {likedStoreIds.length}
          </span>
        </div>

        <StoreSearchBar 
          keyword={keyword}
          onKeywordChange={setKeyword}
        />
      </header>

      {isPending && <p role="status" className="px-6 py-10 text-center text-[#6b7684]">가게 목록을 불러오는 중입니다.</p>}
      {isError && !stores && (
        <div className="px-6 py-10 text-center text-[#6b7684]">
          <p role="alert">가게 목록을 불러오지 못했습니다.</p>
          <button type="button" onClick={() => void refetch()} className="mt-4 cursor-pointer text-[#3182f6]">다시 시도</button>
        </div>
      )}
      {stores && (
        <StoreItems
          items={filteredStores}
          likedStoreIds={likedStoreIds}
          onToggleLike={handleToggleLike}
        />
      )}
      <OrderBar />
    </main>
  );
};

export default Stores;
