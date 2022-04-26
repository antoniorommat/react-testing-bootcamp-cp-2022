import { render, screen } from "@testing-library/react";
import InputDate from '.';

test('Must render a input date', () => {
  render(<InputDate />);
  const date = screen.getByLabelText(/select the picture date/i);

  expect(date).toBeInTheDocument();
  expect(date).toHaveValue(new Date().toLocaleDateString('en-CA'));
});
