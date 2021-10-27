import React from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

export function MessageList() {
  const message = {
    id: '1',
    text: 'Vivamus sapiens metus. Luctus id, dapibus sit amet.',
    user: {
      avatar_url: '',
      name: 'Elves Sousa',
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
