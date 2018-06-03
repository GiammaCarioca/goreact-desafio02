import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px auto;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'search header'
    'repoview main';
`;

export const Sidebar = styled.div``;

export const Search = styled.div`
  grid-area: search;
  background: #b286d1;
`;

export const Form = styled.form`
  display: flex;
  justify-items: center;
  align-items: center;
  max-width: 320px;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 10px;
  padding-bottom: 20px;

  input {
    width: 200px;
    height: 50px;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    background: #eee;
    font-family: Helvetica, sans-serif;
    font-size: 15px;
    color: #999999;
    border-radius: 3px;

    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }

  button {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    background: #59ea9a;
    color: #fff;
    border: 0;
    font-size: 20px;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;

export const RepoView = styled.div`
  grid-area: repoview;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  height: 100vh;
  background: #fff;
`;

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

export const Wrapper = styled.div`
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

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 100px;
  padding: 30px;
`;
export const RepoSelected = styled.div`
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
`;

/* appearance: none; */

export const IssuesView = styled.div``;

export const IssuesList = styled.div`
  grid-area: main;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background: #f5f5f5;
  margin: 20px;
`;
