import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

import StatBar from './StatBar';

export default function PokemonStats({ stats }) {
  const colors = useTheme().colors;
  const fontRegular = useTheme().fonts.regular;
  const statsColors = colors.pokemon.stats;
  const statsValues = stats.map((stat) => stat[1]);

  const statBarsValues = [
    { name: 'HP', value: statsValues[0], color: statsColors.hp },
    { name: 'ATK', value: statsValues[1], color: statsColors.attack },
    { name: 'DEF', value: statsValues[2], color: statsColors.defense },
    { name: 'SP ATK', value: statsValues[3], color: statsColors.specialAttack },
    { name: 'SP DEF', value: statsValues[4], color: statsColors.specialDefence },
    { name: 'SPD', value: statsValues[5], color: statsColors.speed },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={[styles.header, { ...fontRegular, color: colors.cardCaption }]}>Base stats</Text>
      {statBarsValues.map((barValues, index) => (
        <StatBar key={index} {...barValues} />
      ))}
      <Text
        style={[styles.total, { ...fontRegular, color: colors.cardCaption }]}
      >{`TOTAL ${statsValues.reduce((result, number) => result + number)}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    padding: RFValue(8),
    borderRadius: RFValue(20),
    elevation: 8,
    marginTop: RFValue(16),
    marginBottom: RFValue(16),
  },
  header: {
    fontSize: RFValue(20),
    includeFontPadding: false,
    lineHeight: RFValue(20),
    textAlign: 'center',
  },
  total: {
    fontSize: RFValue(15),
    marginTop: RFValue(12),
    textAlign: 'center',
  },
});
