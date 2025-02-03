import React from 'react';
import styled from 'styled-components';
import AccountOverviewSupportInfo from '../supportcontactsection/support-contact-section'

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  width: 100%;
  height: 20%
  border-bottom: 1px solid #ddd;
`;

const Header = styled.h2`
  margin: 0;
  padding-left: 5%;
  font-size: 24px;
  font-weight: bold;
`;

export const AccountOverviewHeader = ({supportContact}) => {
  return (
    <HeaderSection>
        <Header>Account Overview</Header>
        <AccountOverviewSupportInfo supportContact = {supportContact}/>
    </HeaderSection>
  )
}

export default AccountOverviewHeader