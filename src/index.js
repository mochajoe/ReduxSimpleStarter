import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCyA8AT_JaltAsp_JK00CauMfdd_xG1_bA';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

// Take this compoennt's generated HTML and put in on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
