import React from "react";
import Search from "../components/Search";
import PhoneList from "../components/PhoneList";

export const SearchContext = React.createContext({
  searchValue: "",
  setSearchValue: () => {},
});

export default function HomePage() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Search />
      <PhoneList />
    </SearchContext.Provider>
  );
}
