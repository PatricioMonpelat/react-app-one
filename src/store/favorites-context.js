import { createContext, useState } from "react";

// function below has capital letter (F) because this is going to return an object that is going to be a component
// react convention starts components with initial Capital letter
const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
