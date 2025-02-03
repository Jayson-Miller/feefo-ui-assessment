import React from 'react';
import styled from 'styled-components';
import NumberCounter from '../../common/numbercounter'
import PropTypes from 'prop-types'

const HeaderSection = styled.div`
  display: flex;
  align-items: left;
  flex: 1;
`;

export const StatsBreakdownSection = ({stats}) => {
  return (
    <HeaderSection>
        <NumberCounter number={stats.successfulUploads * 100 / stats.uploads} captionText="Upload Success"/>
        <NumberCounter number={stats.linesSaved * 100 / stats.linesAttempted} captionText="Lines Saved"/>
    </HeaderSection>
  )
}

StatsBreakdownSection.propTypes = {
  data: PropTypes.shape(
    {
      uploads: PropTypes.number.isRequired,
      successfulUploads: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired
    }
  )
}

export default StatsBreakdownSection