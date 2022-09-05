import create from "zustand";
import { persist } from "zustand/middleware";
import { MovieItem, MdbResult, AppState } from "./models";

const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      count: 0,
      setCount: () => set((state) => ({ count: state.count + 1 })),
      types: ["movie", "series", "episode"],
      keyword: "",
      setKeyword: (newKeyword: string) => {
        set(() => ({ keyword: newKeyword }));
      },
      items: [],
      itemsLoadimg: false,
      updateItems: (newItems: [MovieItem]) => {
        set(() => ({ items: [...newItems] }));
      },
      fetchItems: async () => {
        set(() => ({ itemsLoadimg: true }));
        let url = `${import.meta.env.VITE_API_URL}?apikey=${
          import.meta.env.VITE_API_KEY
        }`;
        if (get().keyword && get().keyword.trim().length > 0) {
          url += `&s=${get().keyword}`;
        }
        try {
          const response = await fetch(url);
          const data: MdbResult = await response.json();

          if (data.Response === "True") {
            get().updateItems(data.Search);
          }
        } catch (error) {
        } finally {
          set(() => ({ itemsLoadimg: false }));
        }
      },
      nominated: [] as Array<MovieItem>,
      toggleNominated: (item: MovieItem) => {
        const nominatedId = get().indexNominated(item);
        console.log(nominatedId, item);
        if (nominatedId < 0) {
          set((state) => ({ nominated: [...state.nominated, item] }));
        } else {
          let newItems = get().nominated;
          newItems.splice(nominatedId, 1);
          set(() => ({ nominated: [...newItems] }));
        }
      },
      indexNominated: (item: MovieItem) => {
        let checking = get().nominated.findIndex(
          (i) => i.imdbID === item.imdbID
        );
        return checking;
      },
    }),
    {
      name: "mdb-nomination",
    }
  )
);

export { useStore };
