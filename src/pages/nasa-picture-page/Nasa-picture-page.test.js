
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import NasaPicturePage from './';

test('when the date changes, it must show the picture of the day', async () => {
  render(<NasaPicturePage />);
  const picture = screen.getByRole('img');
  expect(picture).toBeInTheDocument();

  const date = screen.getByLabelText(/select the picture date/i);
  const currentDate = new Date().toLocaleDateString('en-CA');
  expect(date).toHaveValue(currentDate);

  fireEvent.focus(date);
  fireEvent.change(date, {
    target: {value: "2022-04-20"}
  });

  await waitFor(() => {
    expect(date.value).toMatch(/2022-04-20/);
  });
  const pictureTitle = await screen.findByText(/planet line over new york bridge/i);
  expect(pictureTitle).toBeInTheDocument();

  const explanation = await screen.findByTestId('explanation');
  expect(explanation).toBeInTheDocument();
});
