import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SupportSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #f4f4f4;
  padding: 15px;
  border-radius: 6px;
  padding-right: 6%;
`;

const SupportHeader = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;`;

const SupportContactDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const SupportContactName =styled.strong`
  font-size: 16px;
  font-weight: bold;
`;

const SupportContactContact = styled.p`
  font-size: 14px;
  color: #555;
`;

const SupportContactInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: #ffcc00;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const SupportContactSection = ({supportContact}) => {
  return (
    <SupportSection>
        <SupportHeader>Your FEEFO Support Contact</SupportHeader>
        <SupportContactDiv>
            <Avatar>{supportContact.name.charAt(0)}</Avatar>
            <SupportContactInfoDiv>
              <SupportContactName>{supportContact.name}</SupportContactName>
              <SupportContactContact><FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${supportContact.email}`}>{supportContact.email}</a></SupportContactContact>
            </SupportContactInfoDiv>
        </SupportContactDiv>
    </SupportSection>
  )
}

export default SupportContactSection