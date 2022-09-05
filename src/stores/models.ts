export type MovieType = "movie" | "series" | "episode";

export type MovieItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieType;
  Poster: string;
};

export type MdbResult = {
  Search: [MovieItem];
  totalResults: string;
  Response: "True" | "False";
};

export type AppState = {
  types: Array<MovieType>;
  keyword: string;
  setKeyword: (newKeyword: string) => void;
  items: Array<MovieItem>;
  itemsLoadimg: boolean;
  fetchItems: () => void;
  updateItems: (newItems: [MovieItem]) => void;

  nominated: Array<MovieItem>;
  toggleNominated: (item: MovieItem) => void;
  indexNominated: (item: MovieItem) => number;

  count: number;
  setCount: () => void;
};
