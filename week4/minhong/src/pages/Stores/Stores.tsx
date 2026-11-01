import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreItems from "../../components/StoreItem";
import StoreSearchBar from "../../components/StoreSearchBar";
import stores from "../../models/stores";
import { useEffect, useState } from "react";

const LIKE_STORAGE_KEY = "liked-store-ids";

const Stores = () => {
  const [keyword, setKeyword] = useState("");
  const [likedStoreIds, setLikedStoreIds] = useState<number[]>(() => {
    const savedLikedStoredIds = localStorage.getItem(LIKE_STORAGE_KEY);

    if (!savedLikedStoredIds) {
      return [];
    }

    return JSON.parse(savedLikedStoredIds) as number[];
  });

  const normalizedKeyword = keyword.trim().toLowerCase();
  const filteredStores = stores.filter((store) => store.name.toLowerCase().includes(normalizedKeyword));

  const handleToggleLike = (storeId: number) => {
    setLikedStoreIds((prev) => prev.includes(storeId) ? prev.filter((id) => id !== storeId) : [...prev, storeId]);
  }

  useEffect(() => {
    localStorage.setItem(LIKE_STORAGE_KEY, JSON.stringify(likedStoreIds));
  }, [likedStoreIds])

  return (
     <main className="mx-auto mt-[41px] mb-[77px] w-[390px]">
      <BackBar orderCancel={false} />

      <header className="w-[390px] bg-white px-[24px] pt-[26px] pb-[2px]">
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

      <StoreItems
        items={filteredStores}
        likedStoreIds={likedStoreIds}
        onToggleLike={handleToggleLike}
      />
      <OrderBar />
    </main>
  );
};

export default Stores;