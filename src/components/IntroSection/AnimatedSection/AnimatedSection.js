import React from 'react';
import {useSpring, animated} from 'react-spring';
import './AnimatedSection.css';
import TypingText from './TypingText/TypingText';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 50, 1.3]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const animatedText = props =>{
    
    const [val, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 8, tension: 200, friction: 80 } }))
    return (
        <animated.div  
            className = "AnimatedSection"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: val.xys.interpolate(trans) }}>
            
            <TypingText/>
        </animated.div>
    );
}
export default animatedText;