import React from "react";

interface SearchBoxProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search..." value={props.value} onChange={props.onChange} />
    </div>
  );
}
