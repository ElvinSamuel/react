import React, { Component } from 'react';
import './RecipeApp.css';

// // Import our Recipe.js component
// import Recipe from './Recipe';

// Our RecipeList Component
import RecipeList from './RecipeList';

class RecipeApp extends Component {
  
  render() {
    return (
      <div className="App">
          <RecipeList/>
	    </div>
    );
  }
}

export default RecipeApp;