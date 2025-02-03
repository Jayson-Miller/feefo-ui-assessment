import React from 'react';
import styled from 'styled-components';

import './account-overview.css';
import AccountOverviewHeader from './components/account/accountoverviewheader/account-overview-header'
import StatsHeaderSection from './components/stats/statsheader/stats-header'

const AccountOverviewDiv = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <AccountOverviewDiv >
      <AccountOverviewHeader supportContact = {data.supportContact}/>
      <StatsHeaderSection stats = {data.salesOverview}/>
    </AccountOverviewDiv>
  )
}

export default AccountOverview;