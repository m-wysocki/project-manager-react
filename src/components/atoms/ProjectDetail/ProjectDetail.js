import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
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

const ProjectDetail = ({label, value}) => (
  <DetailWrapper>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </DetailWrapper>
);

ProjectDetail.propTypes ={
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};


export default ProjectDetail;