import React from 'react';

import config from '../utilities/config';

const ButtonContainer = (props) => {
    let getData = props.getData;

    // Render buttons
    let renderButtons= () => {
        let element = config.apiList.map((api, index) => {
            return (
                <button 
                    type = 'button' 
                    onClick = {getData.bind(null, api)}
                    key = {index}
                > 
                    Button {index + 1}
                </button>
            )
        })
        return element;
    }

    return (
        <div id = 'button-container'>
            {renderButtons(getData)}
        </div>
    )
}

export default ButtonContainer;