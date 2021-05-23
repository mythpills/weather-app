import React from "react";
import { render, renderHook, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import * as reactQuery from "react-query";

const renderComponent = (queryClient) => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

test("renders component", async () => {
  const queryFunc = jest.spyOn(reactQuery, "useQuery").mockResolvedValue({
    data: { data: [{ firstName: "John" }] },
  });
  const queryClient = new QueryClient();
  renderComponent(queryClient);
  await expect(queryFunc).toHaveBeenCalledTimes(1);
  expect(
    screen.getByText(/Peakon Challenge - Manager Live Search/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Choose manager/i)).toBeInTheDocument();
});
