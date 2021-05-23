import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomInputSelect from "./CustomInputSelect";

test("renders CustomSelect component", () => {
  const defaultProps = {
    label: "Manager",
    data: [
      { firstName: "john", lastName: "doe" },
      { firstName: "abcd", lastName: "xyz" },
    ],
    value: "",
    name: "managerInput",
    onChange: () => {},
    error: "",
    defaultOptionLabel: "test",
    searchPlaceholder: "search..",
  };
  render(<CustomInputSelect {...defaultProps} />);
  expect(screen.getByText(/manager/i)).toBeInTheDocument();
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});
