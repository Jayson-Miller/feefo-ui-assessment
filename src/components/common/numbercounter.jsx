import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NumberCounterDiv = styled.div`
  border: 2px solid #f4f4f4;
  text-align: left;
  padding-left: 1em;
  padding-bottom: 1em;
  padding-right: 9em;
  width: 100%;
`;

const NumberText = styled.p`
  color: #22AB55;
  font-weight: bolder;
`;

const Caption = styled.div`

`;

export const NumberCounter = ({number, captionText}) => {
  return (
        <NumberCounterDiv>
            <div>
                <NumberText>{number}%</NumberText>
            </div>
            <Caption>{captionText}</Caption>
        </NumberCounterDiv>
  )
}

NumberCounter.propTypes = {
  number: PropTypes.number.isRequired,
  captionText: PropTypes.string
}

export default NumberCounter

