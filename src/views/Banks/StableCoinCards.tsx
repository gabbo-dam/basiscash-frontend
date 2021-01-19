import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import Card from '../../components/Card';
import CardContent from '../../components/CardContent';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';


type BasisLogoProps = {
  symbol: string;
  size?: number;
}

const StableCoinCard: React.FC<BasisLogoProps> = ({ symbol, size = 64 }) => {
  
  return (

    <Card>
      <CardContent>
        <StyledContent>
          <CardIcon>
            <TokenSymbol symbol={symbol} size={54} />
          </CardIcon>
          <StyledTitle>Earn BAS by DAI</StyledTitle>
            <StyledDetails>
              <StyledDetail>Deposit DAI </StyledDetail>
              <StyledDetail>Earn Basis BAS </StyledDetail>
            </StyledDetails>
            <Button text="Select"  />
        </StyledContent>
      </CardContent>
    </Card>

  )
}

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.color.grey[200]};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
`;

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledDetails = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[6]}px;
  margin-top: ${(props) => props.theme.spacing[2]}px;
  text-align: center;
`;

const StyledDetail = styled.div`
  color: ${(props) => props.theme.color.grey[300]};
`;

export default StableCoinCard