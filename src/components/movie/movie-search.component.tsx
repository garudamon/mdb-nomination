import { useCallback } from "react";
import { Input, Button } from "@/components/ui";
import { useStore } from "@/stores";

const MovieSearch = () => {
  const { fetchItems, keyword, setKeyword, itemsLoadimg } = useStore();

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      fetchItems();
    },
    [keyword]
  );
  return (
    <form
      className="px-5 border-b-2 border-double h-20 flex items-center gap-5"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Movie keyword..."
        value={keyword}
        onChange={handleChange}
      />
      <Button type="submit" data-testid="searchButton">
        <span>Search</span>
      </Button>
      {itemsLoadimg === true && <span aria-label="loading">Loading...</span>}
    </form>
  );
};

export default MovieSearch;
