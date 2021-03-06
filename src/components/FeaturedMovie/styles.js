import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;

  @media (max-width: 760px){
    height: 90vh;
  }
`;

export const VerticalArea = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const HorizontalArea = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 50px;
`;

export const Name = styled.div`
  font-size: 60px;
  font-weight: bold;

  @media (max-width: 760px){
    font-size: 40px;
  }
`;

export const Infos = styled.div`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  @media (max-width: 760px){
    font-size: 16px;
  }
`;

export const Points = styled.div`
  display: inline-block;
  margin-right: 15px;
  color: #46d369;
`;

const d_block_mr_15 = `
  display: inline-block;
  margin-right: 15px;
`;

export const Year = styled.div(d_block_mr_15);

export const Seasons = styled.div(d_block_mr_15);

export const Description = styled.div`
  margin-top:15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;

  @media (max-width: 760px){
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const ButtonsArea = styled.div`
  margin-top:15px;

  > .watch-button, .my-list-button {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;

    &:hover {
      opacity: 0.7;
    }
  }

  > .watch-button {
    background-color: #fff;
    color: #000;
  }

  > .my-list-button {
    background-color: #333;
    color: #fff;
  }

  @media (max-width: 760px){
    .watch-button, .my-list-button {
      font-size: 16px;
    }
  }
`;

export const Genres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

  @media (max-width: 760px){
    font-size: 14px;
  }
`;