import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({vertical}) => vertical ? '0' : '50px'};
  ${({vertical}) => vertical && css`
    :not(:last-of-type){
      margin-bottom: 10px;    
    }
  `}
`;
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

const ItemDetail = ({label, value, vertical}) => (
  <DetailWrapper vertical={vertical}>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </DetailWrapper>
);

ItemDetail.propTypes ={
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};

ItemDetail.defaultProps = {
  vertical: false
};


export default ItemDetail;