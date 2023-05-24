import React from "react";
import find from "../../assets/search-icon.svg";
import close from "../../assets/close-icon.svg";
import { SearchContext } from "../../pages/HomePage";

import "./searchStyle.scss";

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef(null);
  const onCloseBtn = () => {
    setSearchValue("");
    inputRef.current.focus();
  };
  return (
    <div className="search-wrapper">
      <img className="search-wrapper-find" src={find} alt="find" />
      <input
        ref={inputRef}
        className="search-wrapper__input"
        type="text"
        placeholder="Find by name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <img
          onClick={onCloseBtn}
          className="search-wrapper-close"
          src={close}
          alt="close"
        />
      )}
    </div>
  );
}
