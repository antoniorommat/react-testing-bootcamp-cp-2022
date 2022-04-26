import { Container, Panel } from "./Main.styles";

const Main = ({children}) => {
  const [InputDate, Picture, Explanation] = children;

  return (
    <main>
      {InputDate}
      <Container>
        <Panel>
          {Picture}
        </Panel>
        <Panel>
          {Explanation}
        </Panel>
      </Container>
    </main>
  )
}

export default Main;
