import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Bank from '../Bank';
import BankCards from './BankCards';
import { useWallet } from 'use-wallet';
import Button from '../../components/Button';
import styled from 'styled-components';
import StableCoinCard from './StableCoinCards'

const Banks: React.FC = () => {
  const { path } = useRouteMatch();
  const { account, connect } = useWallet();

  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <PageHeader
            icon={'🏦'}
            title="Pick a Bank."
            subtitle="Earn Basis Shares by providing liquidity"
          />
          {!!account ? (
            <BankCards />
          ) : (
            <>
            <ThreeColumns>
              <StableCoinCard />
              <StableCoinCard />
              <StableCoinCard />
            </ThreeColumns>
            <TwoColumns>
              <StableCoinCard />
              <StableCoinCard />
            </TwoColumns>
           {/* <BankCards /> */}
            </>
          )}
        </Route>
        <Route path={`${path}/:bankId`}>
          <Bank />
        </Route>
      </Page>
    </Switch>
  );
};

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;  
  justify-content: center;
`;

const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 24px;
`;
const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

export default Banks;
