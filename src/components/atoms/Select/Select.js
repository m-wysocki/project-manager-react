import styled from 'styled-components';

export const Select = styled.select`
    border: none;
    border-bottom: 1px solid #ced4da;
    background: transparent;
    padding: 0.6rem 0 0.4rem 0;
    font-size: 1rem;
    transition: border-bottom-color .3s ease-in-out;
    outline: none;
    cursor: pointer;
    color: #495057;
    font-weight: 300;
    
    :hover{
      border-bottom: 1px solid #4285f4;
    }
    
    option{
      border: none;
    }
`;