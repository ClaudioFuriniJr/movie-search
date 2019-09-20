import * as React from 'react';
import styled from 'styled-components';

const EmptyText = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    color: #FCA311;
  }
`;

const EmptyState = () => (
  <EmptyText>
    <h2>Sorry, no movie was found with that name.</h2>
  </EmptyText>
);

export default EmptyState;