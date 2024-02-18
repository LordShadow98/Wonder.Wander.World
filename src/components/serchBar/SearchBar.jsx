import React, { useState } from "react";
import "./SearchBar.css";
import ContinentItems from "./Continents";

const SearchBar = () => {
  const list = ["Colombia", "Canada", "France", "Germany", "Argentina", "Peru"];
  const [filterList, setFilterList] = useState(list);
  const [showContinents, setShowContinents] = useState(false);
  const [Continentfilter, setContinentfilter] = useState("hhf");

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

  const handleClick = (name) => {
    setContinentfilter(name);
    setShowContinents((prev) => !prev);
  };

  const handleFocus = () => {
    setShowContinents((prev) => !prev);
  };

  return (
    <div className="Search">
      <div className="inputContainer">
        <div>
          <label>País </label>
          <input
            className="InputSearch"
            name="quey"
            type="text"
            placeholder="Escribe el pais que deseas ver"
            onChange={handleSearch}
            onFocus={handleFocus}
          />
        </div>
        <button className="ButtonSearch">Search</button>
        {showContinents ? (
          <div className="ContinentsBox">
            <div className="ContinentsBoxHeader">
              <h4>Filtrar por continentes</h4>
              <button>Limpiar</button>
            </div>
            <div className="ContinentsBoxList">
              <ContinentItems
                handleClick={handleClick}
                name="America"
                src={
                  "https://cdn.pixabay.com/photo/2018/03/14/18/35/americas-3225976_1280.png"
                }
              />
              <ContinentItems
                handleClick={handleClick}
                name="Europa"
                src={
                  "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/659.png"
                }
              />
              <ContinentItems
                handleClick={handleClick}
                name="Asia"
                src={
                  "https://www.pngmart.com/files/15/Asia-Map-Transparent-PNG.png"
                }
              />
              <ContinentItems
                handleClick={handleClick}
                name="Oceania"
                src={"https://svgsilh.com/svg/151644.svg"}
              />
              <ContinentItems
                handleClick={handleClick}
                name="Africa"
                src={"https://svgsilh.com/png-1024/720920.png"}
              />
            </div>
          </div>
        ) : null}
      </div>
      {filterList &&
        filterList.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
};

export default SearchBar;
