import styled from 'styled-components';

export const Repository = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  width: 260px;
  height: 45px;
  align-self: center;
  cursor: pointer;

  button {
    height: 45px;
    border: 0;
    color: #ccc;
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  background: #fff;
  width: 253px;
  height: 45px;
  margin-bottom: 20px;

  img {
    width: 45px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-left: 10px;
  }

  strong {
    font-weight: bold;
    font-size: 16px;
    color: #333;
    font-family: Helvetica, sans-serif;
  }

  small {
    font-weight: normal;
    font-size: 12px;
    color: #999;
    font-family: Helvetica, sans-serif;
  }
`;
