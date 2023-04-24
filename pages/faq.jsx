import { Faq } from "../components/Faq";
import HeaderComponent from "../components/commons/HeaderComponent/HerderC";

const faq = () => {
  return (
    <>
      <HeaderComponent tittle={"Texto para a página Faq!"} />
      <Faq />
    </>
  );
};

export default faq;
