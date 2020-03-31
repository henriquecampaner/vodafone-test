import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 20%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;

  header {
    width: 90%;
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 20rem;
    }

    span {
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
`;
