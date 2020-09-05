import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test('renders signature "Daniel Mont-Eton"', () => {
  const { getByText } = render(<App />);
  const signature = getByText(/Dan Mont-Eton/i);
  expect(signature).toBeInTheDocument();
});
