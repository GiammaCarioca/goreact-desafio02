import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 100px;
  padding: 30px;
`;
export const Repo = styled.div`
  display: flex;
  background: #fff;
  width: 260px;
  height: 45px;

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

export const FilterStatus = styled.select`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 215px;
  height: 42px;
  border: 1px solid #ddd;
  background: #fff;
  color: #999;
  font-size: 15px;
  font-family: Helvetica, sans-serif;
  padding: 12px;
  border-radius: 3px;
  cursor: pointer;
  /* appearance: none; */
`;
