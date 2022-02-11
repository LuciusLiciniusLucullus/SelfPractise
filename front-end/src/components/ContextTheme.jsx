import React, {Component} from 'react';
import { ThemeContext } from '../App';

export default class ContextTheme extends Component{
    themeStyles(dark){
        return{
            backgroundColor: dark ? '#333' : '#CCC',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render(){
    return(
        <ThemeContext.Consumer>
            {darkTheme => {
                return <div style={this.themeStyles(darkTheme)}>
                    Class Theme Boi
                </div>
            }}
        </ThemeContext.Consumer>
    )
    }
}
