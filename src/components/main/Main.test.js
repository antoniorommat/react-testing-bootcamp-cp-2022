import { render, screen } from "@testing-library/react";
import Main from "./";

test('must has a main section', () => {
  render(<Main />);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});
