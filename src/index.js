import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this compoennt's generated HTML and put in on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
