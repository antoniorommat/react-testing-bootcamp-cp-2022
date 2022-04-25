import {render, screen} from '@testing-library/react';
import Footer from './'
import {constants} from '../../library/constants';

test('must has a footer section with a message', () => {
  render(<Footer text={constants.footerMessage} />);
  const footer = screen.queryByText(/Project created during Wizeline Academy React Testing Bootcamp/i);
  expect(footer).toBeInTheDocument();
});
