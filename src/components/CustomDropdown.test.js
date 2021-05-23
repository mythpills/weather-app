import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomDropdown from "./CustomDropdown";

test("renders CustomDropdown component", () => {
  const defaultProps = {
    searchPlaceholder: "search",
    search: "",
    searchChangeHandler: () => {},
    options: [{ firstName: "john", lastName: "doe" },{ firstName: "abcd", lastName: "xyz" }],
    selectedValue: "",
    changeSelectedHandler: () => {},
    name: "test",
    selectedIndex: null,
  };
  render(<CustomDropdown {...defaultProps} />);
  expect(screen.getByText(/JD/)).toBeInTheDocument();
  expect(screen.getByText("john.doe@kinetar.com")).toBeInTheDocument();  
  expect(screen.getByText(/AX/)).toBeInTheDocument();
  expect(screen.getByText("abcd.xyz@kinetar.com")).toBeInTheDocument();  
  const options = screen.queryAllByTestId('optionContainer');
  expect(options.length).toEqual(2);
});

