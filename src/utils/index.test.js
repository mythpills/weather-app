import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { processEmployeeData, getInitials } from "./index";

test("returns initials", async () => {
  const managerData = { firstName: "John", lastName: "Doe" };
  const initials = getInitials(managerData);
  expect(initials).toEqual("JD");
});

test("process employeed raw data correctly", async () => {
  const managerData = {
    data: { data: [{ attributes: { firstName: "John" } }] },
  };
  const processedData = processEmployeeData(managerData);
  expect(processedData).toEqual([{ firstName: "John", id: 0 }]);
});
