import React from 'react'
import { useDispatch } from 'react-redux';
function CardCharacter({ character }) {
  const dispatch = useDispatch();
  const handleFavorite = (character) => {
    dispatch({ type: 'ADD_CHARACTER_TO_FAVORITES', character });
  }
  return (
    <div className="mt-3 col-md-4">
      <div className="p-3 bg-transparent card rounded-3 text-center shadow-lg">
        <img src={character.image} alt={character.name} className="rounded-circle mx-auto w-50 mt-4" />
        <h2 className="text-2xl text-center">{character.name}</h2>
        <button className="btn btn-primary" onClick={() => handleFavorite(character)} >Favoritar</button>
      </div>
    </div>
  )
}

export default CardCharacter;
