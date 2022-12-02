import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
  h2 {
    font-size: 3.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.C_FONT_1};
  }
`;