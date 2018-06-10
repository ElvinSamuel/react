import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
    
    static defaultProps = {
        recipes: [
            {
              title: "Spaghetti",
              instructions: "Bring water to a boil, add pasta. Let cook for 8 minutes. Turn off heat, strain pasta. Then add pasta sauce.",
              ingredients: ["Pasta", "8 cups water", "12oz Dry Spaghetti Pasta"],
              img: "spaghetti.jpg"
            },
            {
              title: "Milkshake",
              instructions: ["Combine Ice Cream with Milk, blend until creamy. Enjoy."],
              ingredients: ["2 Scoops Ice Cream (Your Choice)", "8oz Milk (Preferrably Whole)"],
              img: "spaghetti.jpg"
            },
            {
              title: "Rum Ham",
              instructions: ["In a large container, combine the rum and ham and allow to marinate for 24 - 48 hrs in refridgerator. Pour out (or drink) the rum, garnish ham with Pineapple slices. Enjoy."],
              ingredients: ["2 Handles of Rum (Preference)", "5lbs Cooked Spiral Ham", "2 Pineapple Slices (For garnish)"],
              img: "spaghetti.jpg"
            }
        ]
    }
    
  
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    
    render() {
        const recipes = this.props.recipes.map((r, index) => (
                <Recipe key={index} {...r} />
            ));
        
        return(
            <div className="recipe-list">
                {recipes}
            </div>
            );
    }
}

export default RecipeList;