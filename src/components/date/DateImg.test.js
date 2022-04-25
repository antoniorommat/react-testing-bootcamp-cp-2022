import { render, screen } from "@testing-library/react";
import DateImg from '.';

test('Must render a input date', () => {
  render(<DateImg />);
  const date = screen.getByLabelText(/select the picture date/i);

  expect(date).toBeInTheDocument();
  expect(date).toHaveValue(new Date().toLocaleDateString('en-CA'));
});
