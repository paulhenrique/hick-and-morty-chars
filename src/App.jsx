import React from 'react';
import {useDispatch} from 'react-redux';
import CharacterList from './components/CharacterList';
import {api} from './services/api';
function App() {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    async function getCharacterData() {
      const {data:{results}} = await api.get('/character');
      console.log(results);
      dispatch({type:'SET_CHARACTERS', characters:results});
    }

    getCharacterData();

  }, [dispatch])
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mt-5">Rick and Morty App</h1>
      <CharacterList></CharacterList>
    </div>
  );
}

export default App;
