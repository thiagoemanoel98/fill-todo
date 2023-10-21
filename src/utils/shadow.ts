import { StyleSheet } from 'react-native';

export const Shadow = StyleSheet.create({
  applyShadow: {
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#fff'
  }
});
