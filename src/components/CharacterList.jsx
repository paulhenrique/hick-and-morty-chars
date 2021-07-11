import React from 'react'
import { useSelector } from 'react-redux';
import CardCharacter from './CardCharacter';

function CharacterList() {
  const characters = useSelector(state => state.characters);
  console.log('here', characters);
  return (
    <div className="row">
      {characters.map((char) => (
        <CardCharacter key={char.id} character={char} />
      ))}
    </div>
  )
}

export default CharacterList
