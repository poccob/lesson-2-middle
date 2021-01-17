import React from 'react';
import data from './data.json';
import Card from './Card';

function App() {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className="App">
      <h1>Карточки для второго урока, задание №2 (среднее)</h1>
      <input 
        type="text" 
        className="search" 
        placeholder="Поиск..." 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="container">
        <div className="row">
          {
            data
            .filter((obj) => 
              obj.title.toLowerCase().includes(inputValue.toLowerCase()) || 
              obj.description.toLowerCase().includes(inputValue.toLowerCase()))
            .map((obj) => (
              <Card 
                key={obj.image} 
                title={obj.title} 
                imageUrl={obj.image} 
                description={obj.description} 
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
