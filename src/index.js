import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBRrKYyGMooeG_nFxKrzGgjnsV1jNsZ2WE';
// Create a new component. This component should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// take this component's generated html and put in on the page/in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));