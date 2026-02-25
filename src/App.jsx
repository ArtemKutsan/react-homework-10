import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CatImage from './components/CatImage';

const API_BASE_URL = 'https://api.thecatapi.com/v1';
const RANDOM_IMAGE_URL = `${API_BASE_URL}/images/search`;

function App() {
  const [randomImageUrl, setRandomImageUrl] = useState('#');

  const fetchData = async (url) => {
    const response = await axios.get(url);
    console.log(response);
    setRandomImageUrl(response.data[0].url);
  };

  useEffect(() => {
    fetchData(RANDOM_IMAGE_URL);
  }, []);

  return (
    <>
      <main>
        <h1 className="container">React Homework 10</h1>

        <section>
          <div
            className="container"
            style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}
          >
            <h2>Задача 1: Получение случайных картинок с сервера</h2>
            <button onClick={() => fetchData(RANDOM_IMAGE_URL)}>Сменить картинку</button>
            <CatImage url={randomImageUrl} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
