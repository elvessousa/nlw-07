import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SigninBox } from '../../components/SigninBox';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Olá, Teum!</Text>
      <MessageList />
      <SigninBox />
    </View>
  );
}
