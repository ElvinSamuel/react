import React, {Component} from 'react';
import './Pet.css';

import HobbyList from './HobbyList.js';

// you could do 'export default class Pet extends Component...'
class Pet extends Component {

    render() {

        /*New, simplified code*/
        return (
            <div className="card">
                <h2 className="name">Moxie</h2>
                <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" 
                    alt="Moxie, the cat" />
                    
                <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
                
                {/* Now our add in our second component. */}
                <HobbyList />
            </div>
        );
    }
}

export default Pet;