import React, {Component} from 'react';
import Typed from 'typed.js';


class TypingText extends Component{
    
    componentDidMount(){
        let typedOptions = {
            strings: [
                'I\'m Bryan Herrera.^1500\nI love creating',
                'I\'m Bryan Herrera.\nI love coding.',
                'I\'m Bryan Herrera.\nI love learning.',
                'I\'m Bryan Herrera.\nAll of the above.',
                ':)^1000\nLet\'s chat.^2000\n&#65086;',
                ':)\nLet\'s chat.\n',
                ':)\nLet\'s chat.\n&#65086;'],
            typeSpeed: 45,
            backSpeed: 20,
            backDelay: 600,
            cursorChar: '|',
            loop:true,
            smartBackspace: true
        };
        this.name = new Typed (this.name,typedOptions);
        
    }
    componentWillUnmount(){
        
    }

    render(){
        return (
            // unfortunately have to include this div for Typed to work 
            <div className = "TypingText" >
                <span 
                    style = {{'fontSize': '2.5em', 'whiteSpace':'pre'}} 
                    ref = {(name)=>{this.name = name}}></span>
                    <br/>
            </div>
        );
    }
}
export default TypingText;