import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './Radar.css'
import PokeMarker from '../../../components/Marker/PokeMarker'
import Loader from '../../../components/Loader/Loader'

export default class Radar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            pokemons: [],
            center: {lat: 40.73, lng: -73.93},
            zoom: 12
        }
    }

    componentDidMount() {        
        console.log(1);
        this.getLocation();
        this.loadData();
    }

    loadData() {
        let loading = true;
        this.setState({...this.state, loading});        
        fetch('https://pokeapi.now.sh/api/pokemons')
            .then( res => res.json())
            .then( res => {            
                const pokemons = res;
                this.setState( {...this.state, pokemons, loading});                                
            }).finally( ()=> {
                loading = false;
                this.setState({...this.state, loading});
        });
    }

    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                ...this.state,
                center: {lat: position.coords.latitude, lng: position.coords.longitude}                    
            })
            this.loadData();
          }, ()=> {});
        } else { 
        //   x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    /**
     * This method return a random nearby location from the center of the map
     * @param {*} original_lat 
     * @param {*} original_lng 
     */
    nearbyLocation(original_lat, original_lng) {        
        var r = 20000/111300 // = 20000 meters
            , y0 = original_lat
            , x0 = original_lng
            , u = Math.random()
            , v = Math.random()
            , w = r * Math.sqrt(u)
            , t = 2 * Math.PI * v
            , x = w * Math.cos(t)
            , y1 = w * Math.sin(t)
            , x1 = x / Math.cos(y0)

        const newY = y0 + y1
        const newX = x0 + x1
        return {lat: newY, lng: newX}
    }

    render() {
        console.log("rerender");
        const pokeMarkers = [...this.state.pokemons].map( (pokemon, key) => {
            const {lat, lng} = this.nearbyLocation(this.state.center.lat, this.state.center.lng);
            return <PokeMarker lat={lat} lng={lng} text={pokemon.name} imageUrl={pokemon.sprites.front_default} key={key}/>
            });
        const center = this.state.center;
        return (
            <div className="PokeRadar">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB23teGZQZjd-pnFCIeziABboqMW2nsBRo' }}
                    defaultCenter={center}
                    center={center}
                    defaultZoom={this.state.zoom}
                    >
                    {pokeMarkers}                                                                              
                </GoogleMapReact>
                {this.state.loading ? <Loader /> : null}
            </div>
        )
    }
}
