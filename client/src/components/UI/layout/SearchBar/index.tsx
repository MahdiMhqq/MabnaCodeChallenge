import React, { useEffect } from "react";

import icons from "utils/fonticons";

import { onSearchChange } from "./services";

import usePrevious from "hooks/usePrevious";

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  customClass?: string;
}

function SearchBar({ search, setSearch, customClass }: SearchBarProps) {
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
        className={`w-full py-2 pr-8 pl-4 rounded-md bg-lprimary border border-lprimary text-base leading-6 text-white outline-none transition duration-300 focus:border-gray`}
        value={search}
        onChange={(e) => {
          onSearchChange(e.target.value, setSearch);
        }}
        placeholder={"جستجو نام نماد، نام شرکت"}
        autoComplete={"off"}
      />
      {search !== "" && (
        <span
          className="h-8 w-8 absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer group"
          onClick={() => {
            setSearch("");
          }}
        >
          {icons.xmark(
            "h-8 w-8 fill-danger group-hover:fill-ldanger transition duration-100"
          )}
        </span>
      )}
    </div>
  );
}

export default SearchBar;
