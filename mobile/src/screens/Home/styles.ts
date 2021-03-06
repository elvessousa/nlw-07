import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK_SECONDARY,
    flex: 1,
    paddingTop: getStatusBarHeight() + 17,
  },
});
