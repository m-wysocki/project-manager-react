import styled  from 'styled-components';

const MenuItem = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  color: ${({theme}) => theme.colorText};
  font-size: 16px;
  padding: 10px;
  letter-spacing: 0.3px;
  font-weight: ${({theme}) => theme.light};
  cursor: pointer;
  transition: color .3s, background-color .3s;
  
  img{
    margin-right: 20px;
  }
  
  :hover, &.active{
    color: ${({theme}) => theme.colorMain};
    background-color: #E3F2FD;
  }
`;

export default MenuItem;