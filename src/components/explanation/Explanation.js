import { P } from "./Explanation.styles";

const Explanation = ({text}) => {
  return (
    <P data-testid="explanation">{text}</P>
  );
}

export default Explanation;
