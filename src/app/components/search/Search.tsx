import React, { useState } from "react";
export const Search = ({
  handleSearch,
}: {
  handleSearch: (location: string) => void;
}) => {
  const [search, setSearch] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <div className=" w-full">
      <form onSubmit={handleClick} className="flex flex-row w-full">
        <input
          onChange={handleChange}
          type="text"
          className="text-black w-full ml-0.5 p-2 rounded-md"
          placeholder="Search"
          data-testid="search"
        />
        <button
          type="submit"
          data-testid="button"
          className="border-2 border-white rounded-md p-2 ml-1"
        >
          Search
        </button>
      </form>
    </div>
  );
};
