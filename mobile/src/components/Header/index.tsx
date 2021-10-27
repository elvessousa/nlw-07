import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.buttons}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageUri="" />
      </View>
    </View>
  );
}
