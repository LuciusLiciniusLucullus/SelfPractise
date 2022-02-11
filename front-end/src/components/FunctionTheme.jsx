import React, {useContext} from 'react';
import { ThemeContext } from '../App';

function FunctionTheme(){
    //returns props from useContext
    const darkTheme = useContext(ThemeContext)
    
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        padding: '2rem',
        margin: '2rem'
    }
    return <div style={themeStyles}>
        <h1>Function Boi</h1>
    </div>
}

export default FunctionTheme;