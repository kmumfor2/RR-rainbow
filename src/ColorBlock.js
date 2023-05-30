import React from 'react'

function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'

function App(){
    let colors = [
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ]
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    return (
        <div className="App">
            {colorMap}
        </div>
    )
}


// Do not forget to export your component once you have built it!
export default ColorBlock
