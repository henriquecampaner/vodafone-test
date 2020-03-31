import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;

  border: 1px solid #eee;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

  div {
    width: 50%;
    height: 50%;
    h2 {
      font-size: 2.3rem;
      margin-bottom: 1.2rem;
      text-align: center;
    }

    .phrase {
      font-size: 1.8rem;
      color: #e60000;
      font-weight: normal;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #eee;

    .icons {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      text-align: left;
      width: 95%;

      &:first-child {
        margin-bottom: 1.6rem;
      }

      &:last-child {
        margin-top: 1.2rem;
      }

      h3 {
        font-size: 2rem;
        font-weight: normal;
        line-height: 1.5rem;
      }

      span {
        font-size: 1.6rem;
        line-height: 1.5rem;
      }

      svg {
        margin-right: 1.3rem;
        height: 20px;
        min-width: 20px;
      }

      @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
      }
    }
  }
`;
