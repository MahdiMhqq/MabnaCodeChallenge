import React, { useEffect } from "react";

import icons from "utils/fonticons";

import { highLightSearch, onSearchChange } from "./services";

import usePrevious from "hooks/usePrevious";

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  customClass?: string;
}

function SearchBar({ search, setSearch, customClass }: SearchBarProps) {
  //PREVIOUS VALUE
  const prevSearchQuery = usePrevious(search);

  // For highlighting searched value in rows
  useEffect(() => {
    highLightSearch(search, prevSearchQuery);
  }, [search]);

  return (
    <div className={`relative ${customClass ?? ""}`}>
      <label
        htmlFor="SearchBar"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4"
      >
        {icons.search(`fill-white`)}
      </label>
      <input
        id="SearchBar"
        formNoValidate={true}
        className={`w-full py-2 pr-8 pl-4 rounded-md bg-transparent border border-gray text-base leading-6 text-white outline-none transition duration-300  ${
          search !== "" ? "" : "focus:border-info"
        }`}
        value={search}
        onChange={(e) => {
          onSearchChange(e.target.value, setSearch);
        }}
      />
      {search !== "" && (
        <span
          className="h-4 w-4 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2"
          onClick={() => {
            setSearch("");
          }}
        >
          {icons.xmark("h-4 w-4 fill-danger")}
        </span>
      )}
    </div>
  );
}

export default SearchBar;
