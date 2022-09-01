import React from "react";

import SearchBar from "../SearchBar";

interface HeaderProps {
  title: string;
  customClass?: string;
  withSearch?: boolean;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

function Header({
  title,
  customClass,
  search,
  setSearch,
  withSearch,
}: HeaderProps) {
  return (
    <header
      className={`px-4 py-3 flex items-center justify-between gap-x-12 bg-primary ${
        customClass ?? ""
      }`}
    >
      <h3 className="text-base text-white font-semibold">{title}</h3>
      {withSearch && typeof search !== 'undefined' && setSearch && (
        <SearchBar search={search} setSearch={setSearch} customClass={"grow"} />
      )}
    </header>
  );
}

export default Header;
