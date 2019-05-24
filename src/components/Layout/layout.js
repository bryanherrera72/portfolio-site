import React, {Component} from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import "./layout.css"

class Layout extends Component{
  state = {
    viewAtTop: true
  }

  scrollEventHandler = ()=> {
    console.log(this.state.viewAtTop);
    console.log(window.scrollY);
    if(window.scrollY <= 10){
      if(this.state.viewAtTop != true)
        this.setState({viewAtTop: true});
    }
    else{
      if(this.state.viewAtTop != false)
        this.setState({viewAtTop: false});
    }

  }
  componentDidMount(){
    window.addEventListener('scroll', this.scrollEventHandler);
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollEventHandler);
  }
  
  render(){
    return(
      <div>
        <Header viewAtTop = {this.state.viewAtTop}/>
        <main className = "Content">{this.props.children}</main>
        <Footer/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
