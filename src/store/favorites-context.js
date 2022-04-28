import { createContext, useState } from "react";

// function below has capital letter (F) because this is going to return an object that is going to be a component
// react convention starts components with initial Capital letter
const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) =>{},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteMeetup){
      setUserFavorites((prevUserFavorites) => {
          return prevUserFavorites.concat(favoriteMeetup);
      });
  }

  function removeFavoriteHandler(meetupId){
      setUserFavorites((prevUserFavorites) => {
          return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
      });
  }

  function itemIsFavoriteHandler(meetupId){
      return userFavorites.some(meetup => meetup.id === meetupId);
  }



  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;