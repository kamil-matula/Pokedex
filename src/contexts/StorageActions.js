import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage functionality to load favourite pokemons from local storage
export const loadFavouritesIds = async () => {
  try {
    const json = await AsyncStorage.getItem('favouritesIds');
    if (json === null) {
      return null;
    }
    const ids = JSON.parse(json);
    return ids;
  } catch (e) {
    console.log(e);
    return null;
  }
};

// AsyncStorage functionality to save favourite pokemons from local storage
export const saveFavouritesIds = async (pokemons) => {
  try {
    const json = JSON.stringify(
      pokemons.filter((pokemon) => pokemon.isFavourite).map((pokemon) => pokemon.id)
    );
    await AsyncStorage.setItem('favouritesIds', json);
  } catch (e) {
    console.log(e);
  }
};

// AsyncStorage functionality to load theme settings ("dark" or "light" string) from local storage
export const loadThemeSettings = async () => {
  try {
    const theme = await AsyncStorage.getItem('themeSettings');
    return theme;
  } catch (e) {
    console.log(e);
    return null;
  }
};

// AsyncStorage functionality to save theme settings ("dark" or "light" string) to local storage
export const saveThemeSettings = async (theme) => {
  try {
    await AsyncStorage.setItem('themeSettings', theme);
  } catch (e) {
    console.log(e);
  }
};
