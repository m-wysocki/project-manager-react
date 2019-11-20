import styled from 'styled-components';

const AddButton = styled.div`
    width: 55px;
    height: 55px;
    background-color: ${({theme}) => theme.colorMain};
    position: absolute;
    right: 60px;
    border-radius: 100%;
    box-shadow: 0.5px 3px 4px 1px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover::after{
      transform: rotate(180deg);    
    }
    ::after{
      content: '+';
      position: absolute;
      color: #ffffff;
      font-size: 28px;
      transition: transform .3s ease-in-out;
    }
`;

export default AddButton;