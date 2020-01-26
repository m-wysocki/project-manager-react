import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Label = styled.h4`
  color: #000;
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: ${({theme}) => theme.bold};
`;
const Value = styled.span`
  color: rgba(0,0,0,0.5);
  font-size: 18px;
  font-weight: ${({theme}) => theme.light};
`;
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: ${({directionRow}) => directionRow ? 'row' : 'column'};
  margin-right: ${({vertical}) => vertical ? '0' : '50px'};
  ${({vertical}) => vertical && css`
    :not(:last-of-type){
      margin-bottom: 10px;    
    }
  `}
   ${({directionRow}) => directionRow && css`
      align-items: center;
      height: 100%;
      ${Label}{
        margin-bottom: 0;
        margin-right: 10px;
      }
  `}
`;



const ItemDetail = ({label, value, vertical, directionRow}) => (
  <DetailWrapper vertical={vertical} directionRow={directionRow}>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </DetailWrapper>
);

ItemDetail.propTypes ={
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
  directionRow: PropTypes.bool
};

ItemDetail.defaultProps = {
  vertical: false,
  directionRow: false
};


export default ItemDetail;