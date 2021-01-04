import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import ChevronIcon from '../components/icons/Chevron/index';
import MoreVertIcon from '../components/icons/MoreVert/index';

const Background = styled.View`
  flex: 1;
  background-color: #A9A9A9;
  padding-top: 50px;
`;

const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`flex: 1; padding-left: 16px;`;
TopBar.Middle = styled.View`flex: 2;`;
TopBar.Right = styled.View`flex: 1; padding-right: 16px; align-items: flex-end;`;

TopBar.Title = styled.Text`color: white;`;
TopBar.SubTitle = styled.Text`color: white;`;

export default function PlayerScreen() {
  return (
    <Background>
      <TopBar>
        
        <TopBar.Left>
          <ChevronIcon />
        </TopBar.Left>
        
        <TopBar.Middle>
          <TopBar.Title>Tocando podcast</TopBar.Title>
          <TopBar.SubTitle>Hipsters ponto tech</TopBar.SubTitle>
        </TopBar.Middle>
        
        <TopBar.Right>
          <MoreVertIcon />
        </TopBar.Right>
      
      </TopBar>
    </Background>
  );
}