import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { DetailsAppBar } from '../../components';
import { PokemonDataContext } from '../../contexts';

export default function General() {
  const {
    currentPokemon: { color, sprite },
  } = useContext(PokemonDataContext);

  return (
    <>
      <DetailsAppBar color={color} sprite={sprite} />
      <SafeAreaView style={styles.ListContainer}>
        <Text>[General]</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  ListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
