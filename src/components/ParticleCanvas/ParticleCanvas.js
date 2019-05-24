import React, {Component} from 'react';
import './ParticleCanvas.css';
import {Stage, Layer} from 'react-konva';
import Particle from './Particle/Particle';
class ParticleCanvas extends Component {
    constructor(props){
        super(props);
        this.containerRef = React.createRef();
        this.maxParticles = 12;
    }
    
    state = {
        id: null,
        stageWidth: 1400,
        stageHeight: 500,
        particles: []
    }
    
    updateStage= () => {
        //Need this for responsiveness
        const width = this.containerRef.current.offsetWidth;
        if(width > 0){
            this.setState({
                stageWidth: width
            }); 
        }
    }

    initParticles = ()=>{
        let newParticles = [];
        for(let i =0; i< this.maxParticles; i++){
            let size = Math.random() * 4 + 5;
            newParticles.push(
                {
                    x: Math.random() * this.state.stageWidth, //x-coordinate
                    y: Math.random() * this.state.stageHeight, //y-coordinate
                    w: size,
                    h: size,
                    vx: Math.random() * 7 - 3.5,
                    s: Math.random() * 0.2 - 0.1
                }
            );
        }
        this.setState({
            particles : [...newParticles]
        });
        
        let id = setInterval(
            ()=>{
                this.updateParticlePositions();
            }, 
        1000/30); 

        this.setState({
            id: id
        })
       
    }
    updateParticlePositions = ()=>{
        let updatedParticles = [];
        for (var i = 0; i < this.maxParticles; i++) {
            var p = this.state.particles[i];
            p.a += p.s;
            p.y += 10;
            p.x += p.vx;
      
            if (p.x > this.state.stageWidth + 5 || p.x < -5 || p.y > this.state.stageHeight) {
              if (i % 3 > 0) {
                p.x = Math.random() * this.state.stageWidth;
                p.y = -10;
              }
            }
            updatedParticles.push(p);
        }   
        this.setState({
            particles: [...updatedParticles]
        }); 
    }
    componentDidMount = () => {
        this.updateStage();
        this.initParticles();
        window.addEventListener('resize', this.updateStage);
    }

    componentWillUnmount = () => {
        clearInterval(this.state.id);
        window.removeEventListener('resize', this.updateStage);
    }
    
    render = ()=>{ 
        let particles = this.state.particles.map((particle, index)=>{
            return(
                <Particle key = {index} xPos= {particle.x} yPos= {particle.y}/>
            )
        });
        
        return (
            <div 
                className = "ParticleCanvas" 
                ref = {this.containerRef}>
                <Stage 
                    width = {this.state.stageWidth}
                    height = {this.state.stageHeight}>
                    <Layer>
                        {particles}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default ParticleCanvas;