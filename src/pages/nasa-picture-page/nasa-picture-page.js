import Header from "../../components/header/";
import Footer from "../../components/footer/";
import Main from "../../components/main";
import { constants } from "../../library/constants";
import DateImg from "../../components/date";

const NasaPicturePage = () => {
  return (
    <>
      <Header title={constants.title}/>
      <Main>
        <DateImg />
      </Main>
      <Footer text={constants.footerMessage}/>
    </>
  )
};

export default NasaPicturePage;
