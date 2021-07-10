import React from 'react'
import { useSelector } from 'react-redux';
import CardCharacter from './CardCharacter';

function CharacterList() {
  const characters = useSelector(state => state);
  console.log('here', characters);
  return (
    <div>
      {[1,2,3].map((m) => (
        <CardCharacter key={m} />
      ))}
    </div>
  )
}

export default CharacterList
 