import { render, screen } from "@testing-library/react";
import Picture from './';

test('should render the img element', () => {
  render(<Picture />);
  const picture = screen.getByRole('img', {name: /apod picture/i});
  const pictureTitle = screen.getByText(/image title/i);
  expect(picture).toBeInTheDocument();
  expect(pictureTitle).toBeInTheDocument();
});
