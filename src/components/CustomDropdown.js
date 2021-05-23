import React, { useRef, useEffect } from "react";
import {getInitials} from '../utils/index'

const CustomDropdown = ({
  searchPlaceholder,
  search,
  searchChangeHandler,
  options,
  selectedValue,
  changeSelectedHandler,
  name,
  selectedIndex,
}) => {
  const searchInputElement = useRef();
  const itemsElement = useRef();

  useEffect(() => {
    searchInputElement.current.focus();
    if (selectedValue) {
      itemsElement.current.scrollTop =
        itemsElement.current.querySelector(`.item-${selectedIndex}`).offsetTop - 42;
    }
  }, [selectedIndex,selectedValue]);

  return (
    <div className="dropdown__menu">
      <input
        type="text"
        placeholder={searchPlaceholder ? searchPlaceholder : "Search..."}
        className="dropdown__menu_search"
        value={search}
        onChange={searchChangeHandler}
        ref={searchInputElement}
      /><div className="glyphContainer"><span className="glyphicon glyphicon-chevron-up"></span></div>
      <div className="dropdown__menu_container">
        <div className="dropdown__menu_items" ref={itemsElement}>
          {options.map((item, index) => (
            <div
              className={
                selectedValue === item
                  ? `dropdown__menu_item item-${item.id} selected`
                  : `dropdown__menu_item item-${item.id}`
              }
              key={index}
              onClick={() => changeSelectedHandler(item.name, name, item.id)}
            >
              <div className="optionContainer" data-testid="optionContainer">
                <div className="initials">{getInitials(item)}</div>
                <div className="employeeDetailsContainer">
                  <div className="employeeName">{item.name}</div>
                  <div className="employeeNameEmail">{`${item.firstName.toLowerCase()}.${item.lastName.toLowerCase()}@kinetar.com`}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
