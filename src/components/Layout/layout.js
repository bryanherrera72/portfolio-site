import React, {Component} from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import "./layout.css"

class Layout extends Component{
  state = {
    viewAtTop: true,
    navExpanded: false
  }

  scrollEventHandler = ()=> {
    // console.log(window.scrollY);
    if(window.scrollY <= 10){
      if(this.state.viewAtTop !== true)
        this.setState({viewAtTop: true});
    }
    else{
      if(this.state.viewAtTop !== false)
        this.setState({viewAtTop: false});
    }

  }
  navExpandHandler = ()=>{
    console.log("expand");
    this.setState((state)=>{
      return { navExpanded: !state.navExpanded };
    });
  }
  componentDidMount(){
    window.addEventListener('scroll', this.scrollEventHandler);
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrollEventHandler);
  }
  
  render(){
    return(
      <div className = "Layout">
        <Header 
          viewAtTop = {this.state.viewAtTop} 
          expandNav={this.navExpandHandler}
          expanded = {this.state.navExpanded}/>
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
