import React, { Component } from 'react';
import './RecipeApp.css';

// // Import our Recipe.js component
// import Recipe from './Recipe';

import RecipeList from './RecipeList';
import Navbar from './Navbar';

class RecipeApp extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList/>
	    </div>
    );
  }
}

export default RecipeApp;
