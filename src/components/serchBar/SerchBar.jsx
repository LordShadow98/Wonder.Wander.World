import React, { useState } from "react";
import "./SerchBar.css";

const SerchBar = () => {
  const list = ["Colombia","Canada","France","Germany","Argentina","Peru"];
  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
    }
    const filteredList = list.filter(
        (item) =>
          item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      );
      setFilterList(filteredList);
  };
  return (
    <div className="Search">
      <input
        name="quey"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      {filterList &&
        filterList.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
};

export default SerchBar;