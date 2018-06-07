import React, { Component } from 'react';
import './RecipeApp.css';

// Import our Recipe.js component
import Recipe from './Recipe';

class RecipeApp extends Component {
  
  static defaultProps = {
    recipes: [{
      title: "Spaghetti",
      ingredients: ["Pasta", "8 cups water", "12oz Dry Spaghetti Pasta"],
      instructions: "Bring water to a boil, add pasta. Let cook for 8 minutes. Turn off heat, strain pasta. Then add pasta sauce.",
      img: "spaghetti.jpg"
    },
    {
      title: "Milkshake",
      ingredients: ["2 Scoops Ice Cream (Your Choice)", "8oz Milk (Preferrably Whole)"],
      instructions: ["Combine Ice Cream with Milk, blend until creamy. Enjoy."],
      img: "spaghetti.jpg"
    },
    {
      title: "Rum Ham",
      ingredients: ["2 Handles of Rum (Preference)", "5lbs Cooked Spiral Ham", "2 Pineapple Slices (For garnish)"],
      instructions: ["In a large container, combine the rum and ham and allow to marinate for 24 - 48 hrs in refridgerator. Pour out (or drink) the rum, garnish ham with Pineapple slices. Enjoy."],
      img: "spaghetti.jpg"
    }]
  }
  
  render() {
    return (
      <div>
        {this.props.recipes.map((r, index) => {
          <Recipe key={index} {...r} />
        })}
	    </div>
    );
  }
}

export default RecipeApp;
