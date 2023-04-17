import { Faq } from "../components/Faq";
import HeaderComponent from "../components/commons/HeaderComponent/HerderC";

const faq = () => {
  return (
    <>
      <HeaderComponent
        tittle={"Fazendo um teste agora para ver se vai mudar o texto!"}
      />
      <Faq />
    </>
  );
};

export default faq;
