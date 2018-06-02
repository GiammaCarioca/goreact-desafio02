import styled from 'styled-components';

export const Issue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 114px;
  margin: 10px;
  background: #fff;
  border-radius: 3px;

  img {
    width: 64px;
    height: 64px;
    margin: 20px 20px 30px 20px;
    border-radius: 50%;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 74px;

  strong {
    font-weight: bold;
    font-size: 16px;
    color: #333;
    font-family: Helvetica, sans-serif;
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  small {
    font-weight: normal;
    font-size: 12px;
    color: #999;
    font-family: Helvetica, sans-serif;
  }
`;

export const ExternalLink = styled.div`
  display: flex;

  a {
    display: flex;
    border: 0;
    border-radius: 3px;
    width: 128px;
    height: 30px;
    background: #b286d1;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    font-family: Helvetica, sans-serif;
    text-decoration: none;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }
`;
