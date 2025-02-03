import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import StatsBreakdownSection from '../statsbreakdown/stats-breakdown';

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  background: #FFFFFF;
`;

const SalesHeader = styled.div`
  display: flex;
  align: left;
  padding-top: 0.5em;
  padding-left: 0.5em;
`;

const SalesSubline = styled.p`
  display: flex;
  text-align: left;
`;

const Header = styled.h2`
  display: flex;
  margin: 0;
  padding-left: 0.4em;
  font-size: 24px;
  font-weight: bold;
`;

export const StatsHeaderSection = ({stats}) => {
  return (
    <HeaderSection>
        <SalesHeader>
            <FontAwesomeIcon icon={faUpload} color="rgb(62, 177, 235)" />
            <Header>Sales</Header>
        </SalesHeader>
        <SalesSubline>You had {stats.successfulUploads} uploads and {stats.linesSaved} lines added</SalesSubline>
        <StatsBreakdownSection stats = {stats}/>
    </HeaderSection>
  )
}

export default StatsHeaderSection