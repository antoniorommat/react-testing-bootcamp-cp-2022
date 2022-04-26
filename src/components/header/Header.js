import { H1 } from "./Header.styles";

const Header = ({title}) => {
  return (
    <header>
      <H1>{title}</H1>
    </header>
  );
};

export default Header;