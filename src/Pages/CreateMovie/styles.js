import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
display: grid;
grid-template-rows: 10.5rem auto;
grid-template-areas:
'header'
'content';

> main {
  grid-area: content;
  overflow-y: scroll;
}

.tags {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

`;


export const Form = styled.form`
  width: 118rem;
  margin: 4rem auto;
  overflow-y: scroll;


  > header {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 2.4rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.C_FONT_LINK_1};
    display: flex;
    align-items: center;
    gap: .8rem
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.C_FONT_1};
    font-size: 3.6rem;
    line-height: 4.7rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }

  > .Inputs {
    display: flex;
    gap: 4rem;
    margin-bottom: 4rem;
    
  }

  .buttons {
    display: flex;
    gap: 4rem;

    > button:nth-child(1) {
      background-color: black;
      color: ${({ theme }) => theme.COLORS.C_FONT_3};
    }
  }

`