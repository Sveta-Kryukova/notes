import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './SearchBox.css';

interface SearchBoxProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={props.value}
        onChange={props.onChange}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

