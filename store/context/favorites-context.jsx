import {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

function FavoritesContextProvider({children}) {
  const [favmeal, setFavmeal] = useState([]);
  function addFavorite(id) {
    setFavmeal(currfavId => [...currfavId, id]);
  }

  function removeFavorite(id) {
    setFavmeal(currfavId => currfavId.filter(mealId => mealId !== id));
  }

  const value = {
    ids: favmeal,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
