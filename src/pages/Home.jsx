import { MainLayout } from "../layouts/MainLayout";
import { HeaderMain, NavigationHome } from "../components";
import { useEffect } from "react";
import { title } from "../utils";

const Home = () => {
  useEffect(() => {
    title("Home");
  }, []);

  return (
    <MainLayout fixed={true}>
      <HeaderMain 
        title="Osakti alqur'an" 
        paragraph={
          <>
            Created By 
            <a href="https://www.instagram.com/osis_sakti" target="_blank" rel="noopener noreferrer">
              OSIS SAKTI
            </a>
            with 
            <a href="https://www.instagram.com/zulpazy" target="_blank" rel="noopener noreferrer">
              Zulpazy
            </a>
          </>
        } 
      />
      <NavigationHome />
    </MainLayout>
  );
};

export default Home;

