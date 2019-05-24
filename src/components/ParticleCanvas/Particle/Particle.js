import React, {Component} from 'react';
import {Rect} from 'react-konva';
class Particle extends Component{
    

    componentDidMount(){
        // console.log(this.particle);
    }

    render(){
        let color = '#D6D5C9';
        
        return (
            <Rect
                ref = {ref=>{this.particle = ref}}
                x={this.props.xPos}
                y={this.props.yPos}
                width={10}
                height={10}
                fill={color}
                noise={1}
                shadowColor={'#ffffff'}
                shadowBlur={5}
            />
          );
    }
    
}

export default Particle;