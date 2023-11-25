import React, { useRef, useState, useEffect } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
export const Search = ({
  handleSearch,
}: {
  handleSearch: (location: string) => void;
}) => {
  const [history, setHistory] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const validateSearch = (search: string) => {
    if (search === "") return false;
    return true;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateSearch(search)) return;
    handleSearch(search);
    setSearch("");
    setHistory((prev) => (!prev.includes(search) ? [search, ...prev] : prev));
  };

  const handleHistoryClick = (item: string) => {
    // clear search
    setSearch("");
    // move current history to the top
    setHistory((prev) => [
      item,
      ...prev.filter((prevItem) => prevItem !== item),
    ]);
    // search that item
    handleSearch(item);
  };
  const ref = useRef<HTMLInputElement>(null);

  useClickOutside(ref, () => {
    isFocused && setIsFocused(false);
  });
  return (
    <div className=" w-full relative">
      <form onSubmit={handleClick} className="flex flex-row w-full">
        <div className="w-full relative">
          <input
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onChange={handleChange}
            id="search"
            type="text"
            value={search}
            className="text-black w-full ml-0.5 p-2 rounded-md"
            placeholder="Search"
            data-testid="search"
          />
          {history.length > 0 && isFocused ? (
            <div
              className="flex flex-col absolute gap-x-2 mt-1 rounded-md min-h-[2rem] justify-center items-start pl-1 bg-white w-full z-10"
              data-testid="search-menu"
            >
              {history.map((item, index) => (
                <p
                  key={item}
                  onClick={(e) => {
                    e.preventDefault();
                    handleHistoryClick(item);
                  }}
                  className={`cursor-pointer text-black ${
                    index !== 0 ? "border-t-2 border-black" : ""
                  } w-full `}
                  data-testid={item}
                >
                  {item}
                </p>
              ))}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          data-testid="button"
          className="border-2 border-white rounded-md p-2 ml-1 flex-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};
