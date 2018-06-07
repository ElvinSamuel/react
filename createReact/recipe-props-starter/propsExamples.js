import React, {Component} from 'react';

class IngredientsListStyle1 extends Component {
    
    /* 
        Just like Java or other OOPLs 'static' is 
        in JS, and just means that this thing is the 
        same no matter what instance calls it.
    */
    static defaultProps = {
        ingredients: []
    }
    
    render() {
        return (
            <ul>
                {this.props.ingredients.map((ing, index) => {
                    <li key={index}>{ing}</li> 
                })}
            </ul>
        );
    }
}


// Or you can create a default prop as an extension of the prototype
class IngredientsListStyle2 extends Component {
    
    render() {
        return (
            <ul>
                {this.props.ingredients.map((ing, index) => {
                    <li key={index}>{ing}</li> 
                })}
            </ul>
        );
    }
}

IngredientsListStyle2.defaultProps = {
    ingredients: []
}

class App extends Component {
    static defaultProps = {
        recipes: [{
            title: "Spaghetti",
            ingredients: ["flour", "water"],
            instructions: "Mix ingredients",
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