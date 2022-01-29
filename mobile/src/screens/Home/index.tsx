import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SigninBox } from '../../components/SigninBox';
import { useAuth } from '../../hooks/auth';
import { styles } from './styles';

export function Home() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Header />
      <Text style={{ color: '#fff' }}>User: {user}</Text>
      <MessageList />
      {user ? <SendMessageForm /> : <SigninBox />}
    </View>
  );
}
