import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;

  > h1 {
    margin: 0px 0px 0px 30px;
  }

  > .left-icon, .right-icon {
    position:absolute;   
    width: 40px;
    height: 225px;
    background-color:rgba(0,0,0,0.5);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    overflow: hidden;
    opacity: 0;
    transition: all ease 0.4s;
  }
  
  > .left-icon {
    left: 0;
  }

  > .right-icon {
    right: 0;
  }   

  &:hover .left-icon, &:hover .right-icon {
    opacity: 1;
  }

  @media (max-width: 760px){
    .left-icon, .right-icon {
      opacity: 1;
    }
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const List = styled.div`
  transition: all ease 0.5s;
`;

export const Item = styled.div`
  display: inline-block;
  width:150px;
  cursor: pointer;

  > img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    
    &:hover {
      transform: scale(1);
    }
  }
`;

