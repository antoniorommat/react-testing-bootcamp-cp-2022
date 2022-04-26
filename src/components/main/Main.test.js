import { render, screen } from "@testing-library/react";
import Main from "./";
import InputDate from '../date/';
import Picture from '../picture/';
import Explanation from '../explanation/';
import defaultNasaImg from "../../media/default-nasa-img.jpg";

test('must has a main section', () => {
  render(
    <Main>
      <InputDate />
      <Picture src={defaultNasaImg} title="Image Title" />
      <Explanation text="Image description" />
    </Main>
  );
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});
