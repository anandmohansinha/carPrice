const { Component } = require("react");
import React,{Component} from 'react';
import Header from './Header';
import axios from 'axios';


const url = "http://localhost:8900/car";
class CarComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            details:''
        }
    }
   async componentDidMount(){
        const response = await axios.get(`${url}`)
        this.setState()
    }
    render(){
        return(

        )
    }
}