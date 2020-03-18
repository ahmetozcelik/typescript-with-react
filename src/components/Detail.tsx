import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";

class Detail extends Component{
    componentDidMount(){
        
    }
    render() {
        return (
            <div>
                <p>{this.props.}</p>
            </div>
        )
    }
}

export default Detail
