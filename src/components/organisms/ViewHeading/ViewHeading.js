import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.div`

`;
const Head = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: ${({theme}) => theme.bold};
`;
const Subhead = styled.p`
  font-size: 16px;
  margin-top: 8px;
  font-weight: ${({theme}) => theme.light};
  color: rgba(0,0,0,0.4);
`;
const ViewHeading = ({head, description}) => (
  <StyledHeading>
    <Head>{head}</Head>
    {description ? (<Subhead>{description}</Subhead>) : false}
  </StyledHeading>
);

ViewHeading.propTypes = {
  head: PropTypes.string.isRequired,
  description: PropTypes.string
};
ViewHeading.defaultProps = {
  description: ''
};
export default ViewHeading;
