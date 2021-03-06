import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

export default EvolutionArrow = ({ data, color }) => {
  const colors = useTheme().colors;
  const arrow = require('../../assets/next.png');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>
      <Image style={styles.image} source={arrow} tintColor={colors.pokemon.background[color]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: RFValue(16),
  },
  text: {
    fontSize: RFValue(18),
    lineHeight: RFValue(18),
    marginRight: RFValue(5),
  },
  image: {
    height: RFValue(32),
    width: RFValue(32),
  },
});
