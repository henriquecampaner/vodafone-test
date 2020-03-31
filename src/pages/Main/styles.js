import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.main`
  width: 95%;
  max-width: 900px;
  margin-top: 2rem;

  form {
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #999;
      margin-bottom: 2rem;

      svg {
        position: absolute;
        margin-left: 7px;
      }
      input {
        font-size: 16px;
        padding-left: 32px;
        width: 100%;
        height: 45px;
        border: 1px solid #dddddd;
        border-radius: 4px;

        &::placeholder {
          color: rgba(0, 0, 0, 0.3);
        }
      }

      button {
        width: 20%;
        border-radius: 4px;
        border: none;
        height: 45px;
        margin-left: 1rem;
        padding: 5px;

        background: #e60000;
        color: #fff;

        font-size: 1.6rem;
        font-weight: bold;

        transition: all 0.2s;

        &:hover {
          filter: brightness(90%);
        }
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    margin: -60px 0 0 -60px;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;
