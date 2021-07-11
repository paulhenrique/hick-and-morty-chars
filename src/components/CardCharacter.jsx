import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
function CardCharacter({ character }) {
  const dispatch = useDispatch();
  const favorites = useSelector(store => store.favorites);


  const addToFavorites = (character) => {
    dispatch({ type: 'ADD_CHARACTER_TO_FAVORITES', character });
  }

  const removeFromFavorites = (character) => {
    dispatch({ type: 'REMOVE_CHARACTER_FROM_FAVORITES', character });
  }

  const isFavorite = favorites.filter(e => e.id === character.id).length !== 0;

  return (
    <div className="mt-3 col-md-4">
      <div className="p-3 bg-transparent card rounded-3 text-center shadow-lg">
        <img src={character.image} alt={character.name} className="rounded-circle mx-auto w-50 mt-4" />
        <h2 className="text-2xl text-center">{character.name}</h2>
        {
          !isFavorite ?
            (<button className="btn btn-primary" onClick={() => addToFavorites(character)} >Favoritar</button>)
            : (<button className="btn btn-danger" onClick={() => removeFromFavorites(character)} >Remover dos Favoritos</button>)
        }
      </div>
    </div>
  )
}

export default CardCharacter;
