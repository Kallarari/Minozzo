import PageContainer from "componnets/pageContainer";
import React from "react";

import { Title, Container } from "./styles";

const BuildingPage: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <Title>Página em construção...</Title>
        <img width="300px" alt="front-end background" src="/fundo site.png" />
      </Container>
    </PageContainer>
  );
};

export default BuildingPage;
