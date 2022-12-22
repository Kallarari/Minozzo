import styled from 'styled-components';
import { palette } from 'styles/palette';

export const Container = styled.div`
  width: 100%;
  height: 55px;
  background-color: ${palette.primary.main};
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

export const SocialMediaContainer = styled.div`
  width: 175px;
  display: flex;
  justify-content: space-between;
`;