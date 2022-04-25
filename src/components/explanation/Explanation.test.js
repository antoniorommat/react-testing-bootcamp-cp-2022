import { render, screen } from "@testing-library/react";
import Explanation from './';

test('must render a picture explanation', () => {
  render(<Explanation />);
  const explanation = screen.getByTestId('explanation');
  expect(explanation).toBeInTheDocument();
});
