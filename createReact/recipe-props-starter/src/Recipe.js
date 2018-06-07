import React, {Component} from 'react';
import './Recipe.css'

/* 
	For some reason, in JSX you can't return
	multiple JSX elements (the div Recipe & ul
	in this case) right next to each other, so
	I had to wrap everything in a <div>.
*/
		
class Recipe extends Component {

	render(){
		const {title, img, instructions} = this.props;
		const ingredients = this.props.ingredients.map((ing, index) => (
				<li key={index}>{ing}</li>
			));
		
		return(
			
			<div className='recipe-card'>
				<div className='recipe-card-img'>
					<img src={img} alt={title} />
				</div>
				
				<div className='recipe-card-content'>
					<h3 className='recipe-card-title'>Recipe {title}</h3>
					<h4>Ingredients: </h4>
					<ul>
						{ingredients}
					</ul>
					<h4>Instructions: </h4>
					<p>{instructions}</p>
				</div>
				
			</div>
		);
	}

}

export default Recipe;
