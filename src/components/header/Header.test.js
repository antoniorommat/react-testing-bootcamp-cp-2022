import Header from './';
import {render, screen} from '@testing-library/react';
import {constants} from '../../library/constants';

test('must has a header section with the title of the project', () => {
  render(<Header title={constants.title} />);
  const header = screen.getByRole('heading', {name: /nasa picture of the day/i});
  expect(header).toBeInTheDocument();
});