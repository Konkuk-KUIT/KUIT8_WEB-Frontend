import { useEffect, useState } from "react";
import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreItem from "../../components/StoreItem";
import StoreSearchBar from "../../components/StoreSearchBar";
import stores from "../../models/stores";

const LIKE_STORAGE_KEY = "wooyun-liked-store-ids";

const loadLikedStoreIds = (): number[] => {
	try {
		const savedIds = localStorage.getItem(LIKE_STORAGE_KEY);
		const parsedIds: unknown = savedIds ? JSON.parse(savedIds) : [];

		if (!Array.isArray(parsedIds)) {
			return [];
		}

		return parsedIds.filter(
			(storeId): storeId is number => typeof storeId === "number",
		);
	} catch {
		return [];
	}
};

const Stores = () => {
	const [keyword, setKeyword] = useState("");
	const [likedStoreIds, setLikedStoreIds] =
		useState<number[]>(loadLikedStoreIds);

	const normalizedKeyword = keyword.trim().toLowerCase();
	const filteredStores = stores.filter(({ name }) =>
		name.toLowerCase().includes(normalizedKeyword),
	);

	const handleToggleLike = (storeId: number) => {
		setLikedStoreIds((previousIds) =>
			previousIds.includes(storeId)
				? previousIds.filter((id) => id !== storeId)
				: [...previousIds, storeId],
		);
	};

	useEffect(() => {
		try {
			localStorage.setItem(
				LIKE_STORAGE_KEY,
				JSON.stringify(likedStoreIds),
			);
		} catch {
			// Storage를 사용할 수 없는 환경에서도 좋아요 기능은 계속 동작한다.
		}
	}, [likedStoreIds]);

	return (
		<main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel={false} />

			<header className="w-[390px] bg-white px-6 pt-[26px] pb-[2px]">
				<h1 className="text-[26px] font-bold text-[#191f28]">
					샐러드
				</h1>

				<StoreSearchBar
					keyword={keyword}
					onKeywordChange={setKeyword}
				/>
			</header>

			<StoreItem
				items={filteredStores}
				likedStoreIds={likedStoreIds}
				onToggleLike={handleToggleLike}
			/>
			<OrderBar />
		</main>
	);
};

export default Stores;
