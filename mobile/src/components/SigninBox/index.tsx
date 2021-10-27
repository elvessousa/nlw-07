import React from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

export function SigninBox() {
  return (
    <View>
      <Text>Teum</Text>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
      />
    </View>
  );
}
