import React, { ReactNode } from 'react';

import { Container } from './styles';

interface PageContainerProps {
    children: ReactNode;
}
const PageContainer: React.FC<PageContainerProps> = ({children}) => {
  return (
  <Container>
    {children}
  </Container>);
}

export default PageContainer;