import { useState } from 'react';
import axios from 'axios';

import {
  ErrorMessage,
  DictionaryResponse,
  Loader,
  SearchInput,
  NotFound,
  Navbar,
} from './components';

function App() {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMeaning = async (word) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!res.statusText === 'OK') {
        throw new Error('Something went wrong!');
      }
      setError(null);
      setResponse(res.data);
    } catch (error) {
      setError(error.response);
      setResponse([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <Navbar />
      <SearchInput getMeaning={getMeaning} />
      {loading && <Loader />}
      {error && error.status === 404 && <NotFound />}
      {error && error.status !== 404 && (
        <ErrorMessage
          errorMessage={error.message}
          onReload={() => window.location.reload()}
        />
      )}
      {response.length === 0 ? (
        <hr className="w-[95%] h-[1px] bg-gray-200 mt-[4rem] mx-auto" />
      ) : (
        <DictionaryResponse response={response} />
      )}
    </div>
  );
}

export default App;
