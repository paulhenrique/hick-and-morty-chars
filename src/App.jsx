import React from 'react';
import { useDispatch } from 'react-redux';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';
import { api } from './services/api';
function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function getCharacterData() {
      const { data: { info, results } } = await api.get('/character');
      console.log(results);
      dispatch({ type: 'SET_CHARACTERS', characters: results });
      dispatch({ type: 'SET_INFO', info: info });
    }

    getCharacterData();
  }, [dispatch]);

  return (
    <div className="container mx-auto pb-5 text-center">
      <h1 className="text-5xl py-5">Rick and Morty Chars</h1>
      <CharacterList></CharacterList>
      <Pagination />
    </div>
  );
}

export default App;
