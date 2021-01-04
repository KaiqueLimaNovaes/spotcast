import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import ChevronIcon from '../components/icons/Chevron/index';
import MoreVertIcon from '../components/icons/MoreVert/index';

const Background = styled.View`
    flex: 1;
    background-color: grey;
    padding-top: 50px;
`;

const TopBar = styled.View`
  flex-direction: row;
`;
TopBar.Title = styled.Text`color: white;`;
TopBar.SubTitle = styled.Text`color: white;`;

export default function PlayerScreen() {
  return (
    <Background>
      <TopBar>
        <ChevronIcon />
        <TopBar.Title>Tocando podcast</TopBar.Title>
        <TopBar.SubTitle>Hipsters ponto tech</TopBar.SubTitle>
        <MoreVertIcon />
      </TopBar>
    </Background>
  );
}