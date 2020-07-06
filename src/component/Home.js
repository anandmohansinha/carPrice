import React,{Component, Fragment} from 'react';
import Banner from './Banner';
import ArtistList from './ArtistList';
import Header from './Header';

const url="http://localhost:8900/artists";
const urlCar="http://localhost:8900/car";

class Home extends Component {
    constructor(){
        super()

        this.state={
            artists:'',
            cars : ''
        }
        
    }
    render(){
        console.log(">>>",this.state.artists);
        return(
            <Fragment>
                <Header/>
                <Banner/>
                <ArtistList artistData={this.state.artists} carData={this.state.cars}></ArtistList>
            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                artists:data
            })
        })
        fetch(urlCar,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                cars:data
            })
        })
    }
}


export default Home;